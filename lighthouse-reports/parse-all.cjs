const fs = require('fs');

const files = {
  'Homepage': 'homepage.json',
  'Services Page': 'services.json',
  'Projects Listing': 'projects.json',
  'Project Detail (Roseland)': 'project-detail.json',
  'Contact Page': 'contact.json'
};

console.log('=' .repeat(80));
console.log('COMPREHENSIVE LIGHTHOUSE AUDIT RESULTS');
console.log('Arron Bennett Building Contractors - Optimized Build');
console.log('=' .repeat(80));
console.log('');

Object.entries(files).forEach(([name, file]) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const cat = data.categories;
  const aud = data.audits;
  
  console.log(`\n### ${name.toUpperCase()}`);
  console.log('-'.repeat(80));
  console.log('Lighthouse Scores:');
  console.log(`  Performance:    ${Math.round(cat.performance.score * 100)}/100`);
  console.log(`  Accessibility:  ${Math.round(cat.accessibility.score * 100)}/100`);
  console.log(`  Best Practices: ${Math.round(cat['best-practices'].score * 100)}/100`);
  console.log(`  SEO:            ${Math.round(cat.seo.score * 100)}/100`);
  console.log('');
  console.log('Core Web Vitals:');
  console.log(`  LCP (Largest Contentful Paint):   ${aud['largest-contentful-paint'].displayValue}`);
  console.log(`  FCP (First Contentful Paint):     ${aud['first-contentful-paint'].displayValue}`);
  console.log(`  TBT (Total Blocking Time):        ${aud['total-blocking-time'].displayValue}`);
  console.log(`  CLS (Cumulative Layout Shift):    ${aud['cumulative-layout-shift'].displayValue}`);
  console.log(`  Speed Index:                      ${aud['speed-index'].displayValue}`);
  
  // Extract bundle size info
  if (aud['resource-summary'] && aud['resource-summary'].details) {
    const items = aud['resource-summary'].details.items;
    const totalSize = items.reduce((sum, item) => sum + item.transferSize, 0);
    console.log('');
    console.log('Resource Summary:');
    console.log(`  Total Transfer Size: ${(totalSize / 1024).toFixed(1)} KB`);
    items.forEach(item => {
      console.log(`    ${item.resourceType}: ${(item.transferSize / 1024).toFixed(1)} KB (${item.requestCount} requests)`);
    });
  }
});

console.log('');
console.log('=' .repeat(80));
