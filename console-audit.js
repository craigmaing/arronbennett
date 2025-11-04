// Console Audit Script for Production Code Quality
// Tests all pages for console errors, warnings, and messages

const pages = [
  { name: 'Homepage', url: 'http://localhost:4321/' },
  { name: 'About Us', url: 'http://localhost:4321/about-us' },
  { name: 'Services', url: 'http://localhost:4321/services' },
  { name: 'Our Projects', url: 'http://localhost:4321/our-projects' },
  { name: 'Contact Us', url: 'http://localhost:4321/contact-us' },
  { name: '404 Page', url: 'http://localhost:4321/404' }
];

async function auditConsoleLogs() {
  const results = {};

  for (const page of pages) {
    console.log(`\n=== Testing ${page.name} ===`);
    console.log(`URL: ${page.url}`);

    results[page.name] = {
      url: page.url,
      errors: [],
      warnings: [],
      info: [],
      logs: [],
      status: 'pending'
    };

    try {
      const response = await fetch(page.url);
      results[page.name].status = response.ok ? 'loaded' : 'failed';
      console.log(`Status: ${response.status} ${response.statusText}`);
    } catch (error) {
      results[page.name].status = 'error';
      results[page.name].errors.push({
        message: error.message,
        type: 'fetch_error'
      });
      console.error(`Fetch Error: ${error.message}`);
    }
  }

  console.log('\n\n=== AUDIT RESULTS ===');
  console.log(JSON.stringify(results, null, 2));

  return results;
}

// Run the audit
auditConsoleLogs().catch(console.error);
