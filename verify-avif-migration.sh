#!/bin/bash

# AVIF Migration Verification Script
# This script automates verification steps from CLEANUP-CHECKLIST.md

set -e

echo "================================================"
echo "AVIF Migration Verification Script"
echo "================================================"
echo ""

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track test results
TESTS_PASSED=0
TESTS_FAILED=0

function test_result() {
  if [ $1 -eq 0 ]; then
    echo -e "${GREEN}✓ PASS${NC}: $2"
    ((TESTS_PASSED++))
  else
    echo -e "${RED}✗ FAIL${NC}: $2"
    ((TESTS_FAILED++))
  fi
}

echo "Step 1: Checking build output..."
echo "-----------------------------------"

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo -e "${RED}Error: dist/ directory not found. Run 'npm run build' first.${NC}"
  exit 1
fi

# Count AVIF files
AVIF_COUNT=$(find dist/_astro -name "*.avif" 2>/dev/null | wc -l)
echo "AVIF files found: $AVIF_COUNT"

if [ "$AVIF_COUNT" -eq 144 ]; then
  test_result 0 "Correct number of AVIF files (144)"
else
  test_result 1 "Expected 144 AVIF files, found $AVIF_COUNT"
fi

# Check AVIF file sizes
echo ""
echo "Step 2: Checking AVIF file sizes..."
echo "------------------------------------"

LARGE_FILES=$(find dist/_astro -name "*.avif" -size +200k 2>/dev/null | wc -l)
if [ "$LARGE_FILES" -eq 0 ]; then
  test_result 0 "No AVIF files larger than 200KB (good compression)"
else
  test_result 1 "Found $LARGE_FILES AVIF files larger than 200KB"
fi

# Check for responsive variants
echo ""
echo "Step 3: Checking for responsive image variants..."
echo "--------------------------------------------------"

SAMPLE_IMAGE=$(find dist/_astro -name "A-Bennett-108*.avif" 2>/dev/null | head -1)
if [ -n "$SAMPLE_IMAGE" ]; then
  BASE_NAME=$(echo "$SAMPLE_IMAGE" | sed 's/_[^_]*\.avif$//')
  VARIANTS=$(find dist/_astro -name "$(basename $BASE_NAME)*.avif" 2>/dev/null | wc -l)

  if [ "$VARIANTS" -ge 2 ]; then
    test_result 0 "Responsive variants generated (found $VARIANTS for sample image)"
  else
    test_result 1 "Only $VARIANTS variant found, expected multiple"
  fi
fi

# Check image registry file
echo ""
echo "Step 4: Checking image registry..."
echo "-----------------------------------"

if [ -f "src/data/imageRegistry.ts" ]; then
  test_result 0 "imageRegistry.ts exists"

  # Check for eager imports
  if grep -q "eager: true" src/data/imageRegistry.ts; then
    test_result 0 "Eager imports enabled"
  else
    test_result 1 "Eager imports not found"
  fi
else
  test_result 1 "imageRegistry.ts not found"
fi

# Check assets directory
echo ""
echo "Step 5: Checking assets directory..."
echo "-------------------------------------"

if [ -d "src/assets/images/projects" ]; then
  PROJECT_IMAGES=$(ls src/assets/images/projects/*.{jpg,jpeg,png} 2>/dev/null | wc -l)
  echo "Project images found: $PROJECT_IMAGES"

  if [ "$PROJECT_IMAGES" -ge 60 ]; then
    test_result 0 "Project images directory populated"
  else
    test_result 1 "Expected ~65 project images, found $PROJECT_IMAGES"
  fi
else
  test_result 1 "src/assets/images/projects/ not found"
fi

if [ -d "src/assets/images/gallery" ]; then
  GALLERY_IMAGES=$(ls src/assets/images/gallery/*.{jpg,jpeg,png} 2>/dev/null | wc -l)
  echo "Gallery images found: $GALLERY_IMAGES"

  if [ "$GALLERY_IMAGES" -ge 200 ]; then
    test_result 0 "Gallery images directory populated"
  else
    test_result 1 "Expected ~213 gallery images, found $GALLERY_IMAGES"
  fi
else
  test_result 1 "src/assets/images/gallery/ not found"
fi

# Check projects.ts updates
echo ""
echo "Step 6: Checking projects.ts updates..."
echo "----------------------------------------"

if grep -q "import { getProjectImage, getGalleryImage }" src/data/projects.ts; then
  test_result 0 "Image registry imports found in projects.ts"
else
  test_result 1 "Image registry imports not found in projects.ts"
fi

if grep -q "ImageMetadata" src/data/projects.ts; then
  test_result 0 "ImageMetadata type found in projects.ts"
else
  test_result 1 "ImageMetadata type not found in projects.ts"
fi

if grep -q "getProjectImage\\|getGalleryImage" src/data/projects.ts; then
  test_result 0 "Helper functions used in projects.ts"
else
  test_result 1 "Helper functions not used in projects.ts"
fi

# Check component updates
echo ""
echo "Step 7: Checking component updates..."
echo "--------------------------------------"

if grep -q "import { Image } from 'astro:assets'" src/pages/our-projects.astro; then
  test_result 0 "Astro Image component imported in our-projects.astro"
else
  test_result 1 "Astro Image component not imported in our-projects.astro"
fi

if grep -q "format=\"avif\"" src/pages/our-projects.astro; then
  test_result 0 "AVIF format specified in our-projects.astro"
else
  test_result 1 "AVIF format not specified in our-projects.astro"
fi

if grep -q "import { Image } from 'astro:assets'" src/pages/our-projects/\[project\].astro; then
  test_result 0 "Astro Image component imported in [project].astro"
else
  test_result 1 "Astro Image component not imported in [project].astro"
fi

# Summary
echo ""
echo "================================================"
echo "Verification Summary"
echo "================================================"
echo -e "Tests passed: ${GREEN}$TESTS_PASSED${NC}"
echo -e "Tests failed: ${RED}$TESTS_FAILED${NC}"
echo ""

if [ "$TESTS_FAILED" -eq 0 ]; then
  echo -e "${GREEN}✓ All verification tests passed!${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Run 'npm run preview' and manually test all project pages"
  echo "2. Run Lighthouse performance tests"
  echo "3. Follow CLEANUP-CHECKLIST.md for final cleanup"
  exit 0
else
  echo -e "${RED}✗ Some tests failed. Please review and fix issues.${NC}"
  echo ""
  echo "See AVIF-MIGRATION-GUIDE.md for troubleshooting help."
  exit 1
fi
