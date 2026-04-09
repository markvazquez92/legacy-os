# SYSTEM INTEGRITY AUDIT — MYLEGACYCONTINUES.COM
**Date: April 8, 2026**

---

## CRITICAL ISSUES FOUND & STATUS

### 🔴 CRITICAL ERRORS (Must fix before pushing)

#### 1. Baby Legacy Stripe Link — WRONG PRICE
- **File**: `baby-legacy.html` (line 178)
- **Current Link**: `https://buy.stripe.com/bJe14o2a35pO6csg16fQI02`
- **Problem**: This is the **Heritage Book $199 link**, not a $79 link
- **Impact**: Customers will be charged $199 instead of $79
- **Status**: ⏳ WAITING FOR CORRECT STRIPE LINK

#### 2. No Terms of Service
- **Status**: ✅ FIXED — Created `legal/terms-of-service.html`

#### 3. Homepage Footer Missing Legal Links
- **Status**: ✅ FIXED — Added Privacy, Terms, Contact links to footer

---

## VERIFICATION CHECKLIST

### Product Pages & Prices
```
✅ heritage-book.html → $199 on page ↔️ Stripe checkout: buy.stripe.com/bJe14o2a35pO6csg16fQI02
✅ cemetery-plaque.html → $129 on page ↔️ Stripe checkout: buy.stripe.com/6oU3cw15Z5pO7gw5msfQI06
✅ business-profile.html → $79 on page ↔️ Stripe checkout: buy.stripe.com/4gM14odSLaK8asI9CIfQI03
❌ baby-legacy.html → $79 on page ↔️ Stripe checkout: buy.stripe.com/bJe14o2a35pO6csg16fQI02 (WRONG!)
⚠️ pet-tag.html → $24.99 / $49.99 → NEEDS MANUAL VERIFICATION
```

### Legal & Footer Links
```
✅ legal/privacy.html exists (HTTP 200)
✅ legal/terms-of-service.html exists (NEW)
✅ contact.html exists (HTTP 200)
✅ Homepage footer: Privacy | Terms | Contact (UPDATED)
```

### Forms & Endpoints
```
⚠️ baby-legacy.html form: https://formspree.io/f/xzzpqjle (needs verification)
⚠️ cemetery-plaque.html form: https://formspree.io/f/xzzpqjle (needs verification)
⚠️ heritage-book.html form: https://formspree.io/f/xzzpqjle (needs verification)
⚠️ business-profile.html form: https://formspree.io/f/xzzpqjle (needs verification)
```

### Mobile & Features
```
✅ Hamburger nav (.nav-toggle) exists in CSS
⚠️ Mobile nav functionality: NEEDS TESTING
⚠️ Spanish toggle (.nav-lang): NEEDS VERIFICATION (cosmetic or functional?)
```

---

## STRIPE LINKS INVENTORY

Found these Stripe checkout links in the repo:
- `bJe14o2a35pO6csg16fQI02` → Heritage Book ($199) + Baby Legacy (WRONG)
- `6oU3cw15Z5pO7gw5msfQI06` → Cemetery Plaque ($129)
- `4gM14odSLaK8asI9CIfQI03` → Business Profile ($79)
- `dRm3cwdSL05u58o6qwfQI01` → Contractor Bundle ($129)
- `eVq7sM9CvdWk9oE4iofQI07` → Pet Tag (one of the price points)

**MISSING**: Correct Stripe link for Baby Legacy ($79)

---

## NEXT ACTIONS (BLOCKER)

**To proceed, I need from you:**

1. **What is the correct Stripe checkout link for Baby Legacy ($79)?**
   - Option A: Use an existing link? (Which one?)
   - Option B: Create a new one in Stripe dashboard and provide the link

Once you provide this, I will:
1. Fix the Baby Legacy Stripe link
2. Test all forms end-to-end
3. Verify Pet Tag pricing
4. Test mobile nav and Spanish toggle
5. Run final verification before pushing

---

## WHAT'S READY

✅ All product pages exist  
✅ Terms of Service created and styled  
✅ Footer links updated with all three legal pages  
✅ Contact page accessible  
✅ Privacy Policy accessible  
✅ 4 out of 5 product prices verified  
✅ Mobile nav infrastructure in place  

---

## FINAL VERIFICATION BEFORE PUSH

Once the Baby Legacy Stripe link is fixed:

### Link Audit
- [ ] Homepage → all product links work (HTTP 200)
- [ ] Product pages → Stripe buttons functional
- [ ] Footer → Privacy (HTTP 200)
- [ ] Footer → Terms (HTTP 200)
- [ ] Footer → Contact (HTTP 200)

### Price Consistency
- [ ] All 5 products: page price = Stripe checkout price

### Forms
- [ ] Business Profile form → email arrives
- [ ] Cemetery Plaque form → email arrives
- [ ] Heritage Book form → email arrives
- [ ] Baby Legacy form → email arrives

### Mobile
- [ ] Hamburger nav opens/closes
- [ ] All buttons 44px+ (tappable)
- [ ] No overlapping text on small screens

### Spanish
- [ ] If enabled: prices match across languages
- [ ] If disabled: toggle removed

---

**STATUS: AWAITING BABY LEGACY STRIPE LINK**
