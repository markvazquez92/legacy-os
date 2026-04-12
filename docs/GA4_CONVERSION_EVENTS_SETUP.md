# GA4 Conversion Events Setup Guide
## My Legacy Continues — Revenue Tracking

**Created:** 2026-04-12  
**GA4 Property:** G-XQJ8KPVZX9  
**Status:** Ready for conversion event configuration

---

## Overview

Your GA4 property is actively collecting data (page views, form submissions, button clicks). Now we need to **mark specific actions as "conversions"** so GA4 tracks their business value.

**Why this matters:**
- Conversions = revenue-generating actions
- GA4 shows conversion rates in dashboards
- Needed for Facebook Lead Ads optimization
- Enables ROI tracking on ad spend

---

## GA4 Conversion Events to Create

### **Event 1: Form Submission** (All Forms)
**Event Name:** `form_submission`  
**Trigger:** Any form submission  
**Value:** Track form type via `event_label`

**Where it fires in code:**
- All 7 forms (heritage-book.html, pet-tag.html, etc.)
- JavaScript: `gtag('event', 'form_submission', { event_label: formType })`

**Steps to create in GA4:**
1. Go to **Google Analytics** → **GA4 Property (G-XQJ8KPVZX9)**
2. Left menu: **Admin** → **Conversions**
3. Click **"Create conversion event"**
4. **Event name:** `form_submission`
5. **Description:** "All form submissions (heritage book, pet tag, contact, etc.)"
6. Click **Create**

---

### **Event 2: Product Click** (Stripe Buttons)
**Event Name:** `product_click`  
**Trigger:** Click on any Stripe payment button  
**Value:** Product name via `content_name`

**Where it fires in code:**
- 19 Stripe buttons with `data-product` attributes
- JavaScript: `gtag('event', 'view_item', { items: [{ item_name: productName }] })`

**Steps to create in GA4:**
1. Go to **Google Analytics** → **Admin** → **Conversions**
2. Click **"Create conversion event"**
3. **Event name:** `product_click`
4. **Description:** "Stripe payment button clicks (heritage book, pet tag, business profile, etc.)"
5. Click **Create**

---

### **Event 3: Heritage Book Order** (Specific Product)
**Event Name:** `heritage_book_order`  
**Trigger:** Click on Heritage Book Stripe button  
**Value:** Specific product tracking for ROI analysis

**Where it fires in code:**
- heritage-book.html: Main product button + upsell buttons
- JavaScript: Triggers when `data-product="heritage-book"` button clicked

**Steps to create in GA4:**
1. Go to **Google Analytics** → **Admin** → **Conversions**
2. Click **"Create conversion event"**
3. **Event name:** `heritage_book_order`
4. **Description:** "Heritage Culture Book product interest (form fill + checkout click)"
5. Click **Create**

---

### **Event 4: Newsletter Signup** (Optional - Future)
**Event Name:** `newsletter_signup`  
**Trigger:** Email signup form submission  
**Value:** Lead generation metric

**Note:** Currently not tracking, but available if you add newsletter signup form.

---

## How Conversion Events Map to Revenue

```
User Journey → Event Fires → GA4 Tracks → Shows as Conversion

1. Visit /heritage-book.html
   ↓
   PageView event

2. Scroll and see product benefits
   ↓
   (No new event - just viewing)

3. Click "Pay Now — $199"
   ↓
   product_click event
   + heritage_book_order event
   ↓
   GA4 marks as potential conversion

4. Redirect to Stripe checkout
   ↓
   (External site - GA4 can't track directly)

5. Complete payment in Stripe
   ↓
   (Setup via webhook - Phase 10)

6. Redirect to /thank-you.html
   ↓
   PageView event + optional "purchase" event
   ↓
   GA4 attributes revenue to user
```

---

## Verification Steps

### After Creating Conversion Events:

1. **Go to GA4 Dashboard**
   - URL: https://analytics.google.com
   - Select property: G-XQJ8KPVZX9

2. **Left menu:** Reports → Conversions
   - You should see empty reports (no data yet)

3. **Generate test data:**
   - Visit https://mylegacycontinues.com/heritage-book.html
   - Fill out contact form OR click "Pay Now" button
   - Wait 30-60 seconds
   - Refresh GA4 dashboard

4. **Check Real-Time Report:**
   - Left menu: Reports → Real-time
   - You should see your activity appear
   - Should show form_submission OR product_click event

---

## Event Data Map

| Event Name | Fires When | Code Location | Business Meaning |
|---|---|---|---|
| `form_submission` | Form submitted | heritage-book.html, contact.html, etc. | Lead inquiry |
| `product_click` | Stripe button clicked | All product pages | Purchase intent |
| `heritage_book_order` | Heritage Book button clicked | heritage-book.html | High-value lead |
| `page_view` | Page loads | All pages (automatic) | Awareness |
| `view_item` | Product page viewed | All product pages | Interest |

---

## Facebook Lead Ads Connection

Once conversion events are created in GA4, you can:

1. **In Facebook Ads Manager:**
   - Create "Lead Ad" campaigns
   - Set conversion objective to "Leads"
   - Connect to GA4 (via Google Analytics integration)
   - Tell Facebook: "Optimize for `form_submission` event"

2. **Result:**
   - Facebook shows ads to people likely to fill forms
   - Tracks ad cost → form submissions
   - Measures ROI per product

---

## Troubleshooting

### Events not appearing in GA4?

1. **Wait 24-48 hours** - GA4 can take time to process events
2. **Check Real-Time Report** - See events as they happen
3. **Verify Measurement ID** - Should be `G-XQJ8KPVZX9` (not placeholder)
4. **Check browser console** (F12) - Any JavaScript errors?
5. **Disable ad blocker** - Some block analytics scripts

### Can't find Conversions menu?

1. GA4 has two report types: **Standard** vs **Advanced**
2. Make sure you're in **GA4 property**, not Universal Analytics
3. Conversions are under **Admin** → **Events** → **Conversion events**

---

## Next Steps

1. **Create the 3 conversion events** using steps above
2. **Generate test data** on your website
3. **Verify events appear** in GA4 Real-Time
4. **Report back** with event names confirmed in GA4
5. **Move to Phase 10:** Stripe webhook for purchase tracking

---

**Questions?** Check GA4 documentation: support.google.com/analytics
