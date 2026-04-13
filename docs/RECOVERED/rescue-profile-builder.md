---
name: rescue-profile-builder
description: Builds individual rescue dog profile pages and the full Underdog Heroes rescue registry for My Legacy Continues. Creates mobile-optimized HTML pages for shelter dogs available for adoption, with QR transfer logic so profiles pass from rescue to adopter. Trigger this skill whenever a new rescue dog needs a profile, whenever user says "add a dog to the registry", "build a rescue profile for [dog name]", "update the rescue registry", "new dog from Underdog Heroes", or when Underdog Heroes sends a new dog listing. Also use when a dog gets adopted and the profile needs to transfer to the new owner.
---

# Rescue Profile Builder — My Legacy Continues

## Role
Build and maintain the Underdog Heroes rescue registry and individual dog profiles. This is the Guardian Protocol — every rescue dog gets a permanent digital profile, free of charge.

## Key Contact
Underdog Heroes: adopt@underdogheroes.org / underdogheroes.org

## The QR Transfer Concept (What Makes This Different From Petfinder)
When a dog gets adopted, the QR tag profile DOESN'T disappear. It transfers:
1. Rescue phase: Profile shows adoption info, rescue contact, dog bio
2. Adoption: Profile updates to show new owner contact, pet medical info
3. Forever: Dog's full story (rescue → foster → forever home) stays on the profile permanently

This is the pitch to Underdog Heroes — Petfinder listings vanish. Ours last forever.

## Individual Dog Profile Structure

```html
[HERO PHOTO — full width, 300px height, object-fit cover]

[DOG NAME — large Montserrat gold heading]
[Breed · Age · Status badge: Available / Foster / Adopted]

[ADOPTION BUTTON — large gold CTA]
"Adopt [Name] — Contact Underdog Heroes"
mailto: adopt@underdogheroes.org

[ABOUT [DOG NAME]]
Bio paragraph — written warm and personal, not shelter-clinical
Personality: how they act with people, kids, dogs
Special needs if any

[THEIR STORY]
How they came to rescue
Foster family info (if public)
Progress notes

[THE QR TRANSFER PROMISE]
"When [Name] finds their forever home, this profile transfers to their new family.
Their story never disappears. Long Live Their Legacy."

[RETURN TO REGISTRY BUTTON]
Link back to rescue-registry.html

[MLC FOOTER]
```

## Registry Page Structure (rescue-registry.html)

The main registry page shows all current dogs as cards:

```
[NAV — matches main site]

[HERO]
  "Underdog Heroes Rescue Registry"
  "Powered by My Legacy Continues · Santa Maria, CA"
  Subhead about QR transfer concept

[WHAT MAKES THIS DIFFERENT]
  Short section explaining the permanent profile concept
  Petfinder comparison: "Their listing disappears. Ours lasts forever."

[CURRENT DOGS GRID]
  Card per dog: photo, name, breed, age, status badge, "Meet [Name]" button

[HOW THE QR TRANSFER WORKS]
  3-step visual: Rescue → Foster → Forever Home
  "The profile follows them — permanently"

[ADOPT A DOG]
  CTA button: Contact Underdog Heroes
  adopt@underdogheroes.org

[MLC RESCUE PARTNERSHIP SECTION]
  "A portion of every pet tag sale supports local rescue"
  "We build every rescue dog a free profile"

[FOOTER]
```

## Current Dogs (as of April 2026)
Build profiles for these Underdog Heroes dogs — update when new info comes in:

| Dog | Breed | Notes |
|-----|-------|-------|
| Apollo | Mixed | Available |
| Bella | Mixed | Available |
| Charlie | Mixed | Available |
| Daisy | Mixed | Available |
| Echo | Mixed | Available |
| Finn | Mixed | Available |
| Ginger | Mixed | Available |
| Hunter | Mixed | Available |

Note: Get actual photos, bios, and breed info from underdogheroes.org before building profiles. Don't invent dog details.

## Adoption Status Badge Colors
- Available: gold background, dark text
- In Foster: green-tinted, dark text  
- Adopted: muted, "Forever Home Found" text

## File Naming
- Registry: `rescue-registry.html` (replaces old Zena-only version)
- Individual: `rescue-[dogname]-profile.html`

## After Building
1. Present rescue-registry.html for download
2. Tell Bear: "Push to markvazquez92/legacy-os — this replaces the old rescue-registry.html"
3. Contact: "Email adopt@underdogheroes.org with the link — they'll want to share this"
