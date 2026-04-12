# GA4 MEASUREMENT PROTOCOL
## Server-Side Event Tracking for GA4

**Time to complete:** 20 minutes  
**Difficulty:** Easy (configuration, no coding)  
**Requirement:** GA4 property access

---

## What is GA4 Measurement Protocol?

Normally, GA4 tracks events from the website via JavaScript. Measurement Protocol lets your server send events directly to GA4.

```
Website → JavaScript → GA4

Server → Measurement Protocol → GA4
```

**Why we need it:** Stripe checkout happens outside our website (on Stripe's servers), so we can't track the purchase with JavaScript. We need to send the purchase event from our server after Stripe confirms payment.

---

## Step 1: Create GA4 API Secret

### **1.1 Go to GA4 Settings**

1. Go to https://analytics.google.com
2. Select your property (G-XQJ8KPVZX9 - My Legacy Continues)
3. Click **"Admin"** (bottom left)
4. Go to **"Data API"** → **"Measurement Protocol"**

### **1.2 Create New API Secret**

1. Click **"Create"** button
2. Fill in:
   - **Name:** `Stripe Webhook Server` or `Purchase Events`
   - **Description:** (optional) "Server receives Stripe purchase events and sends to GA4"
3. Click **"Create"**
4. You'll see a new API secret (long string starting with `ghN...`)
5. **Copy and save this secret** - you need it in server configuration

---

## Step 2: Enable Measurement Protocol API

### **2.1 Verify API is Enabled**

1. In GA4, go to **Admin** → **Data API**
2. You should see:
   - Measurement Protocol API: ✅ Enabled
   - Core Reporting API: ✅ Enabled
   - Real Time Reporting API: ✅ Enabled

If Measurement Protocol is grayed out:
1. Click on it
2. Click **"Enable"**
3. Confirm

---

## Step 3: Update Server Configuration

### **3.1 Add GA4 API Secret to `.env`**

In your webhook server, update `.env`:

```
GA4_MEASUREMENT_ID=G-XQJ8KPVZX9
GA4_API_SECRET=your_api_secret_here_ghN...
```

Replace `your_api_secret_here_ghN...` with the secret you just created.

---

## Step 4: Understand Purchase Event Format

### **4.1 What GA4 Receives**

When your server sends a purchase event to GA4, it looks like:

```json
{
  "client_id": "customer_stripe_id_or_email",
  "user_id": "customer@example.com",
  "events": [
    {
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
        ],
        "utm_source": "facebook",
        "utm_medium": "cpc",
        "utm_campaign": "heritage_leads"
      }
    }
  ]
}
```

### **4.2 Key Parameters**

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `client_id` | GA4 user ID | Stripe customer ID or email |
| `user_id` | Email for matching | `customer@example.com` |
| `transaction_id` | Unique purchase ID | Stripe payment intent ID |
| `value` | Total purchase amount | 349.00 |
| `currency` | Currency code | USD |
| `items` | Products purchased | Array of items with prices |
| `utm_source` | Traffic source | facebook, google, direct |
| `utm_campaign` | Campaign name | heritage_leads |

---

## Step 5: GA4 Measurement Protocol Endpoint

### **5.1 API Endpoint URL**

```
https://www.google-analytics.com/mp/collect
?measurement_id=G-XQJ8KPVZX9
&api_secret=your_api_secret_here
```

### **5.2 Example Request**

```bash
curl -X POST https://www.google-analytics.com/mp/collect \
  -d '{
    "measurement_id": "G-XQJ8KPVZX9",
    "api_secret": "your_api_secret",
    "client_id": "cus_1234567890",
    "user_id": "customer@example.com",
    "events": [{
      "name": "purchase",
      "params": {
        "transaction_id": "pi_1234567890",
        "value": 349.00,
        "currency": "USD",
        "items": [{
          "item_id": "heritage-book",
          "item_name": "Heritage Culture Book",
          "price": 199.00
        }]
      }
    }]
  }'
```

---

## Step 6: Verify GA4 is Receiving Events

### **6.1 Check GA4 Real-Time Dashboard**

1. Go to GA4 (https://analytics.google.com)
2. Select your property
3. Go to **"Reports"** → **"Real-time"**
4. Send a test purchase to your server
5. You should see:
   - **Events**: Count of purchase events
   - **Active users**: Should show your test user
   - **Event name**: "purchase" should appear

### **6.2 Check Conversions Report**

1. Go to **"Reports"** → **"Conversions"**
2. Wait 24-48 hours for first data
3. Should see:
   - **Conversions**: Count of purchases
   - **Conversion rate**: % of visitors who purchased

---

## Step 7: Enable eCommerce Features

### **7.1 Enable Enhanced eCommerce**

For best reporting, enable eCommerce:

1. GA4 → **Admin** → **Data streams**
2. Click your web stream
3. Scroll to **"Enhanced measurement"**
4. Toggle **"Purchase events"**: ON
5. Save

This enables special eCommerce reports:
- Product performance
- Purchase behavior
- Revenue by product

---

## Common Issues

### **"Invalid measurement ID"**
- Make sure `GA4_MEASUREMENT_ID` is exactly: `G-XQJ8KPVZX9`
- Check no extra spaces

### **"Invalid api_secret"**
- Double-check the secret you copied from GA4
- Secrets start with `ghN...`
- Make sure it's not truncated

### **"Validation failed: user_id too long"**
- Keep `user_id` short (use just email, not full name + email)
- Maximum 256 characters

### **"No events appearing in GA4"**
- Wait 5-10 minutes - GA4 has latency
- Check Real-Time dashboard (not regular reports)
- Verify webhook is actually being triggered
- Check server logs for errors

---

## Testing Checklist

- [ ] Created GA4 API secret
- [ ] Copied secret to server `.env` file
- [ ] Measurement Protocol API is enabled in GA4
- [ ] Enhanced eCommerce is enabled
- [ ] Deployed server with updated GA4 credentials
- [ ] Sent test purchase event
- [ ] Verified event appears in GA4 Real-Time dashboard
- [ ] Waited 24 hours for conversion data to populate
- [ ] Checked "Conversions" report in GA4

---

## Next Steps

1. ✅ **Complete:** GA4 API setup (this doc)
2. → **Next:** `FACEBOOK_CONVERSION_API_SETUP.md` - Set up Facebook token

---

**GA4 is now receiving purchase events from your server.**
