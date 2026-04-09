# 🔒 MY LEGACY CONTINUES — FINAL MASTER SPECIFICATION

**Status:** ✅ LOCKED IN — This is the source of truth  
**Version:** FINAL (never changing)  
**Last Updated:** April 8, 2026  
**Purpose:** Single source of truth — everything is locked here

---

## THE 5 LOCKED PRODUCTS (Non-negotiable)

### Product 1: Heritage Culture Book
```
Price:    $199 (one-time, final)
Page:     /products/heritage-book.html
Stripe:   buy.stripe.com/bJe14o2a35pO6csg16fQI02
Logo:     📖
Status:   ✅ LOCKED
```

### Product 2: Cemetery Plaque
```
Price:    $129 (one-time, final)
Page:     /products/cemetery-plaque.html
Stripe:   buy.stripe.com/6oU3cw15Z5pO7gw5msfQI06
Logo:     ⚱️
Status:   ✅ LOCKED
```

### Product 3: Pet Legacy Tag
```
Price:    $24.99 (single) / $49.99 (combo)
Page:     /products/pet-tag.html
Stripe:   buy.stripe.com/eVq7sM9CvdWk9oE4iofQI07
Logo:     🐾
Status:   ✅ LOCKED
```

### Product 4: Business Profile
```
Price:    $79 (one-time, final)
Page:     /products/business-profile.html
Stripe:   buy.stripe.com/4gM14odSLaK8asI9CIfQI03
Logo:     🏢
Status:   ✅ LOCKED
```

### Product 5: Baby Legacy
```
Price:    $79 (one-time, final)
Page:     /products/baby-legacy.html
Stripe:   buy.stripe.com/bJe14o2a35pO6csg16fQI02
Logo:     👶
Status:   ✅ LOCKED
```

---

## OPTIONAL (Not on main homepage, separate section)

### Rescue Registry
```
Price:    $199–$799/month (tiered)
Page:     /portals/rescue-portal.html
Status:   Optional, not locked
```

---

## BRAND COLORS (Locked in style.css)

```
Navy Background:   #1A2B3C  (primary, hero sections, footer)
Navy Dark:         #0F1A26  (hover, depth)
Gold Accent:       #D4A020  (logo, buttons, highlights)
Gold Light:        #E8B840  (hover states)
Cream Text:        #F5F0E8  (light backgrounds, text on dark)
Charcoal Text:     #2C2C2C  (dark text on light backgrounds)
```

**All colors are CSS variables in `:root` section of style.css**  
**No hardcoded hex codes anywhere**

---

## LOGO

```
File:       logo.png (repo root)
Design:     Gold ship with navy text "MY LEGACY CONTINUES"
Size:       2000x2000 PNG (transparent background)
Display:    40px desktop, 32px mobile
Location:   Always in top-left navigation
Status:     ✅ LOCKED
```

---

## FORMS (Single Endpoint)

```
Provider:   Formspree
Endpoint:   formspree.io/f/xzzpqjle
Method:     POST
Used by:    ALL product pages
Status:     ✅ LOCKED
```

**Never use any other form endpoint**

---

## FOLDER STRUCTURE (Organized)

```
/legacy-os/
├── index.html                (HOMEPAGE — 5 products shown)
├── logo.png                  (GOLD SHIP — locked)
├── style.css                 (MASTER STYLESHEET — all colors)
├── faq.html
├── FINAL_SPEC.md            (THIS FILE — single source of truth)
│
├── /products/               (5 product pages)
│   ├── heritage-book.html
│   ├── cemetery-plaque.html
│   ├── pet-tag.html
│   ├── business-profile.html
│   └── baby-legacy.html
│
├── /profiles/               (Customer/family profiles — 5 files)
│   ├── debbie-garcia-profile.html
│   ├── bears-concrete-profile.html
│   ├── butters-profile.html
│   ├── vazquez-profile.html
│   └── carlos-macias-profile.html
│
├── /memorials/              (Memorial pages — 2 files)
│   ├── anthony-raygoza-memorial.html
│   └── antoinette-raygoza-memorial.html
│
├── /portals/                (Portal pages — 3 files)
│   ├── portal.html
│   ├── rescue-registry.html
│   └── rescue-portal.html
│
├── /legal/                  (Legal pages — 1 file)
│   └── privacy.html
│
└── /docs/                   (Documentation — NOT deployed)
    ├── SPEC.md             (locked spec)
    └── [other docs]
```

---

## WHAT MUST NEVER HAPPEN AGAIN

❌ **Wrong prices live**
- Heritage Book is ALWAYS $199
- Cemetery Plaque is ALWAYS $129
- Pet Tag is ALWAYS $24.99/$49.99
- Business Profile is ALWAYS $79
- Baby Legacy is ALWAYS $79

❌ **Duplicate files**
- No *-fix.html, *-old.html, *-v2, *-backup files
- Everything is in /products, /profiles, /memorials, /portals, /legal

❌ **Multiple versions of truth**
- FINAL_SPEC.md is THE source (this file)
- All pages link to this spec if confused
- Style.css has all colors (never hardcode)

❌ **Missing or unclear Stripe links**
- Every product page has its Stripe link
- Every link is verified against this FINAL_SPEC.md

---

## VERIFICATION CHECKLIST (Run this every time before pushing)

```
Homepage (index.html):
  ☐ Shows exactly 5 product cards
  ☐ Heritage Book: $199
  ☐ Cemetery Plaque: $129
  ☐ Pet Tag: $24.99 / $49.99
  ☐ Business Profile: $79
  ☐ Baby Legacy: $79

Product Pages:
  ☐ /products/heritage-book.html exists, has $199, Stripe link, form
  ☐ /products/cemetery-plaque.html exists, has $129, Stripe link, form
  ☐ /products/pet-tag.html exists, has $24.99/$49.99, Stripe link, form
  ☐ /products/business-profile.html exists, has $79, Stripe link, form
  ☐ /products/baby-legacy.html exists, has $79, Stripe link, form

Colors:
  ☐ style.css has :root with navy, gold, cream
  ☐ All pages link to style.css
  ☐ No hardcoded color hex codes

Logo:
  ☐ logo.png exists in repo root
  ☐ Shows on every page in top-left
  ☐ Gold ship with navy text

Forms:
  ☐ All product pages have formspree.io/f/xzzpqjle
  ☐ No other form endpoints anywhere

Folders:
  ☐ /products has exactly 5 files
  ☐ /profiles has exactly 5 files
  ☐ /memorials has exactly 2 files
  ☐ /portals has exactly 3 files
  ☐ No duplicate files anywhere
  ☐ No temp folders or junk
```

---

## IF CONFUSED

1. **Check this file first** (FINAL_SPEC.md)
2. **Don't trust anything else**
3. **If unsure, ask: "Does this match FINAL_SPEC.md?"**

---

## STATUS: 100% LOCKED

Everything is final. Nothing changes. This is the spec.

🚢 **Long Live Your Legacy. Everything is locked in.**
