# MY LEGACY CONTINUES — DESIGN & PRODUCT SPECIFICATION

**Status:** ✅ LOCKED IN  
**Last Updated:** April 8, 2026  
**Version:** 1.0 (FINAL)

---

## BRAND IDENTITY

### Logo
- **File:** `logo.png` (repo root)
- **Design:** Gold ship with navy text reading "MY LEGACY CONTINUES"
- **Background:** Transparent PNG
- **Usage:** 40px in navigation (desktop), 32px on mobile
- **Everywhere:** Displays in top-left corner of every page

### Colors (LOCKED — Do Not Change)
```
Navy Background:  #1A2B3C (backgrounds, footers, dark sections)
Navy Deep:        #0F1A26 (deeper navy for hover states, depth)
Gold Accent:      #D4A020 (logo, buttons, borders, highlights)
Gold Light:       #E8B840 (hover states, secondary accents)
Cream Text:       #F5F0E8 (text on dark backgrounds)
Charcoal Text:    #2C2C2C (text on light backgrounds)
```

### Typography
- **Headings:** DM Serif Display (serif, elegant)
- **Body/UI:** Jost (sans-serif, clean)
- **Display:** Cormorant (serif, special emphasis)
- **Font Loading:** Google Fonts with preconnect

### Design System
- **Master Stylesheet:** `style.css` (repo root)
- **All colors defined as CSS variables** in `:root`
- **Every page links to style.css** for consistency
- **Single source of truth:** Edit style.css, all pages update

---

## PRODUCTS & PRICING

### Product 1: Heritage Culture Book
- **Price:** $199 (one-time)
- **Description:** Professional genealogy research + custom family narrative book
- **Deliverable:** Physical book shipped + permanent digital profile
- **Stripe Link:** `buy.stripe.com/bJe14o2a35pO6csg16fQI02`
- **Page:** `/products/heritage-book.html`

### Product 2: Cemetery Plaque
- **Price:** $129 (one-time)
- **Description:** Personalized memorial bronze plaque, engraved
- **Deliverable:** Physical plaque shipped to cemetery
- **Stripe Link:** `buy.stripe.com/6oU3cw15Z5pO7gw5msfQI06`
- **Page:** `/products/cemetery-plaque.html`

### Product 3: Pet Legacy Tag
- **Price:** $24.99 (single) / $49.99 (combo)
- **Description:** Custom QR code profile for pets, behavioral history, medical records
- **Deliverable:** QR-enabled tag + permanent digital memorial
- **Stripe Link:** `buy.stripe.com/eVq7sM9CvdWk9oE4iofQI07`
- **Page:** `/products/pet-tag.html`

### Product 4: Business Profile
- **Price:** $79 (one-time) / $19/mo (subscription)
- **Description:** Company heritage, team legacy, permanent online presence
- **Deliverable:** Custom profile + QR codes
- **Stripe Link:** `buy.stripe.com/4gM14odSLaK8asI9CIfQI03`
- **Page:** `/products/business-profile.html`

### Product 5: Baby Legacy
- **Price:** $79 (one-time)
- **Description:** Birth announcement + family legacy profile
- **Deliverable:** Custom announcement + permanent digital record
- **Stripe Link:** `buy.stripe.com/bJe14o2a35pO6csg16fQI02`
- **Page:** `/products/baby-legacy.html`

### Product 6: Rescue Registry (Optional)
- **Price:** $199–$799/month (tiered by dog count)
- **Description:** Complete rescue management system
- **Deliverable:** Behavioral tracking, medical records, foster network, memorial profiles
- **Page:** `/portals/rescue-portal.html`

---

## FORMS & DATA COLLECTION

### Form Endpoint (SINGLE SOURCE)
- **All forms submit to:** `formspree.io/f/xzzpqjle`
- **Method:** POST
- **No other endpoints permitted**

### Form Fields Standard
- Name (required)
- Email (required)
- Message (required)
- Phone (optional)
- Company (optional, business forms only)

### Form Pages
- Heritage Book inquiry form
- Cemetery Plaque design form
- Pet Tag profile form
- Business Profile setup form
- Baby Legacy announcement form
- Rescue Portal inquiry form

---

## SUPPLIERS & INTEGRATIONS

### Payment Processing
- **Provider:** Stripe
- **Currency:** USD
- **All product Stripe links locked** in SPEC.md (above)

### Physical Products
- **Cemetery Plaques:** Our Tributes
- **Pet Tags:** QRCodeChimp + Hexapaws (integrated)
- **Heritage Books:** Blurb (print-on-demand)

### QR Code Generation
- **Provider:** QRCodeChimp
- **Use:** Pet tags, business profiles, legacy profiles

### Form Management
- **Provider:** Formspree
- **Endpoint:** `formspree.io/f/xzzpqjle`
- **No other form endpoints used**

---

## FOLDER STRUCTURE (ORGANIZED)

```
/legacy-os/
├── index.html                  (MAIN HOMEPAGE)
├── logo.png                    (GOLD SHIP LOGO — only version)
├── style.css                   (MASTER STYLESHEET)
├── faq.html                    (FAQ page)
│
├── /products/                  (All product pages)
│   ├── heritage-book.html
│   ├── cemetery-plaque.html
│   ├── pet-tag.html
│   ├── business-profile.html
│   └── baby-legacy.html
│
├── /profiles/                  (Customer & family profiles)
│   ├── debbie-garcia-profile.html
│   ├── bears-concrete-profile.html
│   ├── butters-profile.html
│   ├── vazquez-profile.html
│   └── carlos-macias-profile.html
│
├── /memorials/                 (Memorial pages)
│   ├── anthony-raygoza-memorial.html
│   └── antoinette-raygoza-memorial.html
│
├── /portals/                   (Internal/management pages)
│   ├── portal.html             (Legacy Vault)
│   ├── rescue-registry.html
│   └── rescue-portal.html
│
├── /legal/                     (Legal & compliance)
│   └── privacy.html
│
└── /docs/                      (Documentation — NOT deployed)
    ├── SPEC.md                 (THIS FILE — single source of truth)
    ├── PRODUCTS.md             (Product details)
    ├── SUPPLIERS.md            (Supplier contact info)
    └── FORMSPREE.md            (Form endpoint reference)
```

---

## PAGES & THEIR LOCATIONS

### LIVE PUBLIC PAGES
- ✅ `index.html` — Homepage (links to all products)
- ✅ `/products/*` — All 5 product pages
- ✅ `/profiles/*` — Customer profile examples
- ✅ `/memorials/*` — Memorial tribute pages
- ✅ `/portals/*` — Portal pages (Rescue Registry, etc.)
- ✅ `/legal/privacy.html` — Privacy policy
- ✅ `faq.html` — Frequently Asked Questions

### NOT DEPLOYED
- ❌ `/docs/*` — Internal documentation (not linked from any page)
- ❌ Old files deleted (no more -fix, -old, -v2, -backup files)
- ❌ `/skills/` folder (deleted entirely)

---

## WHAT'S LOCKED IN (NON-NEGOTIABLE)

✅ **Colors:** Navy #1A2B3C, Gold #D4A020, Cream #F5F0E8 ONLY  
✅ **Logo:** Gold ship, always visible in navigation  
✅ **Products:** 5 main products with locked Stripe links  
✅ **Forms:** Formspree endpoint `xzzpqjle` (single source)  
✅ **Suppliers:** Our Tributes, QRCodeChimp, Hexapaws, Blurb, Stripe  
✅ **Structure:** Organized folders, no duplicates, no old files  

---

## HOW TO USE THIS SPEC

### For Adding New Pages
1. Create HTML file in appropriate folder (`/products`, `/profiles`, etc.)
2. Link to `../style.css` (relative path from subfolder)
3. Link to `../logo.png` (relative path from subfolder)
4. Use only color variables from style.css `:root`
5. Update index.html to link to new page

### For Updating Products
1. Edit product price or Stripe link → update SPEC.md
2. Update product page HTML
3. Update index.html product card if needed

### For Changing Colors
1. Edit `style.css` `:root` section ONLY
2. All pages inherit change automatically
3. Never hardcode colors (#1A2B3C, #D4A020, #F5F0E8)

### For Changing Forms
1. Edit form endpoint in SPEC.md
2. Update all form pages to use new endpoint
3. Test with test@example.com before deploying

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 8, 2026 | Initial lock-in: colors, products, forms, structure, suppliers |

---

## LOCKED IN & READY

This specification is **100% locked in**. Every product, color, form, supplier, and folder structure is documented. No more chaos. No more guessing.

**Single source of truth:** This file.  
**Golden Rule:** When in doubt, check SPEC.md.

🚢 Long Live Your Legacy.
