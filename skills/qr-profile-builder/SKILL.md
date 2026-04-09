---
name: qr-profile-builder
description: Builds the permanent digital QR profile page for My Legacy Continues customers. Creates mobile-optimized HTML profile pages in MLC brand (black, gold, Cinzel) for Heritage Book customers, business founders, and cemetery memorial customers. Trigger this skill whenever a heritage research order is complete and needs a digital profile, whenever user says "build the profile page", "create QR profile for [name]", "make the digital page", "build the profile html", or when a physical product needs a scannable landing page. Also use when assembling the full 5-deliverable Heritage Package.
---

# QR Profile Builder — My Legacy Continues

## Role
Build the permanent digital profile page — Deliverable #4 of the Heritage Package. This is the HTML page that lives at `mylegacycontinues.com/[surname]-profile.html` and is linked to the QR code on the physical book and any printed materials.

## What This Page Is
A mobile-first, scroll-based heritage profile that tells the family's story in a format designed for sharing. When a family member scans the QR on the book cover, this is what they see.

## Input Required
- Family surname(s)
- 3-chapter narrative from heritage-research skill (The Soil / The Journey / The Legacy)
- Family timeline entries
- Culture guide highlights (food, music — 2–3 items each)
- Customer's name (commissioned by)
- Any photos (use placeholder divs if none provided)
- Spotify or Apple Music playlist link (if provided)

## Design Spec
Match the MLC main site exactly:
- Background: `#1A1A1A` (near black)
- Gold: `#D4AF37`
- Text: `#F4EFE6` (warm cream)
- Headings: Cinzel (Google Fonts)
- Body: Lora (Google Fonts)
- Max-width: 860px centered
- Mobile-first responsive

## Page Structure

```
[NAV — links back to mylegacycontinues.com]

[HERO]
  Gold ship logo (logo.png)
  Family name in large Cinzel
  "A Heritage Profile — My Legacy Continues"
  Commissioned by: [Customer Name] · [Year]
  Gold divider line

[CHAPTER 1: THE SOIL]
  Section eyebrow: "The Ancient Homeland"
  Full narrative text
  Key fact callout (e.g., "The Vázquez name traces to Galicia, Spain")

[CHAPTER 2: THE JOURNEY]
  Section eyebrow: "The Crossing"
  Full narrative text
  Push Factor callout box

[CHAPTER 3: THE LEGACY]
  Section eyebrow: "The DNA of Excellence"
  Full narrative text
  Trade connection callout (ancestor's craft → customer's work)

[FAMILY TIMELINE]
  Vertical timeline, gold dots
  Each entry: [Year] — [Event]

[CULTURE GUIDE HIGHLIGHTS]
  2 columns: Food / Music
  3–5 items each with brief description

[MUSIC / PLAYLIST]
  If Spotify: embedded Spotify player iframe
  If Apple Music: link button styled in gold
  If none: placeholder "Family Playlist — Coming Soon"

[ARCHIVE EVIDENCE]
  List of archives searched
  Key documents found
  "Full Sources & Citations" section

[FOOTER]
  MLC logo
  "Long Live Your Legacy"
  mylegacycontinues.com
  © [Year] My Legacy Continues — Santa Maria, CA
```

## Code Standards
- Single self-contained HTML file — no external JS dependencies except Google Fonts
- All CSS inline in `<style>` tag
- Mobile responsive with media queries at 600px and 900px
- Smooth scroll between sections
- Gold horizontal rules between major sections
- `<meta>` tags for social sharing (og:title, og:description, og:image)

## File Naming
`[surname]-profile.html` — all lowercase, hyphenated
Examples:
- `vazquez-profile.html`
- `garcia-montemayor-profile.html`
- `rodriguez-profile.html`

## After Building
1. Save to `/home/claude/` and present with present_files tool
2. Tell Bear: "Push this to markvazquez92/legacy-os on GitHub"
3. Live URL will be: `https://mylegacycontinues.com/[surname]-profile.html`
4. Generate QR code for that URL using qr-code-generator skill
