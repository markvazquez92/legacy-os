markdown# CLAUDE.md — Rules for AI tools working in this repo

---

## CURRENT STATUS
Last updated: April 21, 2026

### Completed — do not redo
- All 43 pages: footer nav standardized (12-link canonical footer)
- All 43 pages: header nav standardized (9-link canonical nav)
- merch-legacy.html: Merch link removed from nav
- legal/privacy.html + legal/terms-of-service.html: full nav restored
- contractor-bundle.html + index.html: form _next redirects added
- privacy.html + thank-you.html: old white/cream colors replaced with Onyx (#14110F)
- style.css: nav overflow fix for medium screen widths

### Parking lot — not started
- vazquez-profile.html: page loads, content never reviewed
- Stop Claude button: not found in any HTML — likely a browser extension, not in codebase
- Copy inconsistencies, placeholder cards, FAQ alignment, form UX

### Locked constants — never touch without explicit instruction
- Formspree endpoint: xgolrkea (never change)
- Stripe links: never modify, only append
- CNAME, logo.png, .github/workflows/*

---

## PROTECTED FILES — DO NOT TOUCH

### CNAME
Contains one line: `mylegacycontinues.com`
Managed by GitHub Pages. AI tools must NEVER delete, modify, or commit changes to CNAME.
If CNAME appears in a diff, flag it and refuse to push until Bear approves.

### logo.png
Gold ship, silver hull stripe, gold glow, transparent background.
Authorized replacement Apr 17 2026. Do not replace or overwrite without explicit authorization.

### .github/workflows/*
GitHub Actions config. Do not modify without explicit approval.

---

## PUSH PROTOCOL
- Only Bear pushes via PowerShell
- AI tools show diffs and wait for acknowledgment before every commit
- No auto-commits, no auto-pushes

---

## CANONICAL FOOTER (source of truth — copy exactly)

```html

  
    Contact: contact@mylegacycontinues.com |
    (805) 863-3794 | Santa Maria, CA
    
      Home
      Heritage
      Pet Tags
      Business
      Network
      Rescue
      Transport
      Free Page
      About
      FAQ
      Privacy
      Terms
    
    &copy; 2026 My Legacy Continues. Every story deserves forever.
  

```

For pages inside /legal/ use ../ prefix on every href.

---

## CANONICAL NAV LINK MAP (source of truth)
Home → index.html
Heritage → heritage-book.html
Pet Tags → pet-tag.html
Business → business-profile.html
Network → network.html
Rescue → rescue-registry.html
Transport → active-transports.html
Free Page → free-profile.html (gold color: #C9A24C)
About → about.html

For pages inside /legal/ use ../ prefix on every href.

---

## DESIGN SPEC — Candy Paint (April 2026, supersedes all prior specs)

### Colors (P3-safe)
- Onyx Lacquer: #14110F — background (60%)
- Brandywine Candy: #5C0A12 — CTA (10%)
- Brandywine mid: #3A070C — gradient stop
- Brandywine deep: #2B0608 — gradient stop
- Pagan Gold: #C9A24C — accent (10%)
- Bone Cream: #ECE4D2 — body text (15%)
- Chrome Pinstripe: #BFB8A8 — dividers (5%)
- Oriental Blue: #1A3A5C — living status only
- Error: #A01E27

### Memorial sub-palette
- Onyx Warm: #1B1613
- Oxblood Memory: #47121A
- Gold Tarnished: #B49050
- Candle Amber: #E8C070
- Divider Memory: #3A2F27

### Fonts (self-hosted at /fonts/)
- Display: Big Shoulders Display (variable)
- Serif/Editorial: Fraunces (variable, regular + italic)
- Body/UI: Inter (variable)
- Signature Block only: Courier Prime + Caveat (Google Fonts — Joseph profile only)
- Killed: Staatliches, Lato, Cormorant, Oswald, Outfit, Cinzel

### Typography
- Body: Inter 18px / 1.6 line-height / 60ch max-width
- H1: Fraunces 900 / 36px mobile / 64px desktop
- Pull quotes: Fraunces Italic
- Eyebrows: Big Shoulders 900 uppercase tracked +120

### ADHD rules
- Max 12 words/sentence, 3 sentences/paragraph, 75 words/paragraph
- Bionic bold = first 2-4 letters on words ≥4 chars
- Max 7 items any list
- Body contrast AAA 7:1

### Project rules
- NO emojis anywhere
- NO rounded pill buttons (max border-radius 3px)
- Tone: warm, human, plain-spoken — never AI-sounding
- All pages self-contained HTML — fonts served locally from /fonts/

---

## SESSION RULES — Anti-Loop Protocol

- Read CURRENT STATUS before touching anything
- Before touching any file, grep for the pattern across ALL .html files first
- Fix all instances of a pattern in ONE pass, not file by file
- Batch all fixes into ONE commit per session
- Do not chase adjacent issues mid-session — finish the stated goal first
- After every change state: what changed, what file, what line
- If the same fix appears in multiple files, use a loop or sed — not manual edits
- Never "clean up while I'm in here" — scope creep is the loop
- Update CURRENT STATUS at the end of every session before the final commit

---

## SHARED COMPONENTS — Known Repeat Offenders

These blocks appear on every page and must be kept identical:
- Header nav (9 links, exact order — see CANONICAL NAV above)
- Footer nav + copyright + contact (see CANONICAL FOOTER above)
- "Talk To The Founder" / Text Bear block

When fixing any of these, fix ALL pages in one pass using grep + batch edit.