# ATTRIBUTION GUIDE
## How Purchases Link to Original Ad Campaigns

**Time to understand:** 15 minutes  
**Difficulty:** Conceptual (no implementation needed)  
**Purpose:** Explain how revenue gets attributed to its source

---

## The Attribution Problem

**Without Phase 10:**
```
Facebook Ad Campaign: "Heritage Book Leads"
  Budget Spent: $500
  Form Submissions: 25 leads
  Unknown: How many actually bought? What was the revenue?
  Result: Can't calculate ROI. Can't optimize. Can't scale.
```

**With Phase 10:**
```
Facebook Ad Campaign: "Heritage Book Leads"
  Ad Spend: $500
  Visits: 147 people clicked the ad
  Form Submissions: 25 leads filled out form
  Purchases: 5 people bought the product
  Revenue: $1,745 (5 × $349 average order value)
  ROI: +$1,245 profit (2.5x return on ad spend)
  CPA: $100 cost per acquisition
  ROAS: 3.5x return on ad spend
  Result: CLEAR positive ROI. Scale this campaign to $2,500/month.
```

---

## How Attribution Works: The Complete Journey

### **Step 1: Visitor Clicks Facebook Ad**

When someone clicks your Heritage Book ad on Facebook:

```
Facebook Ad Link: 
  https://mylegacycontinues.com/heritage-book.html
  ?utm_source=facebook
  &utm_medium=cpc
  &utm_campaign=heritage_leads
  &utm_content=creative_001
```

Facebook also appends: `fbclid=ABC123XYZ` (Facebook Click ID)

### **Step 2: GA4 Captures UTM Parameters**

When visitor lands on your site, GA4 JavaScript automatically captures the URL parameters:

```javascript
GA4 receives:
{
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "heritage_leads",
  "utm_content": "creative_001"
}
```

GA4 stores these in the user's session. **Every page this user visits will remember this source information.**

### **Step 3: Visitor Browses Site**

Visitor clicks around, views pages:
- `/heritage-book.html` - GA4 tracks PageView
- Form submission - GA4 tracks form_submission event
- Stripe button click - GA4 tracks product_click event

**GA4 remembers:** `utm_source=facebook`, `utm_campaign=heritage_leads` for this user

### **Step 4: Visitor Clicks "Pay Now"**

Visitor is redirected to Stripe checkout (external site).
- GA4 can't track outside Stripe
- Facebook Pixel also can't track
- But the user's session is stored in GA4

### **Step 5: Visitor Pays on Stripe**

Customer completes payment on Stripe:
- Amount: $349 (Heritage Book $199 + Photo Research $150)
- Email: customer@example.com
- Stripe Payment Intent ID: pi_1234567890
- Status: succeeded

Stripe webhook fires with this event data.

### **Step 6: Your Server Receives Webhook**

Stripe sends webhook to your server with:

```json
{
  "id": "evt_1234567890",
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_1234567890",
      "amount": 34900,
      "currency": "usd",
      "receipt_email": "customer@example.com",
      "customer": "cus_1234567890",
      "metadata": {
        "product": "heritage_book",
        "photo_research_addon": "true"
      }
    }
  }
}
```

### **Step 7: Server Sends Purchase to GA4**

Your server extracts the purchase data and sends to GA4 Measurement Protocol:

```json
{
  "client_id": "cus_1234567890",
  "user_id": "customer@example.com",
  "events": [{
    "name": "purchase",
    "params": {
      "transaction_id": "pi_1234567890",
      "value": 349.00,
      "currency": "USD",
      "items": [
        {
          "item_id": "heritage-book",
          "item_name": "Heritage Culture Book",
          "price": 199.00,
          "quantity": 1
        },
        {
          "item_id": "photo-research-addon",
          "item_name": "Photo Research Add-On",
          "price": 150.00,
          "quantity": 1
        }
      ]
    }
  }]
}
```

**Key:** We don't include `utm_source` or `utm_campaign` in this request. GA4 will use the `user_id` (email) or `client_id` to match this purchase back to the original session.

### **Step 8: GA4 Matches Purchase to Original Session**

GA4 has a powerful matching algorithm:

1. **Match by client_id** (Stripe customer ID)
   - If user was logged in when they visited the ad, GA4 has their persistent ID
   - Links this purchase back to that session

2. **Match by user_id** (email address)
   - More common for e-commerce
   - GA4 looks for sessions where this email was captured
   - Finds the session from Step 2 where `utm_source=facebook`

3. **Attribution window** (default: 30 days)
   - GA4 looks back 30 days for matching sessions
   - Even if user came back later, still gets attributed to original source

### **Step 9: GA4 Attributes Revenue to Source**

GA4 now knows:
```
Purchase: $349
From: customer@example.com
Original source: utm_source=facebook, utm_campaign=heritage_leads
```

GA4 updates its reporting:
```
Campaign: heritage_leads
  Total Revenue: +$349
  Conversions: +1
  Items: Heritage Book + Photo Research
```

---

## UTM Parameters Explained

### **What Are UTM Parameters?**

UTM = Urchin Tracking Module (Google's tracking system)

URL format:
```
https://mylegacycontinues.com/page?utm_source=X&utm_medium=Y&utm_campaign=Z&utm_content=A
```

### **UTM Fields**

| Field | Purpose | Examples |
|-------|---------|----------|
| `utm_source` | Traffic platform | facebook, google, instagram, email, direct |
| `utm_medium` | Traffic type | cpc (cost-per-click), cpm, email, organic, referral |
| `utm_campaign` | Campaign name | heritage_leads, retargeting_jan, summer_sale |
| `utm_content` | Creative identifier | ad_creative_1, email_subject_1, banner_top |

### **Building UTM Links**

**For Facebook Ads:**
```
Base URL: https://mylegacycontinues.com/heritage-book.html

Add UTM parameters:
https://mylegacycontinues.com/heritage-book.html
?utm_source=facebook
&utm_medium=cpc
&utm_campaign=heritage_leads
&utm_content=image_creative_002
```

**For Google Search Ads:**
```
https://mylegacycontinues.com/heritage-book.html
?utm_source=google
&utm_medium=cpc
&utm_campaign=search_branded
&utm_content=google_ads_campaign_001
```

**For Email Campaign:**
```
https://mylegacycontinues.com/pet-tag.html
?utm_source=email
&utm_medium=email
&utm_campaign=weekly_newsletter_april
&utm_content=email_subject_lineup
```

### **Best Practices for UTM Parameters**

1. **Consistent naming**
   - Always use lowercase (avoid PetTag vs. pettag)
   - Use underscores, not spaces (heritage_leads not "heritage leads")
   - Create a UTM naming convention document

2. **Specific campaign names**
   - ❌ Bad: `utm_campaign=april`
   - ✅ Good: `utm_campaign=heritage_leads_facebook_april_2026`

3. **Unique creative IDs**
   - ❌ Bad: `utm_content=ad`
   - ✅ Good: `utm_content=heritage_book_carousel_creative_v2`

4. **Test the URL**
   - Paste the full URL into browser
   - Verify it lands on correct page
   - Verify `?utm_source=...` is still in address bar

---

## How Server-Side Measurement Improves Attribution

### **Problem with Client-Side Only (Before Phase 10)**

```
Customer Flow:
1. Clicks Facebook ad (GA4 tracks utm_source=facebook) ✓
2. Visits heritage-book.html (GA4 tracks page) ✓
3. Clicks "Pay Now" → leaves your site → goes to Stripe ✗
4. Pays on Stripe (GA4 can't track - off-site) ✗
5. Returns to thank-you page (GA4 track) ✓

Result: GA4 sees:
  - People visited from facebook
  - But NOT which ones purchased
  - No revenue data
  - No ROI calculation possible
```

### **Solution with Server-Side Measurement (Phase 10)**

```
Customer Flow:
1. Clicks Facebook ad (GA4 tracks utm_source=facebook) ✓
2. Visits heritage-book.html (GA4 tracks page) ✓
3. Clicks "Pay Now" → goes to Stripe
4. Pays on Stripe (Stripe processes securely) ✓
5. Stripe webhook fires on your server
6. Your server sends purchase event to GA4 ✓
7. GA4 links purchase back to original facebook session ✓
8. Returns to thank-you page (GA4 tracks) ✓

Result: GA4 sees:
  - People visited from facebook: 147
  - People who submitted form: 25
  - People who purchased: 5
  - Revenue from facebook: $1,745
  - Can calculate ROI: 3.5x
```

---

## Multi-Touch Attribution

By default, GA4 uses "Last Click" attribution:
- If user sees 5 ads before buying, only the last one gets credit

**Example:**
```
Day 1: User sees Facebook Heritage Book ad
  → Clicks, visits site, leaves
Day 2: User searches "legacy book" on Google
  → Clicks Google Search ad, visits site, leaves
Day 3: User directly visits site
  → Completes purchase
  
Last-Click Attribution: Google gets 100% credit
  (even though Facebook was the first touchpoint)
```

**Alternative: Multi-Touch Attribution**

GA4 also offers:
- **First Click:** Credit first ad that touched the user
- **Linear:** Split credit equally among all touchpoints
- **Time Decay:** Most recent clicks get more credit
- **Position Based:** First and last clicks get 40% each, middle gets 20%

**For Phase 10 purposes:**
We're using **Last Click** (GA4 default). To use a different model:
1. Go to GA4 Admin → Attribution Settings
2. Choose model
3. Wait 24 hours for data to reprocess

---

## Attribution Matching Scenarios

### **Scenario 1: Returning Customer (Best Case)**

```
Day 1 (Visit):
- Clicks facebook ad (fbclid=ABC123)
- GA4 sets client_id=ABC123
- Fills form with email: john@example.com

Day 10 (Purchase):
- Returns directly to stripe button
- Pays → Stripe creates customer: cus_ABC123
- Server sends purchase to GA4 with:
  client_id: cus_ABC123
  user_id: john@example.com

GA4 matching:
- Matches on user_id (email)
- Finds original session from Day 1
- Attributes $349 to facebook campaign
✓ PERFECT ATTRIBUTION
```

### **Scenario 2: First-Time Visitor (Common)**

```
Day 1 (Visit → Purchase):
- Clicks facebook ad with utm_source=facebook
- Lands on heritage-book.html
- Immediately clicks "Pay Now"
- Pays with email: jane@example.com
- Server sends purchase to GA4 with:
  client_id: cus_XYZ789
  user_id: jane@example.com

GA4 matching:
- No previous session to match on (first visit)
- But same utm_source still in URL
- GA4 can attribute based on session timing
✓ GOOD ATTRIBUTION
```

### **Scenario 3: Incognito/New Browser (Risky)**

```
Day 1 (Visit in incognito):
- Clicks facebook ad
- GA4 sets temporary client_id in incognito mode
- Leaves site

Day 2 (Purchase on normal browser):
- User logs into email: jane@example.com
- Clicks direct link to purchase
- GA4 sets new client_id (different browser)
- Pays → Server sends to GA4

GA4 matching:
- client_id doesn't match (different browser)
- user_id (email) might not have been captured in Day 1
- **May not match attribution**
✓ PARTIAL/NO ATTRIBUTION (limitation of browser privacy)
```

**Solution:** Include email field earlier in funnel (email capture form on landing page)

---

## Metadata: Connecting Stripe to GA4

When Stripe webhook fires, we need to send metadata that helps GA4 understand the context.

### **Metadata Structure**

In `SERVER_SIDE_IMPLEMENTATION.md`, the server extracts:

```javascript
const metadata = paymentIntent.metadata || {};

// Extract from metadata:
const product = metadata.product;              // "heritage_book"
const photo_research = metadata.photo_research_addon;  // "true"
const utm_source = metadata.utm_source;        // "facebook"
const utm_campaign = metadata.utm_campaign;    // "heritage_leads"
```

### **Where Does Metadata Come From?**

**Option 1: Stripe Payment Links (Current)**

When you create a Stripe Payment Link, you can add metadata:

```
Stripe Dashboard → Payment Links → Edit
Add metadata:
  product: heritage_book
  photo_research_addon: true
  utm_source: facebook
  utm_campaign: heritage_leads
  utm_content: email_campaign_1
```

When customer pays via this link, metadata is included in webhook.

**Option 2: Custom Form (Future Enhancement)**

You could build a form that:
1. Captures product selection
2. Includes hidden field with utm_source/utm_campaign (from URL)
3. Submits to Stripe API with metadata

**For now:** Stripe Payment Links are sufficient

---

## Privacy Considerations

### **GDPR/CCPA Compliance**

Attribution tracking involves storing customer emails and usage patterns.

**What you must do:**
1. ✅ Have privacy policy explaining data collection
2. ✅ Get consent before tracking (implied by using site)
3. ✅ Store emails securely
4. ✅ Honor "Do Not Track" requests
5. ✅ Allow users to request data deletion

**What Phase 10 does:**
- GA4 tracks anonymized user IDs
- Facebook Pixel hashes emails (can't be reversed)
- Stripe handles payment data (PCI compliant)
- Your server never stores customer data (only receives it)

**Best Practice:**
- Add privacy policy to footer: "We use analytics to improve our site"
- Be transparent about data usage
- Don't sell customer data to third parties

---

## Testing Attribution

### **Verify UTM Parameters Are Being Captured**

1. Go to your site via a test UTM link:
   ```
   https://mylegacycontinues.com/?utm_source=test&utm_campaign=test_campaign
   ```

2. Open browser DevTools (F12)

3. Go to Console tab

4. Paste:
   ```javascript
   console.log(gtag.get('session_id'));
   console.log(gtag.get('user_id'));
   ```

5. Check Network tab - look for `/mp/collect` requests to GA4
   - Should include `utm_source=test` in params

### **Verify Purchase Attribution Works**

1. Make a test purchase with test card (4242 4242 4242 4242)
2. Check GA4 Real-Time dashboard:
   - Should show purchase event
   - Should show your email as user
3. Wait 24 hours, check Conversions report:
   - Should show: traffic source → revenue

---

## Next Steps

1. **Build UTM structure** for your campaigns
2. **Create UTM links** for each Facebook campaign
3. **Test with Phase 10** webhook running
4. **Monitor GA4** for revenue attribution
5. **Optimize campaigns** based on ROI data

---

**Attribution is now complete. Purchases flow back to their source campaigns.**
