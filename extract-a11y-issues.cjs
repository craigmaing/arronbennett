const fs = require('fs');

function extractDetails(filename, pageName) {
  const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const audits = data.audits;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`${pageName.toUpperCase()}`);
  console.log(`${'='.repeat(60)}`);

  // Color contrast issues
  if (audits['color-contrast'] && audits['color-contrast'].score < 1) {
    console.log('\n--- COLOR CONTRAST FAILURES ---');
    if (audits['color-contrast'].details && audits['color-contrast'].details.items) {
      audits['color-contrast'].details.items.forEach(item => {
        console.log(`\nElement: ${item.node ? item.node.snippet : 'N/A'}`);
        console.log(`  Contrast: ${item.contrastRatio || 'N/A'}`);
        console.log(`  Expected: ${item.expectedContrastRatio || 'N/A'}`);
        console.log(`  FG: ${item.fgColor || 'N/A'}`);
        console.log(`  BG: ${item.bgColor || 'N/A'}`);
      });
    }
  }

  // Label mismatch issues
  if (audits['label-content-name-mismatch'] && audits['label-content-name-mismatch'].score < 1) {
    console.log('\n--- LABEL CONTENT NAME MISMATCH ---');
    if (audits['label-content-name-mismatch'].details && audits['label-content-name-mismatch'].details.items) {
      audits['label-content-name-mismatch'].details.items.forEach(item => {
        console.log(`\nElement: ${item.node ? item.node.snippet : 'N/A'}`);
        console.log(`  Explanation: ${item.node ? item.node.explanation : 'N/A'}`);
      });
    }
  }

  // Image alt text
  if (audits['image-alt']) {
    console.log('\n--- IMAGE ALT TEXT STATUS ---');
    console.log(`Status: ${audits['image-alt'].score === 1 ? 'PASS' : 'FAIL'}`);
  }

  // Form labels
  if (audits['label']) {
    console.log('\n--- FORM LABELS STATUS ---');
    console.log(`Status: ${audits['label'].score === 1 ? 'PASS' : 'FAIL'}`);
    if (audits['label'].score < 1 && audits['label'].details) {
      audits['label'].details.items.forEach(item => {
        console.log(`\n  Missing label: ${item.node ? item.node.snippet : 'N/A'}`);
      });
    }
  }

  // Heading order
  if (audits['heading-order']) {
    console.log('\n--- HEADING ORDER STATUS ---');
    console.log(`Status: ${audits['heading-order'].score === 1 ? 'PASS' : 'FAIL'}`);
  }

  // ARIA attributes
  if (audits['aria-valid-attr']) {
    console.log('\n--- ARIA VALID ATTRIBUTES ---');
    console.log(`Status: ${audits['aria-valid-attr'].score === 1 ? 'PASS' : 'FAIL'}`);
  }

  // HTML lang
  if (audits['html-has-lang']) {
    console.log('\n--- HTML LANG ATTRIBUTE ---');
    console.log(`Status: ${audits['html-has-lang'].score === 1 ? 'PASS' : 'FAIL'}`);
  }

  // Link names
  if (audits['link-name']) {
    console.log('\n--- LINK NAMES STATUS ---');
    console.log(`Status: ${audits['link-name'].score === 1 ? 'PASS' : 'FAIL'}`);
  }

  // Document title
  if (audits['document-title']) {
    console.log('\n--- DOCUMENT TITLE ---');
    console.log(`Status: ${audits['document-title'].score === 1 ? 'PASS' : 'FAIL'}`);
  }
}

const pages = [
  { file: 'lighthouse-home.json', name: 'Homepage (/)' },
  { file: 'lighthouse-about.json', name: 'About Us (/about-us)' },
  { file: 'lighthouse-services.json', name: 'Services (/services)' },
  { file: 'lighthouse-projects.json', name: 'Projects (/our-projects)' },
  { file: 'lighthouse-contact.json', name: 'Contact (/contact-us)' }
];

pages.forEach(page => {
  if (fs.existsSync(page.file)) {
    extractDetails(page.file, page.name);
  }
});
