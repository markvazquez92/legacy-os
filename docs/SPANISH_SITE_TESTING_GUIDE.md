# Spanish Site Testing & Optimization Guide
## /es/ Subdirectory Quality Assurance

**Created:** 2026-04-12  
**Status:** Ready for QA testing  
**Pages:** 5 Spanish pages + 9 English pages with language switcher

---

## Testing Checklist

### **1. Spanish Pages Load Correctly**

**Pages to test:**
```
https://mylegacycontinues.com/es/
https://mylegacycontinues.com/es/heritage-book.html
https://mylegacycontinues.com/es/pet-tag.html
https://mylegacycontinues.com/es/about.html
https://mylegacycontinues.com/es/contact.html
```

**For each page, check:**

- [ ] Page loads without errors (no 404 or blank page)
- [ ] All text is in Spanish (no English remaining)
- [ ] Page title is in Spanish
  - Example: "Mi Legado Continúa — Tu Historia Nunca Muere"
- [ ] Meta description is in Spanish
  - Right-click → View Page Source → search for `<meta name="description"`
- [ ] Images load correctly (logo, backgrounds, etc.)
- [ ] Navigation menu links work
  - Click on "Inicio" (Home) → should go to /es/
  - Click on "Contacto" (Contact) → should go to /es/contact.html
- [ ] Footer links load correctly
- [ ] No console errors (F12 → Console tab)

**Test on:** Desktop Chrome, Firefox, Safari if possible

---

### **2. Language Switcher Works Both Directions**

**Test English → Spanish:**

1. Go to https://mylegacycontinues.com/index.html (English homepage)
2. Look for "English | Español" in navigation (top right area)
3. Click on "Español"
4. Should redirect to https://mylegacycontinues.com/es/
5. Verify: Page is now in Spanish

**Test Spanish → English:**

1. Go to https://mylegacycontinues.com/es/ (Spanish homepage)
2. Look for "English | Español" switcher
3. Click on "English"
4. Should redirect to https://mylegacycontinues.com/index.html
5. Verify: Page is now in English

**Test on multiple pages:**

- [ ] /index.html ↔ /es/ (Homepage)
- [ ] /heritage-book.html ↔ /es/heritage-book.html (Product page)
- [ ] /pet-tag.html ↔ /es/pet-tag.html (Product page)
- [ ] /about.html ↔ /es/about.html (About page)
- [ ] /contact.html ↔ /es/contact.html (Contact page)

**Verify:** Language switcher appears on all these pages (not just the 5 Spanish pages)

---

### **3. Mobile Responsiveness**

**Test Spanish pages on mobile:**

1. Go to https://mylegacycontinues.com/es/
2. Open browser DevTools (F12)
3. Click phone icon (toggle device toolbar)
4. Select preset: **iPhone 12** or **iPhone SE**
5. Test landscape and portrait orientation

**Check:**
- [ ] Navigation is readable on mobile
- [ ] Text is not cut off
- [ ] Images scale properly
- [ ] Language switcher is accessible (not hidden)
- [ ] Forms are usable on mobile
- [ ] Buttons are clickable (not too small)
- [ ] Layout stacks vertically (not squeezed)

**Test at these breakpoints:**
```
Mobile: 375px width (iPhone SE)
Mobile: 390px width (iPhone 12)
Mobile: 412px width (Google Pixel)
Tablet: 768px width (iPad)
Desktop: 1024px+ width
```

**For each breakpoint, verify:** Spanish pages look as good as English pages

---

### **4. Forms Submit Correctly in Spanish**

**Test Spanish contact form:**

1. Go to https://mylegacycontinues.com/es/contact.html
2. Fill out form with test data:
   - **Nombre:** Test User (or any name)
   - **Correo Electrónico:** your-test@example.com
   - **Teléfono:** 555-1234
   - **Mensaje:** Test message from Spanish contact form
3. Click **"Enviar Mensaje"** (Submit button - should be in Spanish)
4. You should be redirected to https://mylegacycontinues.com/thank-you.html

**Verify:**
- [ ] Form accepts input without errors
- [ ] Submit button is labeled in Spanish ("Enviar")
- [ ] Form validation works (try submitting empty - should show error)
- [ ] Thank you page loads after submission
- [ ] No errors in browser console (F12)

**Check Formspree email:**
- [ ] Email arrives in Bear's inbox
- [ ] Subject line shows Spanish form type (e.g., "Mensaje de Contacto")
- [ ] Form data is readable

**Test Spanish Heritage Book form (if exists):**

1. Go to https://mylegacycontinues.com/es/heritage-book.html
2. Scroll to form section
3. Fill out form with test data
4. Click submit button
5. Verify: Redirect to thank-you.html and email arrives with Spanish subject

---

### **5. hreflang Tags Are Correct**

**Check hreflang tags in HTML:**

1. Go to https://mylegacycontinues.com/index.html (English)
2. Right-click → **View Page Source** (or Ctrl+U)
3. Search for `hreflang` (Ctrl+F)
4. You should see:
   ```html
   <link rel="alternate" hreflang="es" href="https://mylegacycontinues.com/es/">
   ```

**Check Spanish page hreflang:**

1. Go to https://mylegacycontinues.com/es/
2. Right-click → **View Page Source**
3. Search for `hreflang`
4. You should see:
   ```html
   <link rel="alternate" hreflang="en" href="https://mylegacycontinues.com/index.html">
   ```

**Verify on all pages:**
- [ ] English index.html → Spanish /es/
- [ ] English heritage-book.html → Spanish /es/heritage-book.html
- [ ] English pet-tag.html → Spanish /es/pet-tag.html
- [ ] English about.html → Spanish /es/about.html
- [ ] English contact.html → Spanish /es/contact.html
- [ ] Spanish pages have reverse hreflang to English

**Why this matters:** Google Search Console uses hreflang to show correct version to right audience

---

### **6. Analytics & Pixel Tracking on Spanish Pages**

**Verify GA4 is tracking Spanish pages:**

1. Go to https://mylegacycontinues.com/es/
2. Open DevTools (F12) → Network tab
3. Refresh page
4. Search for `googletagmanager` in network requests
5. Should show request with GA4 ID: `G-XQJ8KPVZX9`

**Verify Facebook Pixel is tracking:**

1. Go to https://mylegacycontinues.com/es/
2. Install **Facebook Pixel Helper** extension if not installed
3. Refresh page
4. Facebook Pixel Helper should show:
   - ✅ Pixel ID: 2828165625364437
   - ✅ PageView event

**Test form tracking:**

1. Go to /es/contact.html
2. Fill and submit form
3. Check Pixel Helper: Should show "Lead" event (or similar)
4. Check GA4 Real-Time dashboard: Should show form_submission event

---

### **7. Translation Quality Check**

**Spot-check key translations:**

| English | Spanish | Correct? |
|---------|---------|----------|
| "Heritage Culture Book" | "Libro de Cultura y Herencia" | [ ] |
| "Pet Tag" | "Etiqueta de Mascota" | [ ] |
| "My Legacy Continues" | "Mi Legado Continúa" | [ ] |
| "Start Your Legacy" | "Comienza Tu Legado" | [ ] |
| "Contact Us" | "Contáctanos" | [ ] |

**Read through Spanish pages:**
- [ ] Grammar and spelling look correct
- [ ] Tone is warm and authentic (not robotic translation)
- [ ] Product names are consistent across pages
- [ ] Form labels are in proper Spanish

---

### **8. Cross-Browser Testing**

**Test Spanish site in multiple browsers:**

**Desktop:**
- [ ] Chrome (Windows)
- [ ] Firefox (Windows)
- [ ] Edge (Windows)
- [ ] Safari (Mac, if available)

**Mobile:**
- [ ] Chrome mobile
- [ ] Safari iOS
- [ ] Firefox mobile

**For each browser, verify:**
- [ ] Spanish pages load correctly
- [ ] Language switcher works
- [ ] Forms submit successfully
- [ ] No console errors
- [ ] Responsive design intact

---

## Performance Optimization

### **Spanish Page Load Speed**

1. Go to https://mylegacycontinues.com/es/index.html
2. Open DevTools (F12) → Network tab
3. Check total load time
4. Compare with English version

**Acceptable metrics:**
- Page load: < 3 seconds
- Total assets: < 2 MB
- Images: Optimized (not oversized)

### **Content Delivery**

- [ ] Logo loads from correct path (`../logo.png`)
- [ ] All images load successfully
- [ ] No broken image links
- [ ] CSS loads (no unstyled content flash)

---

## Common Issues & Solutions

### **Issue: Spanish page shows 404**

**Solution:**
1. Check file exists: `/es/index.html` in repository
2. Check GitHub Pages is deployed (might take 1-2 min after commit)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito window

### **Issue: Language switcher missing on Spanish pages**

**Solution:**
1. Verify switcher code exists in HTML
2. Check if CSS is hiding it (inspect element with F12)
3. Try different browser (might be CSS issue)

### **Issue: Form submit goes to English thank you page**

**Solution:**
1. Check form action points to correct Formspree endpoint
2. Verify _subject field is in Spanish
3. Check thank-you.html redirect is working

### **Issue: hreflang tags missing**

**Solution:**
1. Right-click → View Page Source
2. Search for entire `<head>` section
3. If missing, check if GitHub commit included hreflang
4. Might need to rebuild GitHub Pages (wait 1-2 min)

---

## Sign-Off Checklist

When all tests pass, you can verify with:

```
✅ All 5 Spanish pages load correctly
✅ Language switcher works both directions (English ↔ Spanish)
✅ Mobile responsive on all breakpoints
✅ Forms submit correctly with Spanish labels
✅ hreflang tags present and correct
✅ GA4 and Facebook Pixel tracking Spanish pages
✅ Translation quality acceptable
✅ No console errors or broken links
✅ Cross-browser testing complete
✅ Performance acceptable (< 3s load time)
```

---

## Reporting Results

After testing, provide report with:

1. **Pages tested:** List the 5 Spanish pages
2. **Issues found:** Any problems discovered
3. **Resolution:** How issues were fixed
4. **Approval:** Sign-off that Spanish site is production-ready

---

## Next Steps

1. **Complete all testing** above
2. **Fix any issues** found during testing
3. **Verify** Spanish site is working perfectly
4. **Monitor** Spanish traffic in GA4 (should see different geographic data)
5. **A/B test** Spanish vs English conversion rates
6. **Optimize** based on usage patterns

---

**Need help?** Reference this document for specific test steps.
