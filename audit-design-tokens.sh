#!/bin/bash

# Design Consistency Audit Script
echo "=== DESIGN CONSISTENCY AUDIT ==="
echo "================================"

# Color audit
echo -e "\n1. COLOR USAGE AUDIT:"
echo "---------------------"

echo -e "\n## Navy Blue Colors:"
grep -r "navy-" src/ --include="*.astro" --include="*.css" --include="*.jsx" --include="*.tsx" | grep -oE "navy-[0-9]+" | sort | uniq -c | sort -rn

echo -e "\n## Coral Colors:"
grep -r "coral-" src/ --include="*.astro" --include="*.css" --include="*.jsx" --include="*.tsx" | grep -oE "coral-[0-9]+" | sort | uniq -c | sort -rn

echo -e "\n## Background Colors (bg-):"
grep -r "bg-" src/ --include="*.astro" | grep -oE "bg-[a-z]+-[0-9]+" | sort | uniq -c | sort -rn | head -20

echo -e "\n## Text Colors:"
grep -r "text-" src/ --include="*.astro" | grep -oE "text-[a-z]+-[0-9]+" | sort | uniq -c | sort -rn | head -20

echo -e "\n## Hex Colors:"
grep -rE "#[A-Fa-f0-9]{6}" src/ --include="*.astro" --include="*.css" | grep -oE "#[A-Fa-f0-9]{6}" | tr '[:lower:]' '[:upper:]' | sort | uniq -c | sort -rn

# Typography audit
echo -e "\n2. TYPOGRAPHY AUDIT:"
echo "--------------------"

echo -e "\n## Font Sizes:"
grep -r "text-" src/ --include="*.astro" | grep -oE "text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)" | sort | uniq -c | sort -rn

echo -e "\n## Font Weights:"
grep -r "font-" src/ --include="*.astro" | grep -oE "font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)" | sort | uniq -c | sort -rn

echo -e "\n## Line Heights:"
grep -r "leading-" src/ --include="*.astro" | grep -oE "leading-[a-z]+" | sort | uniq -c | sort -rn

# Spacing audit
echo -e "\n3. SPACING AUDIT:"
echo "-----------------"

echo -e "\n## Padding (py-):"
grep -r "py-" src/ --include="*.astro" | grep -oE "py-[0-9]+" | sort | uniq -c | sort -rn | head -20

echo -e "\n## Padding (px-):"
grep -r "px-" src/ --include="*.astro" | grep -oE "px-[0-9]+" | sort | uniq -c | sort -rn | head -20

echo -e "\n## Container max-width:"
grep -r "max-w-" src/ --include="*.astro" | grep -oE "max-w-[a-z0-9]+" | sort | uniq -c | sort -rn

echo -e "\n## Gap sizes:"
grep -r "gap-" src/ --include="*.astro" | grep -oE "gap-[0-9]+" | sort | uniq -c | sort -rn

# Component patterns audit
echo -e "\n4. COMPONENT PATTERNS:"
echo "----------------------"

echo -e "\n## Button classes:"
grep -r "class=" src/ --include="*.astro" | grep -i "button\|btn" | head -5

echo -e "\n## Card patterns:"
grep -r "rounded-" src/ --include="*.astro" | grep -oE "rounded-[a-z]+" | sort | uniq -c | sort -rn

echo -e "\n## Shadow patterns:"
grep -r "shadow-" src/ --include="*.astro" | grep -oE "shadow-[a-z]+" | sort | uniq -c | sort -rn

echo -e "\n## Hover patterns:"
grep -r "hover:" src/ --include="*.astro" | grep -oE "hover:[a-z-]+-[0-9]+" | sort | uniq -c | sort -rn | head -10