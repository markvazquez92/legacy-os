# CLAUDE.md — Rules for AI tools working in this repo

## PROTECTED FILES — DO NOT TOUCH

### CNAME
The CNAME file at repo root contains the single line:
mylegacycontinues.com

This file is managed by GitHub Pages automatically when the custom domain is set in Settings > Pages. AI tools (Claude Code, Cowork, Claude Chat) must NEVER:
- Delete CNAME
- Modify CNAME
- Commit any change to CNAME

If CNAME appears in a diff, the AI tool must flag it and refuse to push until the user approves.

### logo.png
The logo file at repo root is a gold ship with silver hull stripe and gold glow, transparent background. Authorized replacement Apr 17 2026. Do not replace, modify, or overwrite without explicit authorization.

### .github/workflows/*
GitHub Actions config. Do not modify without explicit approval.

## PUSH PROTOCOL
- Only Bear pushes via PowerShell
- AI tools show diffs and wait for acknowledgment
- No auto-commits, no auto-pushes

# MLC DESIGN SPEC — current (supersedes all prior specs)
# Research-validated April 19, 2026. Living system — tune post-launch with real data.

## Colors (Candy Paint, P3-safe)
- Onyx Lacquer: #14110F (background, 60%)
- Brandywine Candy: #5C0A12 (CTA, 10%)
- Brandywine mid: #3A070C (gradient stop)
- Brandywine deep: #2B0608 (gradient stop)
- Pagan Gold: #C9A24C (accent, 10%)
- Bone Cream: #ECE4D2 (body text / type surface, 15%)
- Chrome Pinstripe: #BFB8A8 (dividers, 5%)
- Oriental Blue: #1A3A5C (living status only)
- Error: #A01E27

## Memorial sub-palette
- Onyx Warm: #1B1613
- Oxblood Memory: #47121A
- Gold Tarnished: #B49050
- Candle Amber: #E8C070
- Divider Memory: #3A2F27

## Fonts (self-hosted at /fonts/)
- Display: Big Shoulders Display (variable)
- Serif/Editorial: Fraunces (variable, regular + italic)
- Body/UI: Inter (variable)
- Signature Block only: Courier Prime + Caveat (Google Fonts, Joseph profile only)
- Killed: Staatliches, Lato, Cormorant, Oswald, Outfit, Cinzel, Fraunces-was-rejected-Lato-rejected-too

## Typography rules
- Body: Inter 18px / 1.6 / 60ch max-width
- H1: Fraunces 900 / 36px mobile / 64px desktop
- Pull quotes: Fraunces Italic
- Eyebrows: Big Shoulders 900 uppercase tracked +120

## ADHD rules
- Max 12 words/sentence, 3 sentences/paragraph, 75 words/paragraph
- Bionic bold = first 2-4 letters on words ≥4 chars
- Max 7 items any list (Miller 7±2)
- Body contrast AAA 7:1

## Project rules (preserved across specs)
- NO emojis anywhere
- NO rounded pill buttons (max border-radius 3px)
- Tone: warm, human, plain-spoken — never AI-sounding
- All pages self-contained HTML — fonts served locally from /fonts/ (except Courier Prime + Caveat for Signature Block, Joseph profile only)
## SESSION RULES — Anti-Loop Protocol

- Before touching any file, grep for the pattern across ALL .html files first
- Fix all instances of a pattern in ONE pass, not file by file
- Batch all fixes into ONE commit per session — never push single-file fixes
- Do not chase adjacent issues mid-session — finish the stated goal first
- After every change, state: what was changed, what file, what line
- If the same fix appears in multiple files, use a loop or sed command — not manual edits
- Never "clean up while I'm in here" — scope creep is the loop

## SHARED COMPONENTS — Known Repeat Offenders

The following blocks appear on every page and must be kept identical:
- Header nav (all 9 links in exact order)
- Footer nav + copyright + contact info
- "Talk To The Founder" / Text Bear block

When fixing any of these, fix ALL pages in one pass using grep + batch edit.

## CURRENT NAV LINK MAP (source of truth)

Home → index.html
Heritage → heritage-book.html
Pet Tags → pet-tag.html
Business → business-profile.html
Network → network.html
Rescue → rescue-registry.html
Transport → active-transports.html
Free Page → free-profile.html
About → about.html