#!/usr/bin/env python3
import os
import re
from pathlib import Path

def analyze_page(content, filename):
    """Detailed analysis of page content"""
    findings = {
        'critical': [],
        'high': [],
        'medium': [],
        'low': [],
        'passed': []
    }

    # 1. META & SEO
    title_match = re.search(r'<title>([^<]+)</title>', content)
    if title_match:
        title = title_match.group(1)
        if 30 <= len(title) <= 70:
            findings['passed'].append('SEO: Title length appropriate')
        else:
            sev = 'high' if len(title) > 70 else 'medium'
            findings[sev].append(f'SEO: Title length {len(title)} chars (should be 30-70)')
    else:
        findings['critical'].append('SEO: Missing <title> tag')

    desc_match = re.search(r'name="description"\s+content="([^"]*)"', content)
    if desc_match:
        desc = desc_match.group(1)
        if len(desc) < 120 or len(desc) > 160:
            findings['medium'].append(f'SEO: Meta description {len(desc)} chars (ideal 120-160)')
        else:
            findings['passed'].append('SEO: Meta description length OK')
    else:
        findings['critical'].append('SEO: Missing meta description')

    # 2. HEADING STRUCTURE
    h1_count = len(re.findall(r'<h1[^>]*>', content, re.IGNORECASE))
    if h1_count == 0:
        findings['high'].append('SEO: Missing H1 tag')
    elif h1_count > 1:
        findings['medium'].append(f'SEO: Multiple H1 tags ({h1_count})')
    else:
        findings['passed'].append('SEO: Single H1 tag present')

    # 3. SEMANTIC HTML
    has_main = '<main' in content.lower()
    has_nav = '<nav' in content.lower()

    if not has_main:
        findings['medium'].append('HTML: Missing <main> element')
    else:
        findings['passed'].append('HTML: <main> element present')

    if not has_nav:
        findings['medium'].append('HTML: Missing <nav> element')
    else:
        findings['passed'].append('HTML: <nav> element present')

    # 4. IMAGES & ALT TEXT
    img_tags = re.findall(r'<img[^>]*>', content, re.IGNORECASE)
    alt_issues = []
    for img in img_tags:
        if 'alt=' not in img.lower():
            alt_issues.append(img[:60])

    if alt_issues:
        findings['high'].append(f'A11y: {len(alt_issues)} images missing alt text')
    elif img_tags:
        findings['passed'].append(f'A11y: All {len(img_tags)} images have alt text')

    # 5. FORMS
    if '<form' in content:
        form_inputs = len(re.findall(r'<input[^>]*type=["\']text', content))
        labels = len(re.findall(r'<label[^>]*>', content))
        if form_inputs > 0 and labels == 0:
            findings['high'].append('A11y: Form inputs missing labels')
        elif form_inputs > labels:
            findings['medium'].append(f'A11y: Only {labels}/{form_inputs} form fields have labels')
        else:
            findings['passed'].append('A11y: Form has appropriate labels')

    # 6. PERFORMANCE
    size_kb = len(content) / 1024
    if size_kb > 200:
        findings['high'].append(f'Performance: Large page ({size_kb:.0f} KB)')
    elif size_kb > 100:
        findings['medium'].append(f'Performance: Moderate page size ({size_kb:.0f} KB)')
    else:
        findings['passed'].append(f'Performance: Good page size ({size_kb:.0f} KB)')

    # 7. JAVASCRIPT ISSUES
    if 'console.error' in content:
        findings['high'].append('JS: console.error calls detected')
    if 'console.warn' in content:
        findings['low'].append('JS: console.warn calls detected')

    # 8. SCHEMA MARKUP
    if 'application/ld+json' in content:
        findings['passed'].append('SEO: Schema.org markup present')
    else:
        findings['medium'].append('SEO: No Schema.org markup found')

    # 9. OPENGRAPH
    if 'property="og:' in content:
        og_tags = len(re.findall(r'property="og:[^"]*"', content))
        findings['passed'].append(f'SEO: {og_tags} OpenGraph tags present')
    else:
        findings['medium'].append('SEO: Missing OpenGraph tags')

    return findings

# Analyze all pages
dist = Path('dist')
pages = sorted([p for p in dist.rglob('index.html') if 'og-image' not in str(p)])

all_results = {}
total_stats = {'critical': 0, 'high': 0, 'medium': 0, 'low': 0, 'passed': 0}

for page_path in pages[:15]:
    try:
        with open(page_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        rel_path = str(page_path.relative_to(dist))
        rel_path = rel_path.replace('index.html', '').replace('\\', '/').strip() + ('/' if rel_path != 'index.html' else '')
        rel_path = rel_path.rstrip('/') or '/'

        findings = analyze_page(content, str(page_path))
        all_results[rel_path] = findings

        for sev in ['critical', 'high', 'medium', 'low', 'passed']:
            total_stats[sev] += len(findings[sev])
    except Exception as e:
        print(f"Error: {e}")

# Output report
print("\n" + "="*100)
print("DETAILED SITE AUDIT REPORT - Arron Bennett Building Website")
print("="*100)

print(f"\nSUMMARY STATISTICS:")
print(f"  Critical Issues: {total_stats['critical']}")
print(f"  High Priority:   {total_stats['high']}")
print(f"  Medium Priority: {total_stats['medium']}")
print(f"  Low Priority:    {total_stats['low']}")
print(f"  Passed Checks:   {total_stats['passed']}")

print(f"\n{'PAGE':<45} {'CRITICAL':<10} {'HIGH':<10} {'MEDIUM':<10} {'LOW':<10} STATUS")
print("-" * 100)

critical_pages = []
for url in sorted(all_results.keys()):
    f = all_results[url]
    crit = len(f['critical'])
    high = len(f['high'])
    med = len(f['medium'])
    low = len(f['low'])

    if crit > 0:
        critical_pages.append(url)

    status = "PASS" if crit == 0 and high == 0 else "FAIL"
    print(f"{url:<45} {crit:<10} {high:<10} {med:<10} {low:<10} {status}")

print("\n" + "="*100)
if critical_pages:
    print("CRITICAL PAGES NEEDING ATTENTION:")
    print("="*100)

    for url in critical_pages:
        print(f"\n{url}:")
        f = all_results[url]
        if f['critical']:
            print("  CRITICAL:")
            for issue in f['critical']:
                print(f"    - {issue}")
        if f['high']:
            print("  HIGH PRIORITY:")
            for issue in f['high'][:3]:
                print(f"    - {issue}")
else:
    print("No critical issues found!")
    print("="*100)
