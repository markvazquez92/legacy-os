# Gold Standard Reference — My Legacy Continues

**Last sync:** Apr 24 2026 — Total System Sync complete (commits `d17fe1b`, `6b8dd1c`, `e52c24b`)

## Pages that define the standard
- `heritage-book.html`
- `pet-tag.html`
- `cemetery-plaque.html`

When extending the site, match these three pages on every dimension below. Treat any divergence as drift.

## Locked Palette
- `#14110F` Onyx (background)
- `#5C0A12` Brandywine (CTAs, accents)
- `#C9A24C` Gold (trust signals, accents, primary borders)
- `#ECE4D2` Bone (body text)

**Never introduce hex codes outside this set.**

## Semantic Color Whitelist (preserve, do not purge)
- `#1A3A5C` Oriental Blue → "Living" status indicator
- `#FB923C`, `#4ADE80`, `#F87171`, `#DC2626`, `#C2410C`, `#15803D`, `#14746F` → transport status palette (`active-transports.html` only)

## Typography
- **Headlines:** Staatliches (`var(--font-hero)`)
- **Body:** Lato (`var(--font-body)`)
- **Quotes/emotion:** Cormorant Garamond (`var(--font-quote)`)
- **Memorial accents:** Courier Prime
- **Banned forever:** Inter, Fraunces, Big Shoulders, Oswald

## Copy Rules
- **Marathon Rule:** No sentence in product descriptions exceeds 12 words.
- **One trust signal per scroll section** — promote with `.timeline-total`-style emphasis (gold, 1.25em, bold).
- **No timeline contradictions** — delivery promise must be identical across product page and FAQ.

## Bionic Utility
- `data-bionic="true"` on `<body>` of all product pages.
- Word-length gate: only words with **6+ letters** receive bolding.
- Tier: 6–8 letters → bold first 3, 9+ letters → bold first 4.
- Target density: ~400 `<b>` tags per long product page (heritage-book reference).

## CTA Treatment (primary)
```css
background: #5C0A12;
border: 2px solid #C9A24C;
color: #ECE4D2;
```
Three live examples on `heritage-book.html`: nav "START YOUR LEGACY", pricing "PAY NOW — $199", mid-page "GET STARTED". All match.

## Sticky CTA
- Mobile-only by design: `@media (min-width: 769px) { .sticky-cta { display: none; } }`
- Do not add to desktop without explicit approval.

## Push Protocol
- Only Bear pushes via PowerShell.
- AI tools propose dry-runs; Bear executes commits and pushes.
- No auto-commits, no auto-pushes.

## Workflow Discipline
- Dry-run every refactor before writing.
- Site-wide grep verification after content changes (especially timelines, pricing, hex codes).
- Inline styles override class rules — drop conflicting inline declarations rather than using `!important`.
