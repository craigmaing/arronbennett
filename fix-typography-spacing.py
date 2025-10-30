#!/usr/bin/env python3
"""
Fix typography and spacing inconsistencies across the Arron Bennett website
"""

import os
import re
import glob

def fix_file(filepath):
    """Fix typography and spacing in a single file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    changes_made = []

    # Typography fixes - H1 tags
    h1_patterns = [
        (r'<h1 class="text-4xl([^"]*)"', r'<h1 class="text-4xl md:text-5xl lg:text-6xl\1"'),
        (r'<h1 class="text-5xl([^"]*)"', r'<h1 class="text-4xl md:text-5xl lg:text-6xl\1"'),
        (r'<h1 class="text-6xl([^"]*)"', r'<h1 class="text-4xl md:text-5xl lg:text-6xl\1"'),
    ]

    for pattern, replacement in h1_patterns:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            changes_made.append("Standardized H1 sizing")

    # Typography fixes - H2 tags
    h2_patterns = [
        (r'<h2 class="text-3xl(?!.*md:text-4xl)([^"]*)"', r'<h2 class="text-3xl md:text-4xl\1"'),
        (r'<h2 class="text-4xl(?!.*md:)([^"]*)"', r'<h2 class="text-3xl md:text-4xl\1"'),
    ]

    for pattern, replacement in h2_patterns:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            changes_made.append("Standardized H2 sizing")

    # Section padding standardization
    # Replace py-20 with py-16 lg:py-20 for consistency
    section_patterns = [
        (r'py-20(?!\s|")', r'py-16 lg:py-20'),
        (r'py-12(?!\s|")', r'py-12 lg:py-16'),
    ]

    for pattern, replacement in section_patterns:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            changes_made.append("Standardized section padding")

    # Container width standardization
    # Ensure main containers use max-w-6xl
    container_patterns = [
        (r'container mx-auto px-4(?!.*max-w)', r'container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'),
    ]

    for pattern, replacement in container_patterns:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            changes_made.append("Standardized container widths")

    # Button standardization - ensure all buttons have consistent classes
    button_patterns = [
        # Standardize CTA button classes
        (r'rounded-md', r'rounded-lg'),  # Consistent rounding
        (r'shadow-md', r'shadow-lg'),    # Consistent shadows
    ]

    for pattern, replacement in button_patterns:
        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            changes_made.append("Standardized component styles")

    # Save if changes were made
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return filepath, changes_made

    return None, None

def main():
    print("=== FIXING TYPOGRAPHY AND SPACING ===")
    print("="*40)

    # Find all .astro files
    astro_files = []
    for root, dirs, files in os.walk('/c/Users/Fearn/ab1/arron-bennett-astro/src'):
        for file in files:
            if file.endswith('.astro'):
                astro_files.append(os.path.join(root, file))

    print(f"\nFound {len(astro_files)} .astro files to process")

    fixed_files = []
    for filepath in astro_files:
        result, changes = fix_file(filepath)
        if result:
            fixed_files.append((result, changes))
            print(f"✓ Fixed: {os.path.basename(filepath)}")
            for change in changes:
                print(f"  - {change}")

    print(f"\n✅ Fixed {len(fixed_files)} files")
    print("\nSummary of changes:")

    all_changes = {}
    for _, changes in fixed_files:
        for change in changes:
            all_changes[change] = all_changes.get(change, 0) + 1

    for change, count in sorted(all_changes.items()):
        print(f"  - {change}: {count} files")

    print("\n✅ Typography and spacing fixes completed!")

if __name__ == "__main__":
    main()