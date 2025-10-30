#!/usr/bin/env python3
import os
import re
from pathlib import Path

def check_page(filepath):
    """Comprehensive check of a single page"""
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    issues = []

    # Basic checks
    if '<title>' not in content:
        issues.append("Missing title tag")

    if 'name="description"' not in content:
        issues.append("Missing meta description")

    if '<h1' not in content:
        issues.append("Missing H1 tag")

    # Check for console errors
    if 'console.error' in content:
        issues.append("console.error calls in page")

    # Check page size
    size_kb = len(content) / 1024
    if size_kb > 200:
        issues.append(f"Large page size ({size_kb:.0f} KB)")

    return {
        'issues': issues,
        'size_kb': size_kb,
    }

dist = Path('dist')
pages = sorted([p for p in dist.rglob('index.html') if 'og-image' not in str(p)])

print("\n" + "=" * 90)
print("COMPREHENSIVE SITE AUDIT - Arron Bennett Building")
print("=" * 90)

total_issues = 0
pages_analyzed = 0

for page in pages[:12]:
    try:
        rel_path = page.relative_to(dist)
        url_path = str(rel_path).replace(chr(92) + 'index.html', '').replace(chr(92), '/') or '/'

        result = check_page(page)
        total_issues += len(result['issues'])
        pages_analyzed += 1

        status = "OK" if not result['issues'] else f"ISSUES ({len(result['issues'])})"
        print(f"\n{url_path:40s} {status:20s} ({result['size_kb']:5.0f} KB)")

        if result['issues']:
            for issue in result['issues']:
                print(f"  - {issue}")
    except Exception as e:
        print(f"Error analyzing {page}: {e}")

print("\n" + "=" * 90)
print(f"TOTAL: {pages_analyzed} pages, {total_issues} issues found")
print("=" * 90)
