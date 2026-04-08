# Legacy OS Cleanup Checklist
**Audit Date:** April 8, 2026  
**Status:** Ready for execution (no pushes yet)

---

## YOUR AUDIT ANSWERS

### 1. Pages Actually Linked from index.html ✅
```
✓ business-profile.html
✓ cemetery-plaque.html  
✓ heritage-book.html
✓ pet-tag.html
✓ portal.html
✓ privacy.html
✓ rescue-registry.html
✓ (index.html self-reference)
```

**Note:** index.html itself is binary and uses California Gold scheme (not the dark forest green spec from other pages).

---

### 2. Product Pages with Working Stripe Buttons ✅
| Product | Page | Stripe Link | Status |
|---------|------|-------------|--------|
| Heritage Book | heritage-book.html | buy.stripe.com/bJe14o2a35pO6csg16fQI02 | ✅ LIVE |
| Cemetery Plaque | cemetery-plaque.html | buy.stripe.com/6oU3cw15Z5pO7gw5msfQI06 | ✅ LIVE |
| Pet Tag | pet-tag.html | buy.stripe.com/eVq7sM9CvdWk9oE4iofQI07 | ✅ LIVE |
| Business Profile | business-profile.html | buy.stripe.com/4gM14odSLaK8asI9CIfQI03 | ✅ LIVE |
| Baby Legacy | baby-legacy.html | buy.stripe.com/bJe14o2a35pO6csg16fQI02 | ✅ LIVE |

All 5 have working, live Stripe payment links.

---

### 3. Pages Linked But Don't Exist 🔴
```
BROKEN LINK 1:
  Source: antoinette-raygoza-memorial.html
  Links to: debbie-mahony-profile.html
  Status: ❌ DOES NOT EXIST
  Fix: Change to → debbie-garcia-profile.html

BROKEN LINK 2:
  Source: plaque-demo.html
  Links to: raygoza-memorial.html
  Status: ❌ DOES NOT EXIST
  Fix: Change to → anthony-raygoza-memorial.html
```

---

### 4. Formspree Endpoint Status
| File | Endpoint | Status | Notes |
|------|----------|--------|-------|
| cemetery-form-LIVE.html | f/xqo1rkea | ✅ Valid | Keep this |
| cemetery-form-fix.html | f/YOUR_FORMSPREE_ID | ❌ Placeholder | Delete |
| heritage-book-form-LIVE.html | f/xqo1rkea | ✅ Valid | Keep this |
| heritage-book-form-fix.html | f/YOUR_FORMSPREE_ID | ❌ Placeholder | Delete |
| rescue-portal-forms-LIVE.html | f/xqo1rkea | ✅ Valid | Keep this |
| rescue-portal-forms-fix.html | f/{INTAKE/FOSTER/ADOPTION} | ❌ Placeholder | Delete |

**Current endpoint in use:** `xqo1rkea` (not `xzzpqjle` as your task list mentioned)

**Action:** Delete all `-fix.html` files. Keep `-LIVE.html` files. Verify `xqo1rkea` is the correct endpoint or update all LIVE forms if using `xzzpqjle`.

---

### 5. Deborah Mahoney vs. Debbie Garcia
```
FINDING: No deborah-mahoney-profile.html exists

Current situation:
  ✓ debbie-garcia-profile.html EXISTS
    - Linked from: anthony-raygoza-memorial.html
    - Has content: Yes
  
  ❌ debbie-mahony-profile.html DOES NOT EXIST
    - Only referenced in: antoinette-raygoza-memorial.html
    - Issue: Typo? ("mahony" vs "mahoney") or different person?

RECOMMENDATION:
  - If Debbie Garcia and Deborah Mahoney are the same: Fix antoinette memorial to link to debbie-garcia-profile.html
  - If they're different: Create debbie-mahoney-profile.html (or debbie-mahony-profile.html to match the link)
```

---

## STEP 1: FILES TO DELETE (CONFIRMED) ✂️

### A. Duplicate Form Versions (3 files)
```
[ ] cemetery-form-fix.html        → Has placeholder ID, LIVE version exists
[ ] heritage-book-form-fix.html   → Has placeholder ID, LIVE version exists
[ ] rescue-portal-forms-fix.html  → Has placeholder IDs, LIVE version exists
```

### B. Duplicate Index Versions (2 files)
```
[ ] index-new.html                → Unused variant
[ ] index-v2-california-gold.html → Unused variant
```

### C. Orphaned Section/Demo Files (7 files)
```
[ ] coming-soon-section.html      → Not linked from index.html
[ ] rescue-mission-section.html   → Not linked from index.html
[ ] rescue-registry-updates.html  → Not linked from index.html
[ ] homepage-product-updates.html → Not linked from index.html
[ ] product-section-final.html    → Not linked from index.html
[ ] link-updates-all-pages.html   → Not linked from index.html
[ ] pet-tag-intake-section.html   → Not linked from index.html
```

### D. Orphaned Showcase/Demo Cards (3 files)
```
[ ] anthony-showcase-card.html    → Not linked, has broken link
[ ] plaque-demo.html              → Not linked, has broken link
[ ] trade-profile.html            → Not linked from index.html
```

### E. Skills Folder (entire 156KB directory)
```
[ ] /skills/                      → 14 subfolders of internal tools
```

### F. Verify Before Deleting (5 files)
These are orphaned but have substantial content. Confirm they're not needed:
```
[ ] bears-concrete-profile.html   → 19KB profile page
[ ] active-transports.html        → 14KB page
[ ] contractor-bundle.html        → Product page reference
[ ] mcneal-construction-profile.html → 25KB profile
[ ] butters-profile.html          → 8MB profile (huge file!)
[ ] carlos-macias-profile.html    → 206KB profile
```

---

## STEP 2: FIX BEFORE DELETING (2 changes)

### A. Fix antoinette-raygoza-memorial.html
```html
CURRENT:
  <a href="/debbie-mahony-profile.html" ...>

CHANGE TO:
  <a href="/debbie-garcia-profile.html" ...>
```

### B. Fix plaque-demo.html (if keeping it)
```html
CURRENT:
  <a href="raygoza-memorial.html" ...>

CHANGE TO:
  <a href="anthony-raygoza-memorial.html" ...>
```

---

## STEP 3: MOBILE NAVIGATION FIX 🔧

### Current Issue:
- Button exists: `<button class="nav-toggle" id="navToggle" ...>`
- CSS exists for styling
- **JavaScript handler is MISSING** ❌

### To Fix (add to index.html `<script>` section):
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('nav');
  
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
});
```

### Add to CSS (for mobile):
```css
@media (max-width: 768px) {
  nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
  }
  
  nav.nav-open {
    display: block;
  }
}
```

---

## DELETE SUMMARY

**Total files to remove:**
- 3 duplicate form versions
- 2 duplicate index versions
- 10 orphaned demo/section files
- 1 directory (/skills)
- **Potential:** 6 orphaned profile pages (requires verification)

**Safe to delete immediately: 15 items**

---

## NEXT QUESTIONS FOR YOU

Before I execute the cleanup:

1. **Formspree endpoint:** Is `xqo1rkea` correct, or should it be `xzzpqjle`?
2. **Debbie Garcia/Mahoney:** Same person or different? (Affects antoinette memorial fix)
3. **Orphaned profiles:** Keep or delete?
   - bears-concrete-profile.html
   - active-transports.html
   - contractor-bundle.html
   - mcneal-construction-profile.html
   - butters-profile.html (8MB!)
   - carlos-macias-profile.html
4. **plaque-demo.html:** Keep as a demo, or delete?
5. **Mobile nav:** Want me to add the JS + CSS fix?

Ready to execute once you confirm. No pushes until you approve. ✅

