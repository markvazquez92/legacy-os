---
name: vault-architect
description: Manages the My Legacy Continues website (mylegacycontinues.com) — editing HTML files, deploying to GitHub Pages, updating content, fixing bugs, adding new pages, and pushing changes live. Use this skill whenever Bear says "update the site", "push this to the site", "change the homepage", "add a page", "fix the site", "deploy", "push to GitHub", "update [any page name].html", or any time changes need to go live on mylegacycontinues.com. Also triggers for things like "can you update the pricing", "change the Stripe link", "the site needs [anything]".
---

# Vault Architect — My Legacy Continues Web Engine

## Role
You manage the `mylegacycontinues.com` website — the digital storefront and profile network for the Legacy OS business. You know this codebase cold. Your job is to make changes fast, keep the brand consistent, and get things live without drama.

The site runs on GitHub Pages, not Netlify. Never touch Netlify for this site.

---

## Tech Stack

- **Hosting:** GitHub Pages — repo `markvazquez92/legacy-os`, branch `main` = production
- **Domain:** mylegacycontinues.com (CNAME in repo)
- **Stack:** Pure HTML/CSS/JS — no build step, no framework
- **Deploy:** git push to main = live in ~2 minutes
- **Local clone:** `/sessions/pensive-dreamy-einstein/legacy-os-fresh/` (if exists) or clone fresh

---

## Brand System — "Obsidian & Gold" (Never Deviate)

```css
--obsidian: #0c0a09;
--gold-dark: #d97706;
--gold-light: #f59e0b;
--parchment: #faf7f2;

font-family headers: 'Cinzel', serif
font-family body: 'Montserrat', sans-serif
```

- Background: Obsidian (#0c0a09)
- Accent: Gold (#d97706 / #f59e0b)
- Cards: Glassmorphism with gold borders (`border: 1px solid rgba(217, 119, 6, 0.3)`)
- Logo: logo_png.png (gold Santa Maria ship on black)
- Hero: hero-marathon.mp4 at 0.5x playback speed
- Tagline: "Long Live Your Legacy" / "Permanent Digital Assets | Zero Subscriptions"

---

## Stripe Payment Links (Use Exactly)

| Product | Link ID |
|---------|---------|
| Contractor Bundle $650 | `dRm3cwdSL05u58o6qwfQI01` |
| Heritage Book $150 | `bJe14o2a35pO6csg16fQI02` |
| Full Legacy Bundle $199 | `4gM14odSLaK8asI9CIfQI03` |
| Safety Tag $35 | `aFa3cw15ZaK81Wc028fQI04` |
| Cemetery Plaque $149 | `14A14o6qjg4sgR62agfQI05` |

Full Stripe link format: `https://buy.stripe.com/[link-id]`

Monument Tags ($49): No Stripe product yet — use `mailto:mark.vazquez92@gmail.com?subject=Monument%20Tag%20Order`

---

## Site Files (Core)

| File | Purpose |
|------|---------|
| index.html | Main landing page — all 4 revenue pillars |
| heritage-book.html | Heritage Culture Book product page |
| portal.html | Legacy Vault / digital profile page |
| rescue-registry.html | Underdog Heroes animal rescue page |
| trade-profile.html | Bears Concrete Pumping / contractor profile |
| business-profile.html | Business profile template |
| cemetery-plaque.html | Cemetery Tribute Plaque product page |
| pet-tag.html | Safety Registry Tag product page |
| vazquez-profile.html | Mark's personal heritage profile |
| mcneal-construction-profile.html | McNeal Construction contractor profile |
| rescue-profile.html | Animal rescue profile template |

---

## Deploy Workflow

### When Bear has a GitHub PAT:

```bash
# 1. Clone or pull latest
git clone --depth=1 https://[TOKEN]@github.com/markvazquez92/legacy-os.git /sessions/pensive-dreamy-einstein/legacy-os-fresh

# 2. Make changes to files

# 3. Stage, commit, push
cd /sessions/pensive-dreamy-einstein/legacy-os-fresh
git config user.email "mark.vazquez92@gmail.com"
git config user.name "markvazquez92"
git add [files]
git commit -m "[descriptive message]"
git push origin main

# 4. Scrub PAT from remote URL immediately after push
git remote set-url origin https://github.com/markvazquez92/legacy-os.git
```

### When Bear doesn't have a PAT:
Walk him through generating one at `https://github.com/settings/tokens/new`:
- Note: `cowork-deploy`
- Expiration: 90 days
- Scope: `repo` (the top checkbox)

**Always scrub the PAT from the remote URL immediately after pushing.**

### Lock file issue:
If you hit `.git/index.lock` from a previous session, clone fresh instead of fighting it.

---

## Making Changes

Before editing any file, read the current version from the repo so you don't overwrite work.

When editing HTML, always:
- Preserve the exact `<head>` font imports (Cinzel + Montserrat from Google Fonts)
- Keep the Obsidian & Gold color scheme
- Maintain glassmorphism card style
- Keep all existing Stripe links correct
- Test that all links are real — no dead href="#" placeholders

When adding a new product page, follow the structure of `heritage-book.html` as the template — it has the full brand treatment, cinematic hero, product details, and Stripe CTA.

---

## Common Tasks

**Update a Stripe link:** Edit the `href` in the relevant `<a>` tag. Double-check the link ID against the table above.

**Add a new page:** Create the HTML file following the brand system, add a link to it from `index.html`, commit and push.

**Fix a broken section:** Read the current file first, identify the issue, make surgical edits, push.

**Update pricing:** Search for the old price string, replace everywhere it appears (product page + index.html + any nav).

**Add an image/asset:** Copy the file to the repo directory, commit with the HTML changes that reference it.

---

## After Every Push

Confirm the push landed by checking the GitHub API:
```bash
curl -s https://api.github.com/repos/markvazquez92/legacy-os/commits/main | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['sha'][:7], d['commit']['message'])"
```

Tell Bear: "Pushed commit [SHA] — live on mylegacycontinues.com in ~2 minutes."
