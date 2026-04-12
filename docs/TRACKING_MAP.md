# Complete Tracking Map
## My Legacy Continues — All Events & Tracking Points

**Generated:** 2026-04-12  
**GA4 Property:** G-XQJ8KPVZX9  
**Facebook Pixel:** 2828165625364437

---

## Executive Summary

| Platform | Status | Events Tracked | Files Affected |
|----------|--------|---|---|
| **Google Analytics 4** | ✅ Live | PageView, FormSubmission, ProductClick, ItemView | 41 pages |
| **Facebook Pixel** | ✅ Live | PageView, ViewContent, Form tracking | 41 pages |
| **Data Attributes** | ✅ Live | data-product on 19 buttons | 13 product files |
| **Form Routing** | ✅ Live | _subject field on 7 forms | 7 form pages |

---

## Event-by-Event Breakdown

### **1. PAGE VIEW EVENTS** (Automatic)

**What happens:** User lands on any page

**Platforms tracking:**
- ✅ Google Analytics 4 (automatic)
- ✅ Facebook Pixel (automatic)

**Event details:**
```
GA4:
  - event_name: "page_view"
  - page_path: "/heritage-book.html"
  - page_title: "Heritage Culture Book"

Facebook:
  - event: "PageView"
  - url: "https://mylegacycontinues.com/heritage-book.html"
```

**Files affected:** All 41 HTML files

**Business value:** Awareness, traffic source

---

### **2. FORM SUBMISSION EVENTS**

**What happens:** User submits a contact/inquiry form

**Platforms tracking:**
- ✅ Google Analytics 4
- ✅ Facebook Pixel

**Event details:**
```
GA4:
  - event_name: "form_submission" (custom - must create in GA4)
  - event_category: "form"
  - event_label: "Heritage Book Inquiry" (from _subject field)
  
Facebook:
  - event: "Lead"
  - event_category: "form"
  - form_type: "heritage_book"
```

**Forms & Routing:**

| File | Form Type | _subject Value | Conversion |
|---|---|---|---|
| heritage-book.html | Product Inquiry | "Heritage Book Inquiry" | ✅ High |
| pet-tag.html | Product Inquiry | "Pet Tag Order" | ✅ High |
| business-profile.html | Product Inquiry | "Business Profile Inquiry" | ✅ High |
| cemetery-plaque.html | Product Inquiry | "Cemetery Plaque Inquiry" | ✅ Medium |
| contact.html | General Contact | "General Contact" | ✅ Medium |
| baby-legacy.html | Product Inquiry | "Baby Legacy Inquiry" | ✅ High |
| rescue-intake.html | Dog Intake | "Rescue Dog Intake" | ✅ Special |

**Code location:**
```javascript
// In all form pages:
<input type="hidden" name="_subject" value="Heritage Book Inquiry" />

// JavaScript tracking:
form.addEventListener('submit', function(e) {
  const subject = form.querySelector('input[name="_subject"]').value;
  gtag('event', 'form_submission', {
    'event_label': subject
  });
  fbq('track', 'Lead', {
    'content_name': subject
  });
});
```

**Formspree routing:** All forms → `f/xzzpqjle` → Email to Bear

**Business value:** Lead generation, form quality, conversion rate

---

### **3. PRODUCT CLICK EVENTS** (Stripe Buttons)

**What happens:** User clicks a "Pay Now" or product checkout button

**Platforms tracking:**
- ✅ Google Analytics 4 (custom event)
- ✅ Facebook Pixel (ViewContent event)

**Event details:**
```
GA4:
  - event_name: "view_item" (ecommerce)
  - items[0].item_id: "heritage-book"
  - items[0].item_name: "Heritage Culture Book"
  - items[0].item_category: "legacy_product"

Facebook:
  - event: "ViewContent"
  - content_name: "heritage-book"
  - content_type: "product"
```

**All Stripe Buttons (19 total):**

| Product | File | Button Count | data-product | Conversion |
|---|---|---|---|---|
| **Heritage Book** | heritage-book.html | 3 | heritage-book | ✅✅ Highest |
| **Pet Tag** | pet-tag.html | 2 | pet-tag | ✅ High |
| **Business Profile** | business-profile.html | 2 | business-profile | ✅ High |
| **Cemetery Plaque** | cemetery-plaque.html | 2 | cemetery-plaque | ✅ Medium |
| **Baby Legacy** | baby-legacy.html | 2 | baby-legacy | ✅ High |
| **Morning Memories** | morning-memories.html | 1 | morning-memories | ✅ Medium |
| **Photo Research** | heritage-book.html | 1 | photo-research-addon | ✅ Upsell |
| **Oral History** | heritage-book.html | 1 | oral-history-addon | ✅ Upsell |
| **Trade Profile** | trade-profile.html | 1 | trade-profile | ✅ Special |
| **Alzheimer Book** | alzheimer-memory-book.html | 1 | alzheimer-memory-book | ✅ Niche |
| **Contractor Bundle** | contractor-bundle.html | 1 | contractor-bundle | ✅ Bundle |
| **Legacy Bundle** | legacy-bundle.html | 1 | legacy-bundle | ✅ Bundle |
| **Vázquez Trailer** | vazquez-trailer.html | 1 | vazquez-trailer | ✅ Special |

**Code location:**
```html
<!-- Example: Heritage Book main button -->
<a href="https://buy.stripe.com/bJe14o2a35pO6csg16fQI02" 
   class="btn btn-primary" 
   data-product="heritage-book">
   Pay Now — $199
</a>

<!-- JavaScript tracking in all pages: -->
<script>
  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', function() {
      const productName = this.getAttribute('data-product');
      
      // Google Analytics
      gtag('event', 'view_item', {
        'items': [{
          'item_id': productName,
          'item_name': productName.replace(/[-_]/g, ' ').toUpperCase(),
          'item_category': 'legacy_product'
        }]
      });
      
      // Facebook Pixel
      fbq('track', 'ViewContent', {
        'content_name': productName,
        'content_type': 'product'
      });
    });
  });
</script>
```

**Business value:** Purchase intent, product interest, conversion funnel

---

### **4. HERITAGE BOOK SPECIFIC TRACKING**

**What happens:** User shows interest in Heritage Book specifically

**Trigger:** Click Heritage Book Stripe button (any of the 3 on heritage-book.html)

**Platforms tracking:**
- ✅ Google Analytics 4 (custom event - must create as conversion)
- ✅ Facebook Pixel (implicit in ViewContent)

**Event details:**
```
GA4:
  - event_name: "heritage_book_order" (custom - must create)
  - items[0].item_id: "heritage-book"
  - items[0].item_name: "Heritage Culture Book"
  
Facebook:
  - event: "ViewContent"
  - content_name: "heritage-book" (main product)
```

**Code location:** Same as Product Click (above), but data-product="heritage-book" specifically

**Business value:** Highest-value product tracking, ROI on Heritage Book ads

---

## Spanish Site Tracking

**Status:** ✅ All tracking active on Spanish pages

| Spanish Page | English Equivalent | GA4 | Facebook Pixel | Events |
|---|---|---|---|---|
| /es/index.html | /index.html | ✅ G-XQJ8KPVZX9 | ✅ 2828165625364437 | PageView |
| /es/heritage-book.html | /heritage-book.html | ✅ G-XQJ8KPVZX9 | ✅ 2828165625364437 | PageView, ProductClick, FormSubmit |
| /es/pet-tag.html | /pet-tag.html | ✅ G-XQJ8KPVZX9 | ✅ 2828165625364437 | PageView, ProductClick, FormSubmit |
| /es/about.html | /about.html | ✅ G-XQJ8KPVZX9 | ✅ 2828165625364437 | PageView |
| /es/contact.html | /contact.html | ✅ G-XQJ8KPVZX9 | ✅ 2828165625364437 | PageView, FormSubmit |

**Note:** Spanish pages track identically to English pages. Geographic data in GA4 will show Spanish-speaking traffic.

---

## User Journey Heat Map

```
AWARENESS
├─ Land on /index.html
│  ├─ PageView event
│  └─ Pixel: PageView
│
INTEREST
├─ Click on product link → /heritage-book.html
│  ├─ PageView event
│  └─ Pixel: PageView
│
├─ Read product info
│  └─ (no event - passive)
│
CONSIDERATION
├─ Click "See Examples" carousel
│  └─ (no event - internal navigation)
│
├─ Click "Pay Now" button
│  ├─ ProductClick event
│  ├─ HeritagBookOrder event
│  └─ Pixel: ViewContent
│
├─ Redirected to Stripe
│  └─ (GA4 loses tracking - external site)
│
CONVERSION
├─ Complete Stripe payment
│  └─ (Tracked via webhook - Phase 10)
│
├─ Redirected to /thank-you.html
│  ├─ PageView event
│  └─ Optional: PurchaseComplete event
│
POST-PURCHASE
└─ Retargeting via Facebook (because we have ViewContent + Lead events)
```

---

## Conversion Funnel

```
Traffic → Product Interest → Form/Button Click → Stripe Checkout → Revenue

100 visitors
  ↓ (75% get to product page)
75 on /heritage-book.html
  ├─ PageView event
  ├─ Pixel sees 75 PageViews
  ├─ GA4 sees 75 PageViews
  │
  ↓ (30% click a button or form)
23 click "Pay Now" OR "Contact"
  ├─ ProductClick event (button clickers)
  ├─ FormSubmission event (form fillers)
  ├─ Pixel sees 23 ViewContent + Lead events
  ├─ GA4 sees 23 form_submission events
  │
  ↓ (40% complete Stripe payment)
9 complete payment
  ├─ Stripe webhook fires Purchase event
  ├─ GA4 receives purchase data
  ├─ Revenue = $1,791 (9 × $199)
  │
  ↓ (Retargeting)
14 abandoned (didn't buy but clicked button)
  └─ Facebook shows retargeting ads (because ViewContent event fired)
     └─ 2-3 of these convert later = extra $400-600 revenue
```

---

## For Paid Ads Setup

### Facebook Ads Manager Integration

```
Campaign Objective: "Leads"
  ↓
Conversion Event: "Lead"
  ↓
Where tracked: form_submission event (all forms)
  ↓
Optimization: "Optimize for lead value"
  ↓
Audience: People likely to submit forms
```

### Google Ads Integration

```
Conversion Action: "form_submission"
  ↓
Where tracked: GA4 event
  ↓
Import to Google Ads: g-xqj8kpvzx9-form_submission
  ↓
Optimize for: Highest conversion rate
  ↓
Bidding: "Target CPA" ($15-25 per lead)
```

---

## Event Naming Convention

**All custom events follow pattern:**
```
{action}_{object}_{context}

Examples:
- form_submission (fill contact form)
- product_click (click Stripe button)
- heritage_book_order (buy heritage book specifically)
```

---

## Verification Checklist

- [ ] GA4 Property active: G-XQJ8KPVZX9
- [ ] Facebook Pixel active: 2828165625364437
- [ ] 19 Stripe buttons have data-product attributes
- [ ] 7 forms have _subject hidden field
- [ ] All 41 pages load GA4 + Facebook scripts
- [ ] Form submission script present on all pages
- [ ] Button click script present on all pages
- [ ] GA4 Real-Time showing PageView events
- [ ] Facebook Pixel Helper showing PageView events
- [ ] Test form submission fires event
- [ ] Test button click fires ViewContent event

---

## Next Steps

1. **Create GA4 conversion events** (see GA4_CONVERSION_EVENTS_SETUP.md)
2. **Test all tracking** in real-time dashboards
3. **Generate conversion data** with test interactions
4. **Set up Stripe webhook** for purchase tracking
5. **Launch Facebook Lead Ads** targeting form submissions
6. **Monitor conversion rates** and optimize

---

**Questions about tracking?** Reference this document and GA4 setup guide.
