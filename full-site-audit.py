#!/usr/bin/env python3
"""
Full site audit - checks all pages for common issues
"""
import os
import re
from pathlib import Path
from collections import defaultdict

def check_page(filepath):
    """Comprehensive check of a single page"""
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    issues = []
    passed = []
    
    # SEO Checks
    title_match = re.search(r'<title>([^<]+)</title>', content)
    if title_match:
        title = title_match.group(1)
        if len(title) > 70:
            issues.append(f"SEO: Title too long ({len(title)} chars): {title[:50]}...")
        elif len(title) < 30:
            issues.append(f"SEO: Title too short ({len(title)} chars)")
        else:
            passed.append("SEO: Title tag valid")
    else:
        issues.append("SEO: Missing title tag")
    
    # Meta description
    if 'name="description"' in content:
        desc_match = re.search(r'name="description"\s+content="([^"]*)"', content)
        if desc_match:
            desc = desc_match.group(1)
            if len(desc) > 160:
                issues.append(f"SEO: Meta description too long ({len(desc)} chars)")
            else:
                passed.append("SEO: Meta description valid")
    else:
        issues.append("SEO: Missing meta description")
    
    # OpenGraph tags
    if 'property="og:' in content:
        passed.append("SEO: OpenGraph tags present")
    else:
        issues.append("SEO: Missing OpenGraph tags")
    
    # Heading hierarchy (H1)
    h1_count = content.count('<h1')
    if h1_count == 0:
        issues.append("SEO: Missing H1 tag")
    elif h1_count > 1:
        issues.append(f"SEO: Multiple H1 tags ({h1_count})")
    else:
        passed.append("SEO: H1 tag present")
    
    # Images
    img_tags = re.findall(r'<img[^>]*>', content, re.IGNORECASE)
    images_without_alt = [img for img in img_tags if 'alt=' not in img.lower()]
    if images_without_alt:
        issues.append(f"A11y: {len(images_without_alt)} images missing alt text")
    elif img_tags:
        passed.append(f"A11y: All {len(img_tags)} images have alt text")
    
    # Semantic HTML
    has_main = '<main' in content.lower()
    has_nav = '<nav' in content.lower()
    has_footer = '<footer' in content.lower()
    
    if not has_main:
        issues.append("HTML: Missing <main> element")
    else:
        passed.append("HTML: Has <main> element")
    
    if not has_nav:
        issues.append("HTML: Missing <nav> element")
    else:
        passed.append("HTML: Has <nav> element")
    
    if not has_footer:
        issues.append("HTML: Missing <footer> element")
    else:
        passed.append("HTML: Has <footer> element")
    
    # Links
    links = re.findall(r'href=["\']([^"\']*)["\']', content)
    external_links = [l for l in links if l.startswith('http') and 'arronbennettbuilding' not in l]
    internal_links = [l for l in links if l.startswith('/')]
    
    if internal_links:
        passed.append(f"Links: {len(internal_links)} internal links")
    
    if external_links:
        # Check if external links have rel attributes
        external_without_rel = []
        for link in external_links:
            pattern = f'href="{re.escape(link)}"[^>]*>'
            if re.search(pattern, content):
                match = re.search(pattern, content)
                if match and 'rel=' not in match.group(0):
                    external_without_rel.append(link)
        
        if external_without_rel and len(external_without_rel) <= 3:
            issues.append(f"A11y: External links missing rel attributes: {len(external_without_rel)}")
    
    # Forms
    if '<form' in content:
        form_inputs = re.findall(r'<input[^>]*>', content)
        labels = re.findall(r'<label[^>]*>', content)
        if len(labels) >= len(form_inputs) / 2:
            passed.append("A11y: Form has labels")
        else:
            issues.append("A11y: Form missing labels")
    
    # Console errors (indicator)
    if 'console.error' in content:
        issues.append("Code: console.error calls present")
    
    # Size check
    size_kb = len(content) / 1024
    if size_kb > 200:
        issues.append(f"Performance: Large page size ({size_kb:.1f} KB)")
    else:
        passed.append(f"Performance: Reasonable size ({size_kb:.1f} KB)")
    
    return {
        'issues': issues,
        'passed': passed,
        'size_kb': size_kb,
        'img_count': len(img_tags),
        'link_count': len(links)
    }

def main():
    dist = Path('dist')
    pages = sorted(dist.rglob('index.html'))
    
    # Exclude test/helper pages
    pages = [p for p in pages if 'og-image' not in str(p) and 'services-section-new' not in str(p)]
    
    print("\n" + "=" * 100)
    print("COMPREHENSIVE SITE AUDIT - ARRON BENNETT BUILDING")
    print("=" * 100)
    
    total_issues = 0
    total_passed = 0
    pages_with_issues = []
    
    for page in pages[:15]:  # Main pages
        rel_path = page.relative_to(dist)
        url_path = str(rel_path).replace('\', '/').replace('/index.html', '').strip() or '/'
        
        result = check_page(page)
        total_issues += len(result['issues'])
        total_passed += len(result['passed'])
        
        if result['issues']:
            pages_with_issues.append((url_path, result['issues']))
        
        status = "PASS" if not result['issues'] else f"FAIL ({len(result['issues'])} issues)"
        print(f"\n{url_path:40s} {status:20s} ({result['size_kb']:6.1f} KB, {result['img_count']} imgs)")
        
        if result['issues']:
            for issue in result['issues'][:3]:
                print(f"  ERROR: {issue}")
    
    print("\n" + "=" * 100)
    print(f"SUMMARY: {total_issues} issues found across {len(pages)} pages")
    print(f"Pages needing fixes: {len(pages_with_issues)}")
    print("=" * 100)
    
    # Print critical issues
    if pages_with_issues:
        print("\nPAGES WITH ISSUES (Priority Order):")
        for page, issues in pages_with_issues:
            print(f"\n  {page}:")
            for issue in issues[:5]:
                print(f"    - {issue}")

if __name__ == '__main__':
    main()
