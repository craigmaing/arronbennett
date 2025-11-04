const fs = require('fs');

function parseLighthouseReport(filename) {
  const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const category = data.categories.accessibility;
  const audits = data.audits;

  console.log(`\n=== ${filename} ===`);
  console.log(`Accessibility Score: ${category.score * 100}`);
  console.log(`\nFailed Audits:`);

  category.auditRefs.forEach(ref => {
    const audit = audits[ref.id];
    if (audit && audit.score !== null && audit.score < 1) {
      console.log(`\n- ${audit.title}`);
      console.log(`  ID: ${ref.id}`);
      console.log(`  Score: ${audit.score}`);
      console.log(`  Description: ${audit.description}`);
      if (audit.details && audit.details.items) {
        console.log(`  Items: ${audit.details.items.length}`);
      }
    }
  });

  console.log(`\nPassed Audits: ${category.auditRefs.filter(r => audits[r.id] && audits[r.id].score === 1).length}`);
  console.log(`Failed Audits: ${category.auditRefs.filter(r => audits[r.id] && audits[r.id].score !== null && audits[r.id].score < 1).length}`);
}

const files = [
  'lighthouse-home.json',
  'lighthouse-about.json',
  'lighthouse-services.json',
  'lighthouse-projects.json',
  'lighthouse-contact.json'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    parseLighthouseReport(file);
  }
});
