#!/usr/bin/env python3
"""
Fix remaining buttons in index.astro by replacing inline styles with Button component
"""

import re

# Read the file
with open('src/pages/index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# Button 2: Working Together section "Find out more"
old_button_2 = '''              <a
                href="/contact-us"
                class="inline-block text-white px-8 py-4 rounded-full font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-coral-300 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                style="background-color: #A83820; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.1);"
                onmouseover="this.style.backgroundColor='#8B2E19'; this.style.color='white';"
                onmouseout="this.style.backgroundColor='#A83820'; this.style.color='white';"
                aria-label="Find out more about our services and contact us"
              >
                Find out more
              </a>'''

new_button_2 = '''              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                class="rounded-full shadow-lg hover:shadow-xl hover:scale-105"
                ariaLabel="Find out more about our services and contact us"
              >
                Find out more
              </Button>'''

# Button 3: Final CTA white button "Get in Touch"
old_button_3 = '''            <a
              href="/contact-us"
              class="inline-block min-w-[200px] px-8 py-4 rounded-lg font-semibold text-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-4 transition-all"
              style="background-color: white; color: #A83820;"
              onmouseover="this.style.backgroundColor='#f1f3f5'"
              onmouseout="this.style.backgroundColor='#ffffff'"
            >
              Get in Touch
            </a>'''

new_button_3 = '''            <Button
              href="/contact-us"
              variant="ghost"
              size="lg"
              class="min-w-[200px] !bg-white !text-coral-500 hover:!bg-gray-50 !border-0"
            >
              Get in Touch
            </Button>'''

# Button 4: Phone button with icon
old_button_4_pattern = r'<a\s+href="tel:07773463383"[^>]*>[\s\S]*?07773 463383[\s\S]*?</a>'

new_button_4 = '''            <Button
              href="tel:07773463383"
              variant="ghost"
              size="lg"
              class="inline-flex items-center gap-3 min-h-[44px] !border-white !text-white hover:!bg-white hover:!text-coral-500"
              ariaLabel="Call us on 07773 463383"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              07773 463383
            </Button>'''

# Replace buttons
print("Replacing Button 2: Working Together 'Find out more'...")
if old_button_2 in content:
    content = content.replace(old_button_2, new_button_2)
    print("✓ Button 2 replaced")
else:
    print("⚠ Button 2 not found with exact match")

print("\nReplacing Button 3: Final CTA 'Get in Touch'...")
if old_button_3 in content:
    content = content.replace(old_button_3, new_button_3)
    print("✓ Button 3 replaced")
else:
    print("⚠ Button 3 not found with exact match")

print("\nReplacing Button 4: Phone button...")
# Find the phone button with regex
phone_match = re.search(r'<a\s+href="tel:07773463383"[^>]*style="[^"]*"[^>]*>[\s\S]*?07773 463383[\s\S]*?</a>', content)
if phone_match:
    content = content.replace(phone_match.group(0), new_button_4)
    print("✓ Button 4 replaced")
else:
    print("⚠ Button 4 not found with regex match")

# Save the file
with open('src/pages/index.astro', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n=== Verification ===")

# Check for remaining JavaScript handlers
js_handlers = re.findall(r'onmouse(?:over|out)="[^"]*"', content)
if js_handlers:
    print(f"⚠ WARNING: Found {len(js_handlers)} remaining JavaScript handlers")
    for handler in js_handlers[:3]:  # Show first 3
        print(f"  - {handler[:50]}...")
else:
    print("✓ No JavaScript handlers found")

# Check for inline styles on buttons
inline_styles = re.findall(r'style="[^"]*background[^"]*"', content)
if inline_styles:
    print(f"⚠ WARNING: Found {len(inline_styles)} remaining inline styles")
    for style in inline_styles[:3]:  # Show first 3
        print(f"  - {style[:50]}...")
else:
    print("✓ No inline button styles found")

print("\n✅ Script completed!")