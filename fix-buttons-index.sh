#!/bin/bash

FILE="C:/Users/Fearn/ab1/arron-bennett-astro/src/pages/index.astro"

# Backup the file first
cp "$FILE" "$FILE.bak"

# Replace first button (line 70-79)
sed -i '70,79c\          <Button\n            href="/contact-us"\n            variant="primary"\n            size="lg"\n            class="rounded-full hover:scale-105 hover:shadow-xl"\n            ariaLabel="Contact us to discuss your building project"\n          >\n            GET IN TOUCH\n          </Button>' "$FILE"

# Replace second button (line 195-204)
sed -i '195,204c\              <Button\n                href="/contact-us"\n                variant="primary"\n                size="lg"\n                class="rounded-full shadow-lg hover:shadow-xl hover:scale-105"\n                ariaLabel="Find out more about our services and contact us"\n              >\n                Find out more\n              </Button>' "$FILE"

# Replace third button (line 415-423)
sed -i '415,423c\            <Button\n              href="/contact-us"\n              variant="ghost"\n              size="lg"\n              class="min-w-[200px] !bg-white !text-coral-500 hover:!bg-gray-50 !border-0"\n            >\n              Get in Touch\n            </Button>' "$FILE"

# Replace fourth button (line 425-448) - This is more complex due to the icon
sed -i '425,448c\            <Button\n              href="tel:07773463383"\n              variant="ghost"\n              size="lg"\n              class="inline-flex items-center gap-3 min-h-[44px] !border-white !text-white hover:!bg-white hover:!text-coral-500"\n              ariaLabel="Call us on 07773 463383"\n            >\n              <svg\n                class="w-6 h-6"\n                fill="none"\n                stroke="currentColor"\n                viewBox="0 0 24 24"\n                aria-hidden="true"\n              >\n                <path\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                  stroke-width="2"\n                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"\n                />\n              </svg>\n              07773 463383\n            </Button>' "$FILE"

echo "Fixed buttons in index.astro"
