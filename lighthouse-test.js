/**
 * Lighthouse Performance Test Script
 * Tests the critical CSS optimizations and measures FCP improvements
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);

  // Extract key metrics
  const metrics = {
    FCP: runnerResult.lhr.audits['first-contentful-paint'].numericValue,
    LCP: runnerResult.lhr.audits['largest-contentful-paint'].numericValue,
    TBT: runnerResult.lhr.audits['total-blocking-time'].numericValue,
    CLS: runnerResult.lhr.audits['cumulative-layout-shift'].numericValue,
    SI: runnerResult.lhr.audits['speed-index'].numericValue,
    performanceScore: runnerResult.lhr.categories.performance.score * 100,
  };

  await chrome.kill();
  return metrics;
}

// Test the optimized site
async function testPerformance() {
  const url = 'http://localhost:3000';

  console.log('🚀 Running Lighthouse Performance Test...\n');
  console.log('Testing URL:', url);
  console.log('Focus: Critical CSS and FCP optimization\n');

  try {
    const metrics = await runLighthouse(url);

    console.log('📊 Performance Metrics:\n');
    console.log(`⚡ First Contentful Paint (FCP): ${(metrics.FCP / 1000).toFixed(2)}s`);
    console.log(`📱 Largest Contentful Paint (LCP): ${(metrics.LCP / 1000).toFixed(2)}s`);
    console.log(`⏱️ Total Blocking Time (TBT): ${metrics.TBT}ms`);
    console.log(`📐 Cumulative Layout Shift (CLS): ${metrics.CLS.toFixed(3)}`);
    console.log(`🎯 Speed Index: ${(metrics.SI / 1000).toFixed(2)}s`);
    console.log(`\n🏆 Overall Performance Score: ${metrics.performanceScore.toFixed(0)}/100`);

    // Check if FCP target is met
    if (metrics.FCP < 1500) {
      console.log('\n✅ SUCCESS: FCP is under 1.5s target!');
    } else {
      console.log(`\n⚠️ FCP needs improvement: ${((metrics.FCP - 1500) / 1000).toFixed(2)}s over target`);
    }

  } catch (error) {
    console.error('Error running Lighthouse:', error);
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testPerformance();
}

module.exports = { runLighthouse, testPerformance };