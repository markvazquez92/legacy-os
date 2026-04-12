# Paid Ads Conversion Setup
## Facebook & Google Ads Integration

**Created:** 2026-04-12  
**Status:** Ready for ads launch  
**Platforms:** Facebook Ads Manager, Google Ads

---

## Event Names for Ads Setup

### **Primary Conversion Events**

Use these event names when setting up campaigns:

#### **Event 1: Form Submission** (All Forms)
```
Event Name: form_submission
Platforms: GA4, Facebook Pixel
Trigger: Any contact/inquiry form submission
Use Case: Lead generation campaigns
Facebook Objective: "Leads"
```

**What counts:**
- Heritage Book inquiry form
- Pet Tag order form
- Business Profile inquiry form
- Cemetery Plaque inquiry form
- Baby Legacy inquiry form
- Contact form
- Rescue dog intake form

**Example Facebook campaign:**
```
Campaign Name: "My Legacy - Lead Generation"
Objective: Leads
Conversion Event: Lead (tied to form_submission)
Target Audience: Age 45+, interest in family history
Budget: $500/month
CPA Target: $15-25 per form submission
```

---

#### **Event 2: Product Click** (Stripe Buttons)
```
Event Name: view_item OR product_click
Platforms: GA4, Facebook Pixel
Trigger: Click on any Stripe payment button
Use Case: Purchase intent retargeting
Facebook Objective: "Conversions" or "Traffic"
```

**What counts:**
- Click "Pay Now" on heritage-book.html
- Click "Pay Now" on pet-tag.html
- Click "Pay Now" on business-profile.html
- Click "Pay Now" on cemetery-plaque.html
- Click upsell buttons (Photo Research, Oral History, etc.)

**Example Facebook campaign:**
```
Campaign Name: "My Legacy - Retarget Product Clickers"
Objective: Conversions (or Traffic)
Conversion Event: ViewContent (product_click)
Audience: People who clicked product but didn't buy
Budget: $200/month
Bidding: "Target CPA" or "Optimize for Conversions"
Ad: "Complete Your Heritage Book Order - Limited Discount"
```

---

#### **Event 3: Heritage Book Specific**
```
Event Name: heritage_book_order
Platforms: GA4 (custom conversion - must create)
Trigger: Click Heritage Book Stripe button
Use Case: High-value product targeting
Facebook Objective: "Conversions"
```

**Why track separately:**
- Highest revenue per order ($199)
- Target affluent audience
- Different customer profile than Pet Tags

**Example Google Ad:**
```
Campaign: "Heritage Book - High Intent"
Conversion: heritage_book_order (GA4)
Audience: Age 50+, search "family genealogy"
Budget: $400/month
Bidding: "Target CPA" $20-30
Landing Page: /heritage-book.html
```

---

## Facebook Ads Manager Setup

### **Step 1: Install Facebook Pixel on Website**
✅ **Already done:** Pixel 2828165625364437 is live on all 41 pages

### **Step 2: Create Conversion Event in Ads Manager**

**For form submissions:**

1. Go to https://facebook.com/ads/manager
2. Click **"Events Manager"** (left sidebar under "Setup")
3. Select your Pixel (2828165625364437)
4. Click **"Create Event"**
5. Choose **"Conversion"**
6. Fill in:
   - **Event name:** `Lead` or `FormSubmission`
   - **Category:** Select "Contact"
   - **Value:** Leave empty (or set to average form value: $50)
7. Click **"Create"**

**For product clicks:**

1. In Events Manager, click **"Create Event"** again
2. Choose **"Conversion"**
3. Fill in:
   - **Event name:** `AddToCart` or `ViewProduct`
   - **Category:** "Ecommerce"
   - **Value:** Average product price ($100-200)
4. Click **"Create"**

---

### **Step 3: Create Lead Generation Campaign**

1. Go to https://facebook.com/ads/manager
2. Click **"Create"** (blue button)
3. Select **"Leads"** as objective
4. Configure:
   - **Campaign Name:** "My Legacy Continues - Lead Generation"
   - **Daily Budget:** $20-50 per day
   - **Duration:** Ongoing
5. Click **"Next"**

**Ad Set Level:**
- **Audience:** Create custom audience
  - Age: 45-75 (primary demographic)
  - Interests: Family history, genealogy, legacy preservation
  - Location: US, Canada, Mexico
- **Placements:** Automatic (Facebook, Instagram, Audience Network)
- **Optimization:** Optimize for "Leads"

**Ad Creative:**
- **Images:** Use heritage book photos or family moments
- **Copy:** "Preserve Your Family's Legacy - Start Your Heritage Book Today"
- **CTA:** "Learn More" or "Get Started"
- **Landing Page:** /heritage-book.html

---

### **Step 4: Measure Results**

**In Ads Manager:**
1. Click on campaign
2. Go to **"Breakdown"** tab
3. Select **"By Conversion"**
4. You should see:
   - Cost per lead (CPA)
   - Total leads
   - Conversion rate
   - Return on ad spend (ROAS)

**Expected metrics (after optimization):**
- CPA: $15-25 per form submission
- Conversion rate: 3-5% (clicks → form submits)
- ROAS: $4-8 revenue per $1 ad spend (if 20%+ buy)

---

## Google Ads Setup

### **Step 1: Link GA4 to Google Ads**

1. Go to https://analytics.google.com
2. Select GA4 property (G-XQJ8KPVZX9)
3. Go to **Admin** → **Google Ads Linking**
4. Click **"Create link"**
5. Select your Google Ads account
6. Select conversion events to share: `form_submission`, `view_item`
7. Click **"Link"**

---

### **Step 2: Create Search Campaign**

1. Go to https://ads.google.com
2. Click **"Create campaign"** (blue button)
3. Select **"Search"** as campaign type
4. Configure:
   - **Campaign name:** "My Legacy - Search"
   - **Goal:** "Leads" or "Sales"
   - **Bidding strategy:** "Target CPA"
   - **Target CPA:** $20
5. Click **"Continue"**

**Keywords to bid on:**
```
Heritage book
Family genealogy
Preserve family history
Business founder biography
Pet memorial
Legacy preservation
Family story writing service
Genealogy research services
```

**Ad copy:**
```
Headline: "Professional Heritage Books"
Description: "Preserve Your Family's Complete Story - $199 One-Time"
URL: https://mylegacycontinues.com/heritage-book.html
```

---

### **Step 3: Track Conversions**

1. Go to Google Ads **"Tools"** → **"Conversions"**
2. You should see imported conversions from GA4:
   - `form_submission`
   - `view_item`
   - `heritage_book_order`
3. Select which conversions to optimize for
4. Set **"Conversion Value"** if available

---

## Conversion Value Setup (Advanced)

### **For Google Ads ROI tracking:**

```
Conversion: form_submission
Value: $50 (average form inquiry worth)

Conversion: view_item
Value: $150 (average product value)

Conversion: heritage_book_order
Value: $199 (actual product price)
```

This lets Google show you actual ROI, not just lead count.

---

## Paid Ads Strategy & Budget

### **Phase 1: Test & Learn** (Month 1)
```
Budget: $1,000/month
Breakdown:
  - Facebook Lead Ads: $500
  - Google Search: $300
  - Retargeting: $200

Goals:
  - Test audience targeting
  - Optimize ad creative
  - Track conversion quality
  - Calculate acceptable CPA
```

### **Phase 2: Scale Winning Campaigns** (Month 2+)
```
Budget: $2,500-5,000/month (based on Phase 1 results)
Breakdown:
  - Heritage Book (high-value): 50% ($1,500)
  - Pet Tags (volume): 25% ($750)
  - Retargeting (high ROI): 25% ($750)

Goals:
  - Scale ads with positive ROI
  - Maintain CPA target
  - Test new audiences
  - Build custom audiences for future
```

---

## Key Metrics to Monitor

### **Daily:**
- Cost per lead (CPA)
- Conversion rate (clicks → form)
- Ad spend vs budget

### **Weekly:**
- Total leads by product
- Lead quality (form fill rate)
- Click-through rate (CTR)

### **Monthly:**
- Cost per acquisition (divide ad spend by orders)
- Return on ad spend (ROAS)
- Lifetime customer value
- Payback period

### **Success Targets:**
```
CPA target: $15-25
Conversion rate: 3-5%
ROAS: 4:1 (4x return on ad spend)
Payback period: 2-4 weeks
```

---

## Audience Targeting

### **Heritage Book (High Value)**
- Age: 50-75
- Interests: Family history, genealogy, memoir writing
- Household income: $100k+
- Education: College+
- Life events: Empty nesters, retirees

### **Pet Tag (Mid Value)**
- Age: 35-65
- Interests: Pet care, pet memorial, pet products
- Pet owners specifically
- Income: $75k+

### **General Awareness**
- Age: 35-75
- Interests: Home, family, aging parents, legacy
- Locations: US, Canada, Mexico
- Broader targeting for top-funnel awareness

---

## Retargeting Strategy

### **Pixel-based Retargeting**

Since Facebook Pixel is tracking all visitors, you can retarget:

**Audience 1: Product Viewers** (viewed heritage-book.html)
- Saw product but didn't submit
- Ad message: "Complete Your Heritage Book - Special Discount"
- Offer: "Free shipping on heritage books this month"

**Audience 2: Form Abandoners** (started form, didn't submit)
- Ad message: "Your family story deserves to be heard"
- Offer: "We'll help you finish - free consultation"

**Audience 3: Website Visitors** (visited any page)
- Ad message: "See how others preserved their legacy"
- Format: "Social proof" style ads with testimonials

---

## Common Mistakes to Avoid

1. **❌ Setting CPA too low**
   - If CPA target is too aggressive, ads stop showing
   - Start with $25-30, optimize down over time

2. **❌ Wrong audience targeting**
   - Avoid too broad (age 18+, all interests)
   - Be specific: 55+, genealogy interests, affluent

3. **❌ Not tracking conversions**
   - Verify conversion events are firing before launching ads
   - Test with small budget first ($100)

4. **❌ Poor landing pages**
   - Don't send Heritage Book ads to homepage
   - Send to /heritage-book.html (match ad message)

5. **❌ Bad ad creative**
   - Use real customer testimonials, not stock photos
   - Highlight "no subscription" benefit
   - Show before/after of completed legacy products

---

## Pre-Launch Checklist

Before spending money on ads:

- [ ] GA4 conversion events created (form_submission, etc.)
- [ ] Facebook Pixel verified firing on website
- [ ] Test form submission triggers conversion event
- [ ] Test Stripe button click triggers event
- [ ] Google Ads linked to GA4
- [ ] Landing pages ready (/heritage-book.html, etc.)
- [ ] Thank-you page set up for form submitters
- [ ] Ad creative approved
- [ ] Budget approved
- [ ] Team agrees on success metrics

---

## Launch Checklist

When launching paid ads:

- [ ] Create small test campaign ($100-200 budget)
- [ ] Monitor for 3-5 days before scaling
- [ ] Track: CPA, conversion rate, cost per click
- [ ] After data confirms, increase budget 25-50%
- [ ] Monitor daily for first week
- [ ] Optimize based on performance

---

## Quick Reference: Event Names

| Event | GA4 Name | Facebook Name | Use In Ads |
|-------|----------|---------------|-----------|
| Form Submit | `form_submission` | `Lead` | Lead campaigns |
| Product Click | `view_item` | `ViewContent` | Retargeting |
| Heritage Book | `heritage_book_order` | `AddToCart` | High-value only |
| Page View | `page_view` | `PageView` | Awareness |

---

## Support Resources

- **GA4 Documentation:** support.google.com/analytics
- **Facebook Ads Manager Help:** facebook.com/business/help
- **Google Ads Help:** support.google.com/google-ads
- **Tracking Map:** See TRACKING_MAP.md in docs folder

---

**Ready to launch ads? Start with the Pre-Launch Checklist above!**
