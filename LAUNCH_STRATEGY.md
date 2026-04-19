# MLC LAUNCH STRATEGY — MASTER DOC

**Prepared for:** Bear Vázquez, solo founder — My Legacy Continues
**Launch window:** April 21–25, 2026 · Santa Maria, CA
**Last updated:** April 19, 2026
**Purpose:** The single source of truth for launch. Merges deep research (601-source blueprint) with real site audit (all 42 pages read). Lives in repo root so Cowork, Code, and future sessions can reference it.

---

## THE 3 LOCKED DECISIONS

Everything else serves these three. Don't re-debate them.

1. **Font stack:** Staatliches + Lato + Cormorant Garamond Italic (drop Fraunces and Big Shoulders)
2. **Homepage CTA:** Free-first single dominant CTA ("Claim Your Free Legacy Profile") — not a product grid
3. **Cultural positioning:** Lean harder into 805/Chicano/Lowrider on identity pages, stay neutral on checkout and utility pages

---

## VERIFIED REALITY — WHERE MLC ACTUALLY IS (Apr 19, 2026)

### Already built and live
- 42 HTML pages at repo root, all served from GitHub Pages
- 9 revenue pages with working Stripe links ($24.99 to $199)
- 13 real profile pages live (Bears Concrete template locked)
- 16 self-hosted fonts in `/fonts/` (Staatliches, Lato, Cormorant all ready — not yet swapped on live pages)
- GA4 (G-XQJ8KPVZX9) and FB Pixel (2828165625364437) tracking across main pages
- OG tags on 8 flagship pages (Anthony memorial renders on iMessage/IG)
- Formspree endpoint xzzpqjle on all forms
- Phone (805) 863-3794 + contact@mylegacycontinues.com live in footer
- Cemetery plaque polished (commit dab1055, Apr 19) — zero pomegranate, zero Montserrat, zero "Family Portal"
- Bears Concrete profile locked as business template (Connected Hub + Signature block)
- CLAUDE.md enforces: CNAME/logo.png/.github/workflows never touched, only Bear pushes via PowerShell
- Bear's photo `images/bear-photo.jpg` (346KB) live in repo — currently only used on Vazquez profile

### Real gap list (launch-blocking)
- Homepage has 11 sections (research recommends 6) and 16 CTAs (research recommends 1 dominant)
- No founder trust block above the fold on homepage
- No forever-promise guarantee band
- No direct contact strip (phone in footer but not promoted)
- No Stripe security microbar
- 34 pages missing OG tags (link previews look broken)
- Joseph profile is thin (2 chapters, 3 images) — memory thought it was 7 chapters
- Butters profile needs Bears Concrete template applied
- Fonts still served from Google (not yet swapped to self-hosted Lato + Staatliches)
- Background is `#F5F5F5` (research recommends `#FAFAF7` warm off-white)
- No mobile sticky CTA
- Homepage "Real Legacies" section has placeholder boxes, not real thumbnails

### Critical corrections to lock in
- **Joseph Vázquez is ALIVE.** His Heritage Book and Free Profile are living tributes, not memorials. Never write copy saying "after my father passed" about Joseph.
- **Deborah Mahony (Bear's mother) is ALIVE.** Free Profile style, not memorial.
- **Actual MLC memorials:** Anthony Raygoza Sr (passed), Antoinette Raygoza (passed). These are the only pages where "in memory of" copy is correct.
- **About page is accurate** — it references "grandfather Joe" (metalworker/ringmaker who passed), not Joseph.

---

## THE 7 DESIGN PATTERNS TO STEAL

Not from other memorial sites. Memorial category has surrendered design. Steal from Aimé Leon Dore × NYT "Overlooked" × Shinola.

1. **Manufactured-in-place signature block** — "MLC · SANTA MARIA, CA · EST. 2026" in Staatliches, recurring on product cards, profile footers, engraved into physical products. Signals heritage commerce more than any trust badge.

2. **Full-bleed human portrait hero with two-line Staatliches headline, zero body copy above the fold** — The restraint tells visitors this is a cultural object, not a SaaS product.

3. **Silent scroll — weight-change hierarchy, no animation** — Kill every hover animation except the existing shimmer. Typography does 100% of hierarchy. Strict vertical scale: 128px hero → 48px kicker → 18px body → 14px caption.

4. **Editorial-grid product cards with caption-style descriptions** — 12-column grid. Hero image spans 8 cols, description in Cormorant Garamond Italic spans 4. Price small, Chrome, lower right.

5. **Cultural specificity as shibboleth, not gatekeeping** — Use Spanish and Caló interchangeably without italicizing (italicizing Spanish visually others it). Descansa en paz, not "Rest in peace." La Familia, not "Family." Confidence in the dialect is what invites outsiders in.

6. **Pull quote as monument** — Every Legacy Profile gets one pull-quote slot in Cormorant Garamond Italic at ~56px, Brandywine #8B0000, centered. The digital epitaph.

7. **Archive-as-navigation (The MLC Index)** — Public typeset roll of every profile ever created. "VÁZQUEZ, OSVALDO 'BEAR' · Santa Maria · 1952–2026 · Carpenter, father, lowrider." What Legacy.com should have been. SEO and PR moat.

---

## MYSPACE MAGIC — 7-COMPONENT PROFILE TEMPLATE

MySpace worked because it treated a profile as a bedroom wall, not a business card. Recreate the resonance without the chaos. **Fixed structure, infinite content variability.**

Every MLC Legacy Profile gets these 7 blocks:

1. **Hero Identity Card** — Full-bleed portrait, name, dates (1952–2024 memorial / Est. 1988 Santa Maria living / founding year for business), one-line Signature Quote in handwritten display font (Caveat Brush or Homemade Apple — never Comic Sans).

2. **Legacy Song** — One song, non-autoplay, big play button. Hard cap at one. Memorial = their favorite picked by family. Living = current anthem. Business = shop theme. The single-song constraint is the discipline MySpace never had.

3. **Signature Block** — The emotional heart. Fixed-width "letter" module on cream background, Courier Prime typewriter font, left-aligned. Memorial = family-written eulogy, max 400 words. Living = first-person intro letter. Ends with typed signature in handwritten display font, or uploaded image of real signature.

4. **Top Connections (Top 8 done right)** — 6–8 profile cards, each with photo, name, and relationship label the owner writes themselves ("my dad," "co-founder," "godmother," "the homie since kindergarten"). Role-based labels defuse the ranking drama.

5. **Timeline / Milestone Ribbon** — Vertical scrollable ribbon of 5–15 milestones: one photo + one date + one sentence each.

6. **Gallery with Captions** — Up to 24 photos. Caption required on every photo (enforced in validation). Forces narrative control.

7. **Guest Book / Wall** — Memorial = Guest Book with "light a candle" ceremonial like. Living = Wall. Steward moderates every post before publication. Prevents MySpace-era chaos.

**Deliberately missing:** no custom HTML, no layout choice, no autoplay, no unlimited fonts, no glitter. Your story, our frame.

---

## ADHD-FRIENDLY DESIGN SYSTEM — 14 RULES

ADHD-friendly is older-adult-friendly is mobile-friendly is conversion-friendly. Every rule helps MLC's 50+ Heritage Book buyers AND ADHD users simultaneously. Apply across all 42 pages.

1. Body text 18px mobile / 20px desktop, line-height 1.55, max 65 characters per line
2. Paragraphs ≤4 lines. Descriptive H2s. Eyebrow labels above every major section
3. Sans-serif for all UX body (Lato). Serif (Cormorant Italic) only for pull quotes and Heritage Book interior long-form
4. Contrast ≥4.5:1 via `#1A1A1A` on `#FAFAF7`, never `#000/#FFF` (halation ghosts letterforms for 50+ eyes)
5. Palette capped at 5 colors: Charcoal + Brandywine + Chrome + Gold + Warm Gold pinstripe
6. One primary CTA per section. One dominant CTA per screen
7. Chunk lists to 3–5 items; collapse the rest
8. 64–96px desktop / 40–64px mobile vertical rhythm. 24px CTA halo (empty space around CTAs)
9. Alternate text / image / color block — never more than two text blocks in a row
10. Pull quote every 400–600 words in long-form
11. Bold key terms only; italics sparingly (18% harder to read)
12. Respect `prefers-reduced-motion`. No autoplay. Hover ≤200ms
13. Touch targets ≥44×44px. Focus indicators always visible (WCAG 2.2)
14. Consistent help location, autosave forms, no cognitive auth tests

**Differentiation line to publish on `/design-system` page:** "MLC is the first legacy platform explicitly designed for ADHD brains. Short sentences. Bold key words. Steps, not paragraphs. Because your family's story shouldn't take 20 minutes to read."

---

## PHYSICAL-TO-DIGITAL BRIDGE — 5 PATTERNS

The category's lesson: best bridges show both objects in one frame, use three-word causal-chain copy, treat QR as a typographic character not a utility sticker.

**A. The Key Ceremony hero.** Split hero. Left 50%: Heritage Book on wooden table, hand reaching in, 35mm warm window light. Right 50%: phone mockup showing Legacy Profile. Between: hand-painted Gold pinstripe from book spine into phone screen. Headline: "THE KEY IS PHYSICAL. THE LEGACY IS FOREVER." Sub: "Every Heritage Book, plaque, and tag unlocks one Legacy Profile. One-time $79. No subscription. Ever."

**B. "Tap. Unlock. Forever." three-square module.** Stolen from amiibo grammar. Three equal squares: TAP (book photo) / UNLOCK (phone scanning QR) / FOREVER (real profile screenshot). One line below: "One physical key. One digital legacy. Paid once, carried forever." Kills the Linktree comparison on sight.

**C. The notarial backside.** Every physical product shows digital twin on reverse. Heritage Book back cover: gold-foil-stamped QR, URL typeset in Staatliches, "This key opens one door. Forever." Unlike wine (QR as compliance), MLC puts QR front-and-center — it IS the point.

**D. The ecosystem map.** Below hero: single-weight Chrome line diagram on Charcoal. Four products connected by gold pinstripes to central "MLC Network" node. Heritage Book → Personal Profile. Plaque → Memorial. Pet Tag → Pet Profile. Contractor Bundle → Business Legacy. Headline: "ONE NETWORK. FOUR KEYS. INFINITE STORIES."

**E. The Certificate of Permanence.** Peloton shows leaderboard. Apple shows Activity ring. MLC shows a digital Certificate of Permanence generated at purchase. Numbered (MLC-000042), stamped "SANTA MARIA, CA," typeset like a notarial document. Signed "Bear Vázquez, Keeper." Language: "This certifies that the Legacy Profile of [Name] has been enrolled in the MLC permanent network. This profile shall remain accessible in perpetuity with no recurring fee."

---

## TRUST STACK FOR DAY 1 (ZERO SOCIAL PROOF)

Research is clear: founder face + forever-promise + specific-product proof beats testimonials MLC doesn't have yet. Exact above-fold order, mobile-first:

1. **Founder photo + name + one-line stakes** (Bear's face with stakes line in Bear's voice — NOT "my father passed")
2. **One-sentence specific mission** ("A forever home for your family's name, your ranfla, your gente")
3. **Forever-promise guarantee band** ("$79 once. Yours forever. Export everything, anytime.")
4. **Real family photo, never stock** (Joseph Vázquez free profile preview, the 1966 Impala, Anthony Raygoza memorial)
5. **Proof-of-product tile** ("See a real Legacy Profile live → Bears Concrete, Santa Maria" — click to live page)
6. **Direct contact strip** ("Text Bear: (805) 863-3794 · bear@mylegacycontinues.com · Built solo in Santa Maria, CA")
7. **Payment security microbar** (Stripe logo + "Stripe Secure Checkout · Privacy Policy · Your data is never sold")

**What NEVER ships:** stock "happy family" iStock photos, fake testimonials ("Maria S., verified buyer"), vague "trusted by thousands," irrelevant press logos, over-polished stock video.

---

## HOMEPAGE — 11 SECTIONS COLLAPSED TO 6

### Current state (verified Apr 19): 11 sections, 1,538 lines
1. Hero → 2. Why We Built This → 3. What Is MLC? → 4. Now On The Network → 5. The Network → 6. How It Works → 7. Your Legacy Products → 8. Real Legacies → 9. Rescue Partners → 10. Stay Updated → 11. Your Profile Your Way

### Target state: 6 sections
1. **Hero with single dominant CTA** — Full-bleed portrait, Staatliches two-line headline. Primary CTA: "Claim Your Free Legacy Profile →". Secondary text-link: "See the Heritage Book ($199)." Mobile sticky CTA live.
2. **Key Ceremony** — Split hero (book + phone + pinstripe). Below: Tap / Unlock / Forever three-square module.
3. **Founder + real proof** — Bear's face + name + one-line stakes. Joseph memorial preview card. Bears Concrete live-profile tile. One Cormorant Italic pull quote from Bear.
4. **Ecosystem map + product grid** — Line diagram of 4 physical products → MLC Network → Legacy Profile. Below: 2×3 editorial grid of product cards. "Learn more" as text link, not competing CTA.
5. **MLC Index + cultural anchor** — Live typeset roll of recent profiles. Santa Maria signature block. One cultural pull quote.
6. **Forever-promise footer CTA** — Price strip: "$79 once. Forever. No subscription, no renewal, no exception." Repeat primary CTA. Direct contact strip. Stripe microbar.

### What gets deleted or merged
- "Why We Built This" rolls into Founder block in Section 3
- "What Is MLC?" absorbed into Section 2's visual
- "How It Works" becomes Section 2's Tap/Unlock/Forever
- "Your Profile Your Way" becomes Section 5's Index
- "Rescue Partners" → moves to dedicated `/partners` page (tertiary audience)
- "Stay Updated" → merges into Section 6 CTA
- "Now On The Network" → absorbed into Section 5

---

## SPECIFICITY STRATEGY — WHERE TO LEAN 805/CHICANO, WHERE TO STAY NEUTRAL

### Lean harder (specificity is the conversion lever)
- **Homepage hero** — lowrider hydraulic three-wheel silhouette against Santa Maria sunset. 805 above the fold.
- **Heritage Book page** — book in a real hand (Anthony's, ideally). Pinstripe detail, embossed leather finish on camera.
- **About/Founder page** — full-throat Santa Maria origin story. Car club lineage. First-person, Spanglish welcome, no corporate voice.
- **Seasonal Legacy Drops** — Año Nuevo, Día de los Muertos, Cinco de Mayo. Full cultural language, Spanish + English side by side, never italicized, never translated inline.
- **Anthony Raygoza Sr. Legacy Drop** — gold-standard template every new user emotionally clones.

### Stay culturally neutral (these pages serve function, not identity)
- **Checkout** — Stripe-clean. Trust, clarity, speed. Culture sold them; get out of the way.
- **Pet tags** — pets are universal. Warm MLC-branded but no lowrider language.
- **Baby Legacy** — tender, universal, gender-neutral. Parents outside the 805 need to imagine their newborn here.
- **Contractor/business bundles** — B2B copy. Outcomes, not origin.
- **Help Center, T&Cs, privacy, account settings** — boring on purpose.

### Never-do list
- Performative Spanglish sprinkled for flavor (cosplay, not voice)
- Cliché skulls + marigolds year-round (cheapens Día de los Muertos)
- Glossary pages explaining "What is a lowrider?" (signals "this isn't really for you")
- Stock lowrider imagery (one Shutterstock photo and the whole brand loses credibility)
- Celebrity chasing before community is earned (community first, then celebrity — Nipsey sequence)

---

## EXECUTION — TIER 1, TIER 2, TIER 3

### Tier 1 — Launch-blocking (tonight / this week, ~2-3 hours total)
These are the conversion killers. Without these, launch flops.

1. **Founder trust block** — Bear photo + name + stakes line above the fold
2. **Single dominant CTA cleanup** — demote 9 "Order Now" buttons to "Learn More" text links; keep hero + footer primary CTAs
3. **Forever-promise guarantee band** — "$79 once. Yours forever. Export anytime. If MLC ever shuts down, your data comes with you."
4. **Direct contact strip** — "Text Bear: (805) 863-3794 · bear@mylegacycontinues.com · Built solo in Santa Maria, CA"
5. **Stripe security microbar** — small Stripe logo + "Secure Checkout · Privacy Policy · Your data is never sold"

### Tier 2 — High-leverage polish (1-2 weeks post-launch)
6. OG tags on 34 missing pages
7. Joseph profile — expand to actual 7-chapter Heritage Book depth
8. Butters profile — redo with Bears Concrete template (Connected Hub + Signature)
9. Homepage "Real Legacies" — replace placeholder boxes with real thumbnails or delete section
10. Font stack swap — Oswald → Staatliches, Outfit → Lato across 42 pages (self-hosted, already in `/fonts/`)
11. Background color fix — `#F5F5F5` → `#FAFAF7`
12. Mobile sticky CTA
13. Homepage 11 sections → 6 restructure

### Tier 3 — Phase 2 (30-60 days post-launch)
14. 7-component profile template refactor (apply to all 13 profiles)
15. MLC Index page (monument wall)
16. Certificate of Permanence generation (Stripe webhook)
17. Key Ceremony split hero (needs professional photos first)
18. Welcome email sequence (3 emails)
19. Apply Bears Concrete template to BigTymer / McNeal / Carlos
20. Guest Book system with moderation
21. Ecosystem map illustration

### Phase 3 — (~90 days post-launch)
- Grandma Elvira oral history recording (urgent/time-sensitive)
- Stephanie Quintana surprise profile + reaction video
- Life Trailer production (Jim + Gemini)
- Full Spanish translation
- Press outreach
- Base44 migration → Supabase + Vercel

---

## TOOL LANES — 6-TEAM SAFETY MEETING

| Team member | Lane | When to use |
|---|---|---|
| **Bear** | Captain | Decisions, PowerShell pushes, content, photos |
| **Claude Chat** | Strategy + prompts + audit | Plan sessions, write Cowork prompts, verify diffs |
| **Cowork** | Surgical edits to existing files | Tier 1 + Tier 2 execution |
| **Claude Code** | New feature builds | Tier 3 work (templates, Certificate, Index page) |
| **Claude Design** | Visual sandbox | Design tests before going live |
| **Gemini** | Image generation | Product mockups, scenes you can't shoot |

**Tonight:** Chat + Cowork + Bear only. Everyone else off-duty. Less chaos, more precision.

---

## PUSH PROTOCOL (NON-NEGOTIABLE)

1. Bear provides the ask
2. Claude Chat writes the Cowork prompt
3. Bear pastes prompt into Cowork
4. Cowork pulls latest from `origin/main`
5. Cowork shows surgical diff (DO NOT PUSH)
6. Bear screenshots diff to Claude Chat
7. Claude Chat verifies
8. Bear approves in Cowork
9. Cowork applies change
10. Bear pushes via PowerShell:
```powershell
cd C:\Users\BEAR\Documents\GitHub\legacy-os
git add .
git commit -m "[descriptive message]"
git push origin main
```
11. Claude Chat verifies live at mylegacycontinues.com
12. Move to next prompt

**Protected files — never touched by any tool:**
- `CNAME` (managed by GitHub Pages)
- `logo.png` (authorized Apr 17, 2026 — gold ship transparent bg)
- `.github/workflows/*`

---

## LAUNCH DAYS — APR 21-25 PLAYBOOK

### Day 1 (Mon Apr 21)
- Ship Tier 1 tasks 1-3 (founder block, CTA cleanup, guarantee band)
- PowerShell push each separately
- Verify live between each

### Day 2 (Tue Apr 22)
- Ship Tier 1 tasks 4-5 (contact strip, Stripe microbar)
- Start Tier 2 if time permits
- Test mobile view on real iPhone

### Day 3 (Wed Apr 23)
- Pre-launch audit — full site click-through
- Fix anything broken
- Prep Anthony Legacy Drop IG assets (9 tiles + 1 reel already built)
- Draft Central Coast Facebook group posts

### Day 4 (Thu Apr 24)
- Post Anthony Legacy Drop on Instagram
- Text Shoshi her profile link
- Central Coast Facebook groups (Central Coast Chisme, Central Coast Exchange)
- Santa Maria / Lompoc / Oxnard lowrider community groups

### Day 5 (Fri Apr 25)
- DMs + direct response
- Monitor GA4 + FB Pixel
- Iterate based on what's converting
- No new builds — launch day is for conversation

**What Bear does NOT do on launch day:** no new features, no design changes, no refactors. Every feature change waits until Day 6+.

---

## REVENUE TARGETS

- Month 1: $2.3K (30 orders)
- Month 3: $10K
- Month 6: $28K
- Month 12: $80K
- Year 1: 800 profiles

**No paid ads. Profiles are the billboards.**

---

## KEY LEARNINGS + GUARDRAILS

- **Profiles are billboards** — build them first, give them away as the opening move, let quality speak
- **Outreach model (Stephanie):** build the profile → give it free → film the reaction
- **Free Profile = waitlist only at launch** (Formspree capture); self-serve builder is Phase 2
- **Joseph's 7-chapter Heritage** — deploy Phase 2 (currently 2 chapters thin)
- **Rescue partner model:** rescue dogs get permanent Legacy Profiles; adopters receive pet tags linking to full history
- **B2B2C pipeline:** funeral homes, cemeteries, churches, sports leagues
- **Valuation context:** $150K–$400K+ traditional build cost; ~165 hours at 2.4× full-time pace; nine-figure ceiling across 5 converging markets
- **Design drift prevention:** CLAUDE.md + CNAME protection. Never let Code or Cowork push directly. If logo turns grey, the `grayscale(1)` rule is back — delete immediately
- **CDN cache ≠ failed push** — use `?cache=bust<commit>` to verify. Trust repo over memory
- **Memory is not authoritative** — memory said Joseph profile had 7 chapters; reality is 2. Always verify repo first.
- **Deep research assumptions need checking** — report assumed Joseph passed; he's alive. Never accept research framing without verifying against reality.

---

## FINAL WORD

MLC's launch-week bet is simple: in a category that has surrendered craft, culture, and specificity to generic SaaS memorial software, a Santa Maria founder with real family photos, a real operating business as a live template, and a Chicano/lowrider aesthetic nobody else owns can take the premium shelf with three fonts, six homepage sections, and one free-first CTA.

This is not a hope — it is the pattern Nipsey Hussle, Aimé Leon Dore, Shinola, and Forever.com's Glen Meakem have each independently proven. MLC's difference is the stacking: it simultaneously plays the heritage-craft card (Shinola), the cultural-specificity card (Marathon/ALD), the founder-named forever-promise card (Forever.com), and the physical-product-as-digital-key card (nobody else in memorial).

Each of those on its own is a viable moat. Together, they are a category reset.

**Execute Tier 1 this week. Ship Tier 2 post-launch. Phase 2 in 30 days. Phase 3 in 90. No paid ads. Profiles are the billboards.**

— Locked Apr 19, 2026. Update as reality changes.
