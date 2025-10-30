#!/bin/bash

echo "=== FIXING SPACING INCONSISTENCIES ==="
echo "======================================"

# Fix section spacing - standardize to py-16 lg:py-20
echo "1. Standardizing section padding..."

# Replace standalone py-20 with py-16 lg:py-20
find src -name "*.astro" -exec sed -i 's/\bpy-20\b/py-16 lg:py-20/g' {} +

# Replace standalone py-12 with py-12 lg:py-16
find src -name "*.astro" -exec sed -i 's/\bpy-12\b/py-12 lg:py-16/g' {} +

# Fix container widths where missing max-width
echo "2. Standardizing container widths..."

# Add max-w-6xl to containers without max-width
find src -name "*.astro" -exec sed -i 's/container mx-auto px-4\b/container mx-auto px-4 sm:px-6 lg:px-8/g' {} +

# Fix button rounded corners for consistency
echo "3. Standardizing button styles..."

# Replace rounded-md with rounded-lg for consistency
find src -name "*.astro" -exec sed -i 's/rounded-md/rounded-lg/g' {} +

# Replace shadow-md with shadow-lg for consistency
find src -name "*.astro" -exec sed -i 's/shadow-md/shadow-lg/g' {} +

echo "4. Checking remaining inconsistencies..."

echo "   - py-20 occurrences: $(grep -r '\bpy-20\b' src --include="*.astro" | grep -v 'lg:py-20' | wc -l)"
echo "   - rounded-md occurrences: $(grep -r 'rounded-md' src --include="*.astro" | wc -l)"
echo "   - shadow-md occurrences: $(grep -r 'shadow-md' src --include="*.astro" | wc -l)"

echo -e "\nSpacing fixes completed!"