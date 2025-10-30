#!/bin/bash

echo "=== FIXING DESIGN INCONSISTENCIES ==="
echo "====================================="

# Backup first
echo -e "\n1. Creating backups..."
cp -r src src_backup_$(date +%Y%m%d_%H%M%S)

# Fix color inconsistencies
echo -e "\n2. Fixing color inconsistencies..."

# Replace old coral hex with new WCAG compliant
echo "   - Replacing old coral #F27A5E with #A83820..."
find src -type f -name "*.astro" -exec sed -i 's/#F27A5E/#A83820/gi' {} +
find src -type f -name "*.css" -exec sed -i 's/#F27A5E/#A83820/gi' {} +

# Replace alternate coral variations
echo "   - Replacing coral variation #E06A4E with #A83820..."
find src -type f -name "*.astro" -exec sed -i 's/#E06A4E/#A83820/gi' {} +

# Fix navy blue variations
echo "   - Standardizing navy blue to #1A2D4D..."
find src -type f -name "*.astro" -exec sed -i 's/#1A2C4D/#1A2D4D/gi' {} +
find src -type f -name "*.astro" -exec sed -i 's/#021F59/#1A2D4D/gi' {} +
find src -type f -name "*.astro" -exec sed -i 's/#2C3E50/#1A2D4D/gi' {} +

# Replace hardcoded white with Tailwind class where possible in style attributes
echo "   - Replacing inline white colors..."
find src -type f -name "*.astro" -exec sed -i 's/color: #FFFFFF/color: white/gi' {} +
find src -type f -name "*.astro" -exec sed -i 's/color:#FFFFFF/color: white/gi' {} +

# Fix button hover colors to use consistent coral
echo "   - Fixing button hover states..."
find src -type f -name "*.astro" -exec sed -i "s/#8b2e19/#8B2E19/gi" {} +
find src -type f -name "*.astro" -exec sed -i "s/#a83820/#A83820/gi" {} +

echo -e "\n3. Color fixes completed!"

# Count remaining issues
echo -e "\n4. Remaining hardcoded colors:"
echo "   - White (#FFFFFF): $(grep -r '#FFFFFF' src --include="*.astro" | wc -l)"
echo "   - Old coral (#F27A5E): $(grep -r '#F27A5E' src --include="*.astro" | wc -l)"
echo "   - Navy variations: $(grep -rE '#1A2C4D|#021F59' src --include="*.astro" | wc -l)"

echo -e "\nDesign fixes script completed!"
echo "Please review changes and test the site."