markdown# CLAUDE.md — Rules for AI tools working in this repo

---

## CURRENT STATUS
Last updated: April 22, 2026

### Completed — do not redo
- All 43 pages: footer nav standardized (12-link canonical footer)
- All 43 pages: header nav standardized (9-link canonical nav)
- merch-legacy.html: Merch link removed from nav
- legal/privacy.html + legal/terms-of-service.html: full nav restored
- contractor-bundle.html + index.html: form _next redirects added
- privacy.html + thank-you.html: old white/cream colors replaced with Onyx (#14110F)
- style.css: nav overflow fix for medium screen widths
- Apr 21 2026: Stripped leading-slash internal links (GitHub Pages 404 fix) in anthony-raygoza-memorial, antoinette-raygoza-memorial, contractor-bundle, faq
- Apr 21 2026: family-tree.html — JH node link corrected: joseph-vazquez-heritage.html → joseph-vazquez-profile.html
- Apr 21 2026: creator-profile.html + sports-legacy.html — Formspree intake form added below Stripe button (endpoint xgolrkea, _next → thank-you.html)
- Apr 22 2026: about.html — restored broken <img> tags (nav logo L147 + hero image L166). Commit 7feeac3.
- Apr 22 2026: family-tree.html removed (commit 48c0b20). Connection feature moves to individual profiles instead.
- Apr 22 2026: rescue-registry.html — Section 4 form simplified (Get Involved, 3 fields, no card wrapper); Section 7 copy softened (removed Underdog Heroes specificity, plain 10% language).
- Apr 22 2026: Sitewide — removed "Underdog Heroes" org name from 8 pages, replaced with "Rescue Partner" / generic copy. Kept shoshi-gamliel-profile + rescue-intake intact (her named pages). Commit 141b18f.
- Apr 22 2026: Removed broken/orphan links across 3 files. heritage-book.html: killed Culture Guide CTA + "$49 standalone" line, removed Life Trailer teaser section, removed Morning Memories Book section. cemetery-plaque.html: removed "Watch Trailer" button. vazquez-profile.html: removed "Watch the Vázquez Legacy Trailer" CTA block.
- Apr 23 2026: **Total System Sync refactor (Phases 1–5 + homepage rebuild)**. Font stack flipped: Big Shoulders/Fraunces/Inter retired, Staatliches/Lato/Cormorant Garamond Italic locked — all self-hosted at `/fonts/`. `fonts/fonts.css` rewritten. `style.css` `:root` consolidated around CLAUDE.md palette (Onyx/Brandywine/Pagan Gold primary + Bone Cream/Chrome Pinstripe/memorial sub-palette supporting); 925 inline `var(--...)` refs keep working via alias layer; `!important` font/button overrides rewritten to use `var()`. `manifest.json` background+theme colors swapped to spec. 798 hex replacements across 38 HTMLs (#1A1A1A → `var(--color-bg)`, #F5F5F5 → `var(--color-text)`, #D4AF37 → `var(--color-accent)`). One SVG `stroke=` on index.html:1462 moved into inline `style=` to support `var()`. `about.html` repaired — was truncated at L290, missing closers. `joseph-vazquez-profile.html` repaired — was missing `<link rel="stylesheet" href="style.css">` entirely. Anthony Raygoza memorial body forced to `var(--color-bg)` + Lato. Retired font preloads stripped from 34 HTMLs; Staatliches + Lato preloads added in their place. **New files:** `js/bionic.js` (Bionic Bold utility — opt-in via `data-bionic="true"` or `.bionic`, applied to heritage-book.html + pet-tag.html + cemetery-plaque.html — 722/563/similar `<b>` wraps verified), `js/sticky-cta.js` (mobile-only sticky "Claim Free Profile" CTA injected sitewide on 37 HTMLs; self-excludes on free-profile.html). `style.css` gained global `.sticky-cta` block + WCAG 2.5.5 min-44×44 touch target rule covering `button`, `.btn`, `a.btn`, `.home-cta`, `input[type="submit|button|reset"]`, `.nav-toggle`. **Homepage rebuild:** `index.html` collapsed from 1,474 → ~475 lines — 6-section flow (Hero / Founder Mission / 3-Step / Legacy Bundle w/ inline Bionic Bold / Rescue Partner / Final Call) with canonical nav+footer preserved. Known residuals (deferred): 2 stale CSS comments in anthony+antoinette reference old font names (zero runtime impact); archive/ intentionally untouched.
- Apr 24 2026: **Final color-purity sweep.** antoinette-raygoza-memorial.html body override matched to anthony spec (onyx bg + Lato body). Global `#FAF3E6` → `#ECE4D2` swap: 20 replacements across 4 files (anthony, antoinette, network, vazquez). Sitewide `#FAF3E6` count is now 0. Browser-verified: antoinette body bg `rgb(20,17,15)` / text `rgb(236,228,210)` / font Lato, no console errors.

### Parking lot — not started
- vazquez-profile.html: page loads, content never reviewed
- Stop Claude button: not found in any HTML — likely a browser extension, not in codebase
- Copy inconsistencies, placeholder cards, FAQ alignment, form UX
- Folder reorganization (NOT STARTED): move profile pages → /profiles/, memorial pages → /memorials/, product pages → /products/. All internal links across every .html file will need updating. Do NOT start without explicit instruction — touches every page on the site.
- Orphan files on disk (no inbound links as of Apr 22 2026): culture-guide.html, life-trailer.html, vazquez-trailer.html. Decide later: revive with real content, redirect, or delete.

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
      Free Profile
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
Free Profile → free-profile.html (gold color: #C9A24C)
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
- Hero / Display / Eyebrows: Staatliches
- Body / UI: Lato
- Quotes only: Cormorant Garamond Italic (400)
- Signature Block only: Courier Prime + Caveat (Joseph profile only)
- Killed (remove on sight): Big Shoulders, Oswald, Fraunces, Inter, Outfit, Cinzel

### Typography
- Body: Lato 18px / 1.6 line-height / 60ch max-width
- H1: Staatliches / 36px mobile / 64px desktop
- Pull quotes: Cormorant Garamond Italic
- Eyebrows: Staatliches uppercase tracked +120

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

---

## Apr 24 2026 — Total System Sync Reference

Three product pages set the gold standard for the rest of the site:
- `heritage-book.html`
- `pet-tag.html`
- `cemetery-plaque.html`

See `STYLE_GUIDE.md` for the full palette, typography, copy, Bionic, and CTA rules.
Future pages must match these three on every dimension before merging.

Locked SHAs:
- `d17fe1b` — Total System Sync (palette purge + 30 Bionic rewrites + timeline harmonization)
- `6b8dd1c` — Vibe Check (Bionic density 6+ letter gate + Get Started CTA upgrade)
- `e52c24b` — Phase E (timeline prominence — "Total: 7 weeks" promoted to primary trust signal)