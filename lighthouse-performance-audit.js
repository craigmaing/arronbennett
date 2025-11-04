#!/usr/bin/env node

/**
 * Comprehensive Lighthouse Performance Audit Script
 * Audits all key pages and generates detailed performance reports
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:4321';
const OUTPUT_DIR = 'lighthouse-reports';

// Pages to audit
const PAGES = [
  { url: '/', name: 'homepage' },
  { url: '/services', name: 'services' },
  { url: '/our-projects', name: 'projects' },
  { url: '/contact-us', name: 'contact' },
  { url: '/about-us', name: 'about' }
];

// Lighthouse configuration for performance-focused audit
const lighthouseConfig = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    },
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false
    }
  }
};

// Mobile configuration
const lighthouseConfigMobile = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1.6 * 1024,
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    },
    screenEmulation: {
      mobile: true,
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      disabled: false
    }
  }
};

/**
 * Run Lighthouse audit on a single page
 */
async function runLighthouse(url, chrome, config, deviceType) {
  const options = {
    logLevel: 'info',
    output: 'json',
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options, config);
  return runnerResult.lhr;
}

/**
 * Extract key metrics from Lighthouse result
 */
function extractMetrics(result) {
  const audits = result.audits;
  const metrics = {
    performanceScore: Math.round(result.categories.performance.score * 100),
    fcp: audits['first-contentful-paint']?.numericValue || 0,
    lcp: audits['largest-contentful-paint']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.numericValue || 0,
    tbt: audits['total-blocking-time']?.numericValue || 0,
    tti: audits['interactive']?.numericValue || 0,
    speedIndex: audits['speed-index']?.numericValue || 0,

    // Resource sizes
    totalByteWeight: audits['total-byte-weight']?.numericValue || 0,

    // Opportunities
    opportunities: []
  };

  // Extract opportunities for improvement
  Object.keys(audits).forEach(auditId => {
    const audit = audits[auditId];
    if (audit.details && audit.details.type === 'opportunity' && audit.score < 1) {
      metrics.opportunities.push({
        id: auditId,
        title: audit.title,
        description: audit.description,
        score: audit.score,
        savings: audit.details.overallSavingsMs || 0
      });
    }
  });

  return metrics;
}

/**
 * Format metrics for display
 */
function formatMetrics(metrics) {
  return {
    'Performance Score': `${metrics.performanceScore}/100`,
    'FCP (First Contentful Paint)': `${(metrics.fcp / 1000).toFixed(2)}s`,
    'LCP (Largest Contentful Paint)': `${(metrics.lcp / 1000).toFixed(2)}s`,
    'CLS (Cumulative Layout Shift)': metrics.cls.toFixed(3),
    'TBT (Total Blocking Time)': `${metrics.tbt.toFixed(0)}ms`,
    'TTI (Time to Interactive)': `${(metrics.tti / 1000).toFixed(2)}s`,
    'Speed Index': `${(metrics.speedIndex / 1000).toFixed(2)}s`,
    'Total Page Weight': `${(metrics.totalByteWeight / 1024).toFixed(0)} KB`
  };
}

/**
 * Main audit function
 */
async function runAudit() {
  console.log('🚀 Starting Lighthouse Performance Audit...\n');

  // Create output directory
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
  } catch (err) {
    // Directory already exists
  }

  // Launch Chrome
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

  const results = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    pages: {}
  };

  try {
    for (const page of PAGES) {
      const fullUrl = `${BASE_URL}${page.url}`;
      console.log(`\n📊 Auditing: ${fullUrl}`);

      // Run desktop audit
      console.log('  Desktop audit...');
      const desktopResult = await runLighthouse(fullUrl, chrome, lighthouseConfig, 'desktop');
      const desktopMetrics = extractMetrics(desktopResult);

      // Run mobile audit
      console.log('  Mobile audit...');
      const mobileResult = await runLighthouse(fullUrl, chrome, lighthouseConfigMobile, 'mobile');
      const mobileMetrics = extractMetrics(mobileResult);

      // Store results
      results.pages[page.name] = {
        url: fullUrl,
        desktop: desktopMetrics,
        mobile: mobileMetrics
      };

      // Save individual reports
      await fs.writeFile(
        path.join(OUTPUT_DIR, `${page.name}-desktop.json`),
        JSON.stringify(desktopResult, null, 2)
      );

      await fs.writeFile(
        path.join(OUTPUT_DIR, `${page.name}-mobile.json`),
        JSON.stringify(mobileResult, null, 2)
      );

      console.log('  ✅ Complete');
      console.log(`     Desktop Score: ${desktopMetrics.performanceScore}/100`);
      console.log(`     Mobile Score: ${mobileMetrics.performanceScore}/100`);
    }

    // Save summary report
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'summary.json'),
      JSON.stringify(results, null, 2)
    );

    // Generate markdown report
    const markdownReport = generateMarkdownReport(results);
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'PERFORMANCE-AUDIT-REPORT.md'),
      markdownReport
    );

    console.log('\n✅ Audit Complete!');
    console.log(`📁 Reports saved to: ${OUTPUT_DIR}/`);

  } finally {
    await chrome.kill();
  }
}

/**
 * Generate markdown report from results
 */
function generateMarkdownReport(results) {
  let report = '# Lighthouse Performance Audit Report\n\n';
  report += `**Generated:** ${new Date(results.timestamp).toLocaleString()}\n\n`;
  report += `**Base URL:** ${results.baseUrl}\n\n`;

  report += '## Summary\n\n';
  report += '| Page | Desktop Score | Mobile Score | Desktop LCP | Mobile LCP | Desktop CLS | Mobile CLS |\n';
  report += '|------|---------------|--------------|-------------|------------|-------------|------------|\n';

  Object.keys(results.pages).forEach(pageName => {
    const page = results.pages[pageName];
    report += `| ${pageName} | ${page.desktop.performanceScore} | ${page.mobile.performanceScore} | `;
    report += `${(page.desktop.lcp / 1000).toFixed(2)}s | ${(page.mobile.lcp / 1000).toFixed(2)}s | `;
    report += `${page.desktop.cls.toFixed(3)} | ${page.mobile.cls.toFixed(3)} |\n`;
  });

  report += '\n## Detailed Results\n\n';

  Object.keys(results.pages).forEach(pageName => {
    const page = results.pages[pageName];
    report += `### ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}\n\n`;
    report += `**URL:** ${page.url}\n\n`;

    report += '#### Desktop Metrics\n\n';
    const desktopFormatted = formatMetrics(page.desktop);
    Object.keys(desktopFormatted).forEach(key => {
      report += `- **${key}:** ${desktopFormatted[key]}\n`;
    });

    report += '\n#### Mobile Metrics\n\n';
    const mobileFormatted = formatMetrics(page.mobile);
    Object.keys(mobileFormatted).forEach(key => {
      report += `- **${key}:** ${mobileFormatted[key]}\n`;
    });

    // Add top opportunities
    if (page.desktop.opportunities.length > 0) {
      report += '\n#### Top Opportunities for Improvement\n\n';
      page.desktop.opportunities
        .sort((a, b) => b.savings - a.savings)
        .slice(0, 5)
        .forEach(opp => {
          report += `- **${opp.title}** (${opp.savings.toFixed(0)}ms savings)\n`;
          report += `  ${opp.description}\n\n`;
        });
    }

    report += '\n---\n\n';
  });

  return report;
}

// Run the audit
runAudit().catch(console.error);
