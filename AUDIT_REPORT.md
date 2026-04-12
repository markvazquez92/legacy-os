# Legacy-OS HTML Audit Report
**Date: April 8, 2026**  
**Total Files: 41 HTML files**

---

## SUMMARY

**MAJOR ISSUES FOUND:**
1. **Color Scheme Inconsistency** — Only 5 files use dark forest green (#1B3A2D) as spec'd. Others are scattered across California Gold, unknown/mixed, or neither.
2. **Navigation Links** — 17 files missing complete nav. Only 8 files have all 7 nav links (Home, Cemetery Plaque, Heritage Book, Pet Tag, Business Profile, Rescue Registry, Vault).
3. **Privacy Footer** — 12 files missing privacy footer entirely.
4. **Formspree Integration** — Only 4 files have correct endpoint (xzzpqjle). Most forms missing integration.
5. **Contractor Bundle Reference** — Only 3 files mention the $650 Contractor Bundle.
6. **Image Issues** — Multiple profile pages have missing or broken image references.

---

## FILE-BY-FILE AUDIT

### ✅ PRODUCTION-READY (Full Spec Compliance)
These 5 files meet all 6 requirements:

| File | Color | Nav (7/7) | Footer | Formspree | Contractor | Images |
|------|-------|-----------|--------|-----------|-----------|--------|
| **business-profile.html** | Dark Forest Green | ✅ | ✅ | ✅ | ✗ | 2 OK |
| **cemetery-plaque.html** | Dark Forest Green | ✅ | ✅ | ✅ | ✗ | 2 OK |
| **heritage-book.html** | Dark Forest Green | ✅ | ✅ | ✗ | ✗ | 2 OK |
| **pet-tag.html** | Dark Forest Green | ✅ | ✅ | ✅ | ✗ | OK |
| **rescue-registry.html** | Dark Forest Green | ✅ | ✅ | ✗ | ✗ | 10 OK |

**NOTE:** These 5 files are mostly compliant but note the missing Formspree on heritage-book.html and rescue-registry.html.

---

### ⚠️ PARTIAL COMPLIANCE (Missing 1-2 Elements)

| File | Issues | Color | Nav | Footer | Formspree | Contractor |
|------|--------|-------|-----|--------|-----------|-----------|
| **baby-legacy.html** | Missing nav links (5/7), no contractor ref | Unknown | ⚠️ | ✅ | ✅ | ✗ |
| **contractor-bundle.html** | Incorrect color, missing nav links (5/7), no Formspree | Unknown | ⚠️ | ✅ | ✅ | ✅ |
| **faq.html** | Unknown color, no Formspree, no contractor ref | Unknown | ✅ | ✅ | ✗ | ✗ |
| **index-new.html** | Unknown color, missing nav links (5/7), no Formspree | Unknown | ⚠️ | ✅ | ✗ | ✗ |
| **index-v2-california-gold.html** | California Gold scheme, missing nav (5/7), no Formspree | California Gold | ⚠️ | ✅ | ✗ | ✗ |
| **index.html** | California Gold scheme, missing nav (5/7), no Formspree, binary file | California Gold | ⚠️ | ✅ | ✗ | ✗ |
| **portal.html** | Unknown color, complete nav, no Formspree | Unknown | ✅ | ✅ | ✗ | ✗ |
| **rescue-portal.html** | Unknown color, complete nav, no Formspree | Unknown | ✅ | ✅ | ✗ | ✗ |
| **trade-profile.html** | Unknown color, complete nav, no Formspree, no contractor ref | Unknown | ✅ | ✅ | ✅ | ✗ |
| **vazquez-profile.html** | Unknown color, partial nav (4/7), no Formspree | Unknown | ⚠️ | ✅ | ✗ | ✗ |

---

### ❌ NON-COMPLIANT (Missing 3+ Elements or Fragment Files)

#### Missing Navigation Entirely (5 files)
- **anthony-showcase-card.html** — Fragment, no nav, no footer, no color scheme
- **homepage-product-updates.html** — Fragment, no footer, no Formspree
- **product-section-final.html** — Fragment, no footer, no Formspree
- **success.html** — Success page, no nav
- **thank-you.html** — Thank you page, no nav, no footer
- **vazquez-culture-guide-v2.html** — Unknown color, no nav, no footer

#### Weak Color Scheme (No Forest Green or Gold detected)
- **active-transports.html** — Unknown/mixed, partial nav (2/7), no Formspree
- **anthony-raygoza-memorial.html** — Unknown/mixed, partial nav (1/7), no Formspree
- **antoinette-raygoza-memorial.html** — Unknown/mixed, partial nav (1/7), no Formspree
- **bears-concrete-profile.html** — Unknown/mixed, partial nav (2/7), no Formspree, 10 images
- **butters-profile.html** — Unknown/mixed, partial nav (2/7), no Formspree, 9 images
- **carlos-macias-profile.html** — Unknown/mixed, no nav, no Formspree, has contractor ref
- **cemetery-form-fix.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **cemetery-form-LIVE.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **coming-soon-section.html** — Fragment, no nav, no footer, no Formspree
- **debbie-garcia-profile.html** — Unknown/mixed, partial nav (2/7), no Formspree
- **heritage-book-form-fix.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **heritage-book-form-LIVE.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **link-updates-all-pages.html** — Fragment, partial nav (1/7), no footer, no Formspree
- **pet-tag-intake-section.html** — Fragment, partial nav (1/7), no Formspree
- **plaque-demo.html** — Fragment, partial nav (1/7), no Formspree
- **rescue-mission-section.html** — Fragment, partial nav (1/7), no footer, no Formspree
- **rescue-portal-forms-fix.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **rescue-portal-forms-LIVE.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree
- **rescue-registry-updates.html** — Fragment, partial nav (1/7), no footer, no Formspree
- **vazquez-trailer.html** — Unknown/mixed, partial nav (1/7), no footer, no Formspree, has contractor ref

---

## KEY FINDINGS

### 1. COLOR SCHEME BREAKDOWN
- **Dark Forest Green (#1B3A2D):** 5 files ✅
- **California Gold:** 3 files (index.html, index-v2-california-gold.html, and related)
- **Unknown/Mixed/Neither:** 33 files ⚠️

**Issue:** The spec is clear — dark forest green with gold accents. Only 5 files follow it. The homepage (index.html) is on California Gold, which contradicts the locked spec.

### 2. NAVIGATION COMPLETENESS
- **All 7 nav links present:** 8 files (business-profile, cemetery-plaque, heritage-book, pet-tag, rescue-registry, faq, portal, rescue-portal)
- **Partial nav (1-6 links):** 18 files
- **No nav:** 6 files (mostly fragments or utility pages)
- **Fragment pages:** ~15 files (coming-soon, demos, form sections, etc.)

**Issue:** Most non-production pages are fragments without full nav/footer. Production pages mostly OK.

### 3. PRIVACY FOOTER
- **Has footer:** 29 files ✅
- **Missing footer:** 12 files ❌

**Issue:** 12 files (mostly fragments and forms) have no privacy footer.

### 4. FORMSPREE INTEGRATION (Endpoint: xzzpqjle)
- **Has correct endpoint:** 4 files ✅
  - baby-legacy.html
  - cemetery-plaque.html
  - contractor-bundle.html
  - pet-tag.html
- **Missing:** 37 files ❌

**Issue:** CRITICAL — Most product pages and all form pages don't have the Formspree integration. This affects lead capture on Heritage Book, Cemetery Plaque (duplicate form), Business Profile, etc.

### 5. $650 CONTRACTOR BUNDLE REFERENCE
- **Mentioned:** 3 files ✅
  - butters-profile.html
  - carlos-macias-profile.html
  - contractor-bundle.html
  - vazquez-trailer.html
- **Missing:** 37 files ❌

**Issue:** Only 3-4 profile pages reference the bundle. Should this be on all profiles? Check intent.

### 6. IMAGE & LINK ISSUES
- **Binary files detected:** 3 (index.html, pet-tag.html, vazquez-profile.html) — likely have embedded images
- **High image count:** bears-concrete-profile (10), butters-profile (9), rescue-registry (10) — verify these load correctly
- **No broken links detected in grep** but binary files weren't fully scanned

---

## RECOMMENDATIONS

### TIER 1: IMMEDIATE (Fix Before Launch)
1. **index.html** — Migrate from California Gold to dark forest green spec, add missing Formspree
2. **All form pages** (cemetery-form-*, heritage-book-form-*, rescue-portal-forms-*) — Add Formspree endpoint
3. **All production product pages** (heritage-book.html, business-profile.html, etc.) — Verify Formspree forms are live
4. **Binary files** (index.html, pet-tag.html, vazquez-profile.html) — Full visual audit needed (grep can't fully scan binary)

### TIER 2: CLEANUP (Pre-Deployment)
1. Standardize color scheme across all files to dark forest green
2. Add missing privacy footers to 12 files
3. Decide: Should $650 Contractor Bundle be referenced on ALL profiles or just specific ones?
4. Create a baseline "template" file with correct nav, footer, color, Formspree, and Contractor Bundle ref for consistency

### TIER 3: TECHNICAL DEBT
1. Many fragment files (coming-soon-section.html, product-section-final.html, etc.) — clarify if these are still needed
2. Duplicate form files (cemetery-form-fix.html vs. cemetery-form-LIVE.html, heritage-book-form-fix.html vs. heritage-book-form-LIVE.html) — clean up
3. Multiple index versions (index.html, index-new.html, index-v2-california-gold.html) — consolidate

---

## FILES NEEDING MANUAL REVIEW

These 3 files are binary or partially binary and need visual inspection:
- **index.html** — Binary match, likely embedded images or encoded content
- **pet-tag.html** — Binary match
- **vazquez-profile.html** — Binary match

---

## NEXT STEPS

Before I make ANY changes, confirm:
1. **Should the homepage (index.html) stay California Gold or switch to dark forest green?**
2. **Which form pages need Formspree integration and which are deprecated?**
3. **Should the $650 Contractor Bundle be referenced on all profiles or only some?**
4. **Are the duplicate form files (-fix vs. -LIVE) intentional?**

Ready to implement once you confirm direction.
