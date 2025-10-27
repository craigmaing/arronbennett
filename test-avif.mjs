/**
 * Test script to verify AVIF image format support
 * Run with: node test-avif.mjs
 */
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const testImage = 'public/images/projects/A-Bennett-72.jpg';

async function testAvifSupport() {
  console.log('Testing AVIF support with Sharp...\n');

  try {
    // Check if test image exists
    const imagePath = path.join(process.cwd(), testImage);
    await fs.access(imagePath);
    console.log('✓ Test image found:', testImage);

    // Get original image info
    const metadata = await sharp(imagePath).metadata();
    console.log(`✓ Original image: ${metadata.format.toUpperCase()}, ${metadata.width}x${metadata.height}, Size: ${(metadata.size / 1024).toFixed(2)}KB`);

    // Test AVIF conversion
    const avifBuffer = await sharp(imagePath)
      .resize(800, 600)
      .avif({ quality: 80 })
      .toBuffer();

    console.log(`✓ AVIF conversion: Size: ${(avifBuffer.length / 1024).toFixed(2)}KB`);

    // Test WebP conversion for comparison
    const webpBuffer = await sharp(imagePath)
      .resize(800, 600)
      .webp({ quality: 80 })
      .toBuffer();

    console.log(`✓ WebP conversion: Size: ${(webpBuffer.length / 1024).toFixed(2)}KB`);

    // Calculate savings
    const avifSavings = ((1 - (avifBuffer.length / webpBuffer.length)) * 100).toFixed(1);
    console.log(`\n✅ AVIF provides ${avifSavings}% better compression than WebP!`);

    // Test format support
    const formats = await sharp.format;
    console.log('\nSupported formats:');
    if (formats.avif && formats.avif.input) console.log('✓ AVIF input supported');
    if (formats.avif && formats.avif.output) console.log('✓ AVIF output supported');
    if (formats.webp && formats.webp.output) console.log('✓ WebP output supported');

    console.log('\n✅ AVIF support is working correctly!');

  } catch (error) {
    console.error('❌ Error testing AVIF support:', error.message);
    process.exit(1);
  }
}

testAvifSupport();