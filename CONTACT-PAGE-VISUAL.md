# Contact Page Visual Structure

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                       │
│                  (from existing layout)                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                         │
│            Blue Gradient Background                     │
│                                                         │
│               ╔════════════════╗                        │
│               ║  Get in Touch  ║  (H1)                  │
│               ╚════════════════╝                        │
│                                                         │
│        Let's discuss your building project              │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              INTRODUCTORY TEXT                          │
│              Gray Background                            │
│                                                         │
│   Need expert building services in Cornwall?           │
│   Arron Bennett Building offers reliable...            │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│          CONTACT INFORMATION CARDS                      │
│            White Background                             │
│                                                         │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│   │   📞 ICON   │  │   ✉️ ICON   │  │   📍 ICON   │  │
│   │             │  │             │  │             │  │
│   │  Call us    │  │  Email Us   │  │  Location   │  │
│   │             │  │             │  │             │  │
│   │ 07773 46... │  │ enquiries@..│  │ Cornwall/   │  │
│   │ (clickable) │  │ (clickable) │  │  Devon      │  │
│   └─────────────┘  └─────────────┘  └─────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│             CONTACT FORM SECTION                        │
│             Gray Background                             │
│                                                         │
│            Send Us a Message (H2)                       │
│                                                         │
│   ┌───────────────────────────────────────────┐        │
│   │  FORM CONTAINER                           │        │
│   │                                           │        │
│   │  [  Your Name *  ]                       │        │
│   │                                           │        │
│   │  [  Telephone Number *  ]                │        │
│   │                                           │        │
│   │  [  Email Address *  ]                   │        │
│   │                                           │        │
│   │  [  Tell us about your project *  ]      │        │
│   │  [                                ]      │        │
│   │  [                                ]      │        │
│   │                                           │        │
│   │  📋 Privacy Notice                       │        │
│   │                                           │        │
│   │  [    Send Message Button    ]           │        │
│   │                                           │        │
│   └───────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│             TRUST SIGNALS                               │
│             White Background                            │
│                                                         │
│              Why Choose Us? (H2)                        │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│   │  ⏱️ ICON │  │  ✓ ICON  │  │  ⭐ ICON │  │ 🛡️   │ │
│   │          │  │          │  │          │  │ ICON │ │
│   │  Quick   │  │   Free   │  │   20+    │  │Fully │ │
│   │ Response │  │Consulta- │  │  Years   │  │Insur-│ │
│   │          │  │   tion   │  │Experience│  │ ed   │ │
│   │ 24-hour  │  │ No-cost  │  │ Proven   │  │Peace │ │
│   │guarantee │  │  quote   │  │  track   │  │ of   │ │
│   │          │  │          │  │  record  │  │mind  │ │
│   └──────────┘  └──────────┘  └──────────┘  └──────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                FINAL CTA SECTION                        │
│              Blue Background                            │
│                                                         │
│         Ready to Start Your Project? (H2)               │
│                                                         │
│      Contact us today for a free consultation          │
│                                                         │
│   ┌──────────────────┐  ┌──────────────────┐          │
│   │ Call 07773 46... │  │   Send Email     │          │
│   │  (White button)  │  │  (Blue button)   │          │
│   └──────────────────┘  └──────────────────┘          │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│                 (from existing layout)                  │
└─────────────────────────────────────────────────────────┘
```

## Mobile View (< 768px)
All sections stack vertically:
- Contact cards: 1 column
- Trust signals: 1 column
- CTA buttons: Stack vertically

## Responsive Breakpoints
- Mobile: 320px - 767px (single column)
- Tablet: 768px - 1023px (2 columns where applicable)
- Desktop: 1024px+ (full grid layouts)

## Color Scheme
- Primary Blue: #2563eb (hero, CTAs)
- White: #ffffff (cards, backgrounds)
- Gray-50: #f9fafb (alternating sections)
- Blue-100: #dbeafe (trust signal badges)
- Green-100, Yellow-100, Purple-100: Trust signal variations

## Typography
- H1: 4xl-6xl (responsive)
- H2: 3xl-4xl (responsive)
- H3: xl
- Body: lg (1.125rem / 18px)
- Small: sm (0.875rem / 14px)

## Interactive Elements
1. Phone link (tel:) - Opens phone dialer
2. Email link (mailto:) - Opens email client
3. Form fields - Focus states, validation
4. Submit button - Hover/active states
5. CTA buttons - Hover effects
6. All links - Keyboard accessible
