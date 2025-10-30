#!/usr/bin/env python3
"""
Comprehensive QA Audit Script
Analyzes the Arron Bennett Building website for issues
"""

import os
import json
from pathlib import Path

def count_pages():
    """Count all HTML pages in the build"""
    dist_path = Path('dist')
    html_files = list(dist_path.rglob('*.html'))
    return len(html_files), html_files

def analyze_html_file(filepath):
    """Analyze a single HTML file for common issues"""
    issues = []
    warnings = []
    
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Check for console errors indicators
    if 'console.error' in content:
        issues.append('Contains console.error calls')
    
    # Check for images without alt text
    import re
    img_tags = re.findall(r'<img[^>]*>', content)
    for img in img_tags:
        if 'alt=' not in img.lower():
            issues.append(f'Image missing alt text: {img[:50]}')
    
    # Check for links
    links = re.findall(r'href=["\']([^"\']*)["\']', content)
    
    # Check for title tag
    if '<title>' not in content:
        issues.append('Missing title tag')
    
    # Check for meta description
    if 'name="description"' not in content:
        issues.append('Missing meta description')
    
    return {
        'path': str(filepath),
        'size': len(content),
        'has_title': '<title>' in content,
        'has_meta_desc': 'name="description"' in content,
        'img_count': len(img_tags),
        'link_count': len(links),
        'issues': issues,
        'warnings': warnings
    }

def main():
    print("=" * 80)
    print("COMPREHENSIVE QA AUDIT - Arron Bennett Building Website")
    print("=" * 80)
    
    page_count, html_files = count_pages()
    print(f"\nTotal HTML pages found: {page_count}")
    print("\nPages:")
    for f in sorted(html_files):
        print(f"  - {f.relative_to('dist')}")
    
    print("\n" + "=" * 80)
    print("ANALYZING PAGES")
    print("=" * 80)
    
    total_issues = 0
    total_warnings = 0
    
    for html_file in sorted(html_files)[:5]:  # Analyze first 5 pages
        analysis = analyze_html_file(html_file)
        print(f"\nPage: {analysis['path']}")
        print(f"  Size: {analysis['size']} bytes")
        print(f"  Has title: {analysis['has_title']}")
        print(f"  Has meta description: {analysis['has_meta_desc']}")
        print(f"  Image count: {analysis['img_count']}")
        print(f"  Link count: {analysis['link_count']}")
        
        if analysis['issues']:
            print(f"  ISSUES ({len(analysis['issues'])}):")
            for issue in analysis['issues']:
                print(f"    - {issue}")
                total_issues += 1
        
        if analysis['warnings']:
            print(f"  WARNINGS ({len(analysis['warnings'])}):")
            for warning in analysis['warnings']:
                print(f"    - {warning}")
                total_warnings += 1
    
    print("\n" + "=" * 80)
    print(f"SUMMARY: {total_issues} issues found, {total_warnings} warnings")
    print("=" * 80)

if __name__ == '__main__':
    main()
