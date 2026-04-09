---
name: pet-tag-profile-builder
description: Builds the scannable QR pet profile page for My Legacy Continues pet tag orders. Creates a mobile-optimized HTML profile page for a pet that shows owner contact info, medical details, and personality notes — designed to help reunite lost pets with their owners. Trigger this skill whenever a pet tag order has been placed, whenever user says "build a pet profile", "create profile for [pet name]", "pet tag profile", or "set up the QR page for my pet". Also use for rescue dog profiles from Underdog Heroes or any shelter partner.
---

# Pet Tag Profile Builder — My Legacy Continues

## Role
Build the scannable QR profile page for a pet. This page appears when someone scans the QR tag on the pet's collar. It must load instantly on mobile, require no app, and give a finder everything they need to return the pet safely.

## Input Required
- Pet name, species, breed
- Owner name and phone number
- Medical info (medications, allergies, vet name/number)
- Personality notes (temperament, fears, how to handle)
- 1–3 photos (use placeholder if not provided)
- Any special instructions (escaped before? bite history? deaf/blind?)

## Output
A single self-contained HTML file named `[petname]-tag-profile.html`

## Design Spec
- Mobile-first — designed for a phone screen
- Black background (#1A1A1A), gold accents (#D4AF37)
- Cinzel font for headings, clean sans for body
- Large tap-to-call button prominently at top
- MLC logo and branding at bottom
- No login required, no app required

## Page Structure

```
[PET PHOTO — large, full width]

[PET NAME — large Cinzel heading]
[Breed · Age if known]

━━━━━━━━━━━━━━━━━━━━━━━━

🏠 TAP TO CALL OWNER
[Large gold button — tel: link to owner phone]
Owner's name shown, number stays private on display

━━━━━━━━━━━━━━━━━━━━━━━━

💊 MEDICAL INFO
[Medications listed]
[Allergies listed]
[Vet: Name · Phone]

━━━━━━━━━━━━━━━━━━━━━━━━

🐾 ABOUT [PET NAME]
[Personality notes — how to approach, what they like]
[Any special handling notes]

━━━━━━━━━━━━━━━━━━━━━━━━

[MLC Logo]
Profile hosted by My Legacy Continues
mylegacycontinues.com
```

## Code Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[PET NAME] — Pet Profile | My Legacy Continues</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #1A1A1A; color: #F4EFE6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; }
.hero-photo { width: 100%; height: 280px; object-fit: cover; }
.pet-name { font-family: 'Cinzel', serif; font-size: 2rem; font-weight: 700; color: #D4AF37; text-align: center; padding: 24px 20px 8px; }
.pet-sub { text-align: center; color: rgba(244,239,230,0.6); font-size: 0.9rem; padding-bottom: 24px; }
.divider { height: 1px; background: rgba(212,175,55,0.25); margin: 0 20px; }
.section { padding: 24px 20px; }
.section-label { font-family: 'Cinzel', serif; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #D4AF37; margin-bottom: 12px; }
.call-btn { display: block; background: #D4AF37; color: #1A1A1A; font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 700; letter-spacing: 0.08em; text-align: center; padding: 18px; text-decoration: none; border-radius: 4px; margin: 20px; }
.info-row { display: flex; gap: 12px; align-items: flex-start; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.88rem; color: rgba(244,239,230,0.8); }
.info-label { color: rgba(244,239,230,0.4); min-width: 80px; font-size: 0.8rem; }
.footer { text-align: center; padding: 32px 20px; border-top: 1px solid rgba(212,175,55,0.2); }
.footer-brand { font-family: 'Cinzel', serif; font-size: 0.6rem; letter-spacing: 0.15em; color: rgba(212,175,55,0.5); text-transform: uppercase; }
</style>
</head>
<body>
<!-- FILL IN PET DATA BELOW -->
</body>
</html>
```

## Rescue Dog Variant
For Underdog Heroes / shelter rescue dogs, the profile is identical but:
- "TAP TO CALL OWNER" → "TAP TO ADOPT [NAME]"
- Call button links to adopt@underdogheroes.org
- Add adoption status badge (Available / Pending / Adopted)
- When adopted, profile transfers to new owner — update contact info only, history preserved

## File Naming
- Personal pet: `[petname]-tag-profile.html` (e.g., `butters-tag-profile.html`)
- Rescue dog: `rescue-[dogname]-profile.html` (e.g., `rescue-zena-profile.html`)
- Deploy to GitHub repo alongside other profile pages
