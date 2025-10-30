/**
 * Schema Validation Script
 * Extracts and validates Schema.org JSON-LD from built HTML pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');

// Pages to check
const pagesToCheck = [
  'index.html',
  'services/index.html',
  'contact-us/index.html'
];

console.log('🔍 Extracting Schema.org JSON-LD from built pages...\n');

pagesToCheck.forEach(page => {
  const fullPath = path.join(distPath, page);

  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${page}\n`);
    return;
  }

  console.log(`\n📄 ${page}`);
  console.log('─'.repeat(80));

  const html = fs.readFileSync(fullPath, 'utf-8');

  // Extract all JSON-LD scripts
  const jsonLdRegex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  const matches = [...html.matchAll(jsonLdRegex)];

  if (matches.length === 0) {
    console.log('⚠️  No Schema.org JSON-LD found');
    return;
  }

  console.log(`✅ Found ${matches.length} schema(s)`);

  matches.forEach((match, index) => {
    try {
      const jsonContent = match[1].trim();
      const schema = JSON.parse(jsonContent);

      console.log(`\n📋 Schema ${index + 1}:`);

      // Determine schema type(s)
      const types = Array.isArray(schema['@type'])
        ? schema['@type']
        : [schema['@type']];

      if (schema['@graph']) {
        console.log(`   Type: @graph with ${schema['@graph'].length} items`);
        schema['@graph'].forEach((item, i) => {
          const itemTypes = Array.isArray(item['@type'])
            ? item['@type']
            : [item['@type']];
          console.log(`   - Item ${i + 1}: ${itemTypes.join(', ')}`);
        });
      } else if (types) {
        console.log(`   Type: ${types.join(', ')}`);
      }

      // Check for key properties
      if (schema.name) console.log(`   Name: ${schema.name}`);
      if (schema.aggregateRating) {
        console.log(`   Rating: ${schema.aggregateRating.ratingValue}/5 (${schema.aggregateRating.reviewCount} reviews)`);
      }
      if (schema.review && Array.isArray(schema.review)) {
        console.log(`   Reviews: ${schema.review.length} individual reviews`);
      }

    } catch (error) {
      console.log(`❌ Error parsing schema ${index + 1}: ${error.message}`);
    }
  });

  console.log('\n');
});

console.log('\n✅ Schema extraction complete!');
console.log('\n📌 Next steps:');
console.log('1. Test with Google Rich Results Test: https://search.google.com/test/rich-results');
console.log('2. Validate with Schema.org validator: https://validator.schema.org/');
console.log('3. Submit sitemap to Google Search Console');
