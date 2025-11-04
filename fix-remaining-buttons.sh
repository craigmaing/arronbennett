#!/bin/bash

FILE="src/pages/index.astro"

echo "Fixing remaining 3 buttons in index.astro..."

# Create a temporary file with the fixes
cp "$FILE" "$FILE.temp"

# Button 2: Working Together section (around line 195-204)
sed -i '195,204d' "$FILE.temp"
sed -i '195i\              <Button\
                href="/contact-us"\
                variant="primary"\
                size="lg"\
                class="rounded-full shadow-lg hover:shadow-xl hover:scale-105"\
                ariaLabel="Find out more about our services and contact us"\
              >\
                Find out more\
              </Button>' "$FILE.temp"

# Button 3: Final CTA white button (around line 415-423)
# First find the exact lines
LINE_START=$(grep -n 'style="background-color: white; color: #A83820;"' "$FILE.temp" | cut -d: -f1)
if [ ! -z "$LINE_START" ]; then
    LINE_END=$((LINE_START + 5))
    sed -i "${LINE_START},${LINE_END}d" "$FILE.temp"
    sed -i "${LINE_START}i\            <Button\
              href=\"/contact-us\"\
              variant=\"ghost\"\
              size=\"lg\"\
              class=\"min-w-[200px] !bg-white !text-coral-500 hover:!bg-gray-50 !border-0\"\
            >\
              Get in Touch\
            </Button>" "$FILE.temp"
fi

# Button 4: Phone button with icon (around line 425-448)
# This one is trickier because it contains an SVG
LINE_START=$(grep -n 'href="tel:07773463383"' "$FILE.temp" | cut -d: -f1)
if [ ! -z "$LINE_START" ]; then
    # Find the closing </a> tag after this line
    LINE_END=$(tail -n +$LINE_START "$FILE.temp" | grep -n '</a>' | head -1 | cut -d: -f1)
    LINE_END=$((LINE_START + LINE_END - 1))

    # Delete the old button
    sed -i "${LINE_START},${LINE_END}d" "$FILE.temp"

    # Insert the new button with SVG
    sed -i "${LINE_START}i\            <Button\
              href=\"tel:07773463383\"\
              variant=\"ghost\"\
              size=\"lg\"\
              class=\"inline-flex items-center gap-3 min-h-[44px] !border-white !text-white hover:!bg-white hover:!text-coral-500\"\
              ariaLabel=\"Call us on 07773 463383\"\
            >\
              <svg\
                class=\"w-6 h-6\"\
                fill=\"none\"\
                stroke=\"currentColor\"\
                viewBox=\"0 0 24 24\"\
                aria-hidden=\"true\"\
              >\
                <path\
                  stroke-linecap=\"round\"\
                  stroke-linejoin=\"round\"\
                  stroke-width=\"2\"\
                  d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"\
                />\
              </svg>\
              07773 463383\
            </Button>" "$FILE.temp"
fi

# Replace the original file
mv "$FILE.temp" "$FILE"

echo "Done! All 3 remaining buttons have been fixed."

# Verify the changes
echo ""
echo "Verification:"
echo "Checking for remaining onmouseover/onmouseout handlers..."
grep -c "onmouseover\|onmouseout" "$FILE" && echo "WARNING: Still found JavaScript handlers!" || echo "✓ No JavaScript handlers found"

echo ""
echo "Checking for inline style attributes on buttons..."
grep -c 'style=".*background' "$FILE" && echo "WARNING: Still found inline styles!" || echo "✓ No inline button styles found"