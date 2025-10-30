# Agent Task: Accreditation Cards UI Updates

## Agent Role
**UI/UX Specialist** - Responsible for implementing precise layout and visual hierarchy changes to component cards

## Task Overview
Update the accreditation/trust mark cards section to differentiate the trust mark card from other accreditation cards with specific layout requirements.

## Current State Analysis Needed
1. Locate the accreditation cards component
2. Identify the trust mark card specifically
3. Find the other accreditation cards (CMI, IoD, RSPH, etc.)
4. Review current styling and layout

## Required Changes

### 1. Trust Mark Card
**Objective**: Make the trust mark logo the hero element of its card

**Requirements**:
- The trust mark logo should expand to fill most of the card space
- Remove any text content from the trust mark card only
- Maintain proper aspect ratio of the logo
- Add appropriate padding (suggest 1-2rem)
- Logo should be centered and prominent
- Card should remain same height as other cards

**Technical Approach**:
```astro
<!-- Example structure -->
<div class="trust-mark-card">
  <img
    src="/path-to-trust-mark-logo"
    alt="Trust Mark Logo"
    class="w-full h-full object-contain p-6"
  />
</div>
```

### 2. Other Accreditation Cards
**Objective**: Restore the original text descriptions that were removed

**Requirements**:
- Restore text/descriptions for all non-trust-mark accreditation cards
- Ensure proper vertical layout: logo above text
- Text should include title and brief description
- Maintain visual balance between logo and text
- Keep consistent card heights across all cards

**Example Structure**:
```astro
<!-- CMI, IoD, RSPH, etc. cards -->
<div class="accreditation-card">
  <img src="/logo" alt="..." class="h-16 w-auto mb-4" />
  <h3 class="text-lg font-semibold mb-2">Title</h3>
  <p class="text-sm text-gray-600">Description text...</p>
</div>
```

## Original Content to Restore
You'll need to find the original text content that was removed from these cards. Check:
- Git history
- Backup files
- COMPREHENSIVE-STRATEGY.md for credential/accreditation descriptions
- Craig's background documentation

## Implementation Steps

### Step 1: Locate Files
```bash
# Find the component file
cd C:\Users\Fearn\ab1\arron-bennett-astro
# Look for:
# - src/components/Accreditations.astro
# - src/components/TrustMarks.astro
# - src/components/sections/Accreditations.astro
# - Or similar naming patterns
```

### Step 2: Read Current Implementation
- Read the current accreditation cards component
- Identify which card is the trust mark
- Document current structure

### Step 3: Backup Current State
- Create a backup of the current component file

### Step 4: Implement Trust Mark Card Changes
- Modify trust mark card to have large logo only
- Remove text from trust mark card
- Adjust sizing and padding for logo prominence

### Step 5: Restore Other Cards' Text
- Add back text content for CMI, IoD, RSPH, etc.
- Ensure proper typography hierarchy
- Maintain visual consistency

### Step 6: Styling & Polish
- Ensure all cards maintain same height
- Verify responsive behavior (mobile, tablet, desktop)
- Check accessibility (alt text, color contrast)
- Ensure proper spacing and alignment

### Step 7: Testing
- View on different screen sizes
- Verify logo quality and sharpness
- Check text readability
- Ensure hover states work (if applicable)

## Design Specifications

### Trust Mark Card
- **Logo Size**: Fill ~80-90% of card space
- **Padding**: 1.5-2rem all around
- **Background**: White or subtle gray
- **Border**: Consistent with other cards
- **Shadow**: Match other cards

### Other Accreditation Cards
- **Logo Size**: ~64px height (h-16)
- **Logo Position**: Top, centered
- **Text Title**: text-lg, font-semibold
- **Text Description**: text-sm, text-gray-600
- **Spacing**: mb-4 between logo and title, mb-2 between title and description

## Expected Outcome
- One prominent trust mark card with large logo, no text
- Multiple accreditation cards with logo + text descriptions
- All cards maintain consistent height and visual harmony
- Responsive layout works across all breakpoints
- Professional, credible presentation

## Files to Check/Modify
- `src/components/**/*Accreditation*.astro`
- `src/components/**/*TrustMark*.astro`
- `src/pages/index.astro` (if cards are inline)
- Related CSS/Tailwind classes

## Acceptance Criteria
- [ ] Trust mark logo is prominently displayed and fills card
- [ ] Trust mark card has no text content
- [ ] Other accreditation cards have logos + restored text
- [ ] All cards have consistent height
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Text is readable and properly formatted
- [ ] No layout shifts or visual bugs
- [ ] Maintains professional appearance

## Questions for User (if needed)
- If original text content cannot be found, should we write new descriptions?
- Any specific trust mark logo file location?
- Preferred exact padding/spacing values?

---

**Agent Instructions**:
1. Start by exploring the codebase to locate the accreditation cards component
2. Document what you find
3. Make the changes incrementally
4. Test after each change
5. Report back with results and screenshots/descriptions of the changes
