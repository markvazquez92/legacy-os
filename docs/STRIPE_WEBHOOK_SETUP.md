# STRIPE WEBHOOK SETUP
## Receiving Purchase Events from Stripe

**Time to complete:** 10-15 minutes  
**Difficulty:** Easy  
**Requirements:** Stripe account access

---

## What is a Webhook?

A webhook is a way for Stripe to notify your server when something happens (like a customer paying).

```
Normal flow (without webhook):
  You: "Did anyone pay?"
  Stripe: "Check my dashboard"
  You: Manually check dashboard each day
  Problem: Slow, error-prone, outdated

Webhook flow:
  Customer pays → Stripe: "Hey, payment happened!"
                        ↓
                   Your server receives event automatically
                        ↓
                   Your code processes the event
                        ↓
                   Send purchase data to GA4 + Facebook
  
  Result: Real-time, automatic, no manual checking
```

---

## Step 1: Configure Stripe Webhook

### **1.1 Go to Stripe Dashboard**

1. Log in to https://dashboard.stripe.com
2. Click **"Developers"** (left sidebar)
3. Click **"Webhooks"** (under "Developers")

### **1.2 Create New Webhook Endpoint**

1. Click **"Add endpoint"** (or **"Add an endpoint to get started"**)
2. Fill in:
   - **Endpoint URL:** `https://your-domain.com/api/stripe-webhook`
     - Replace `your-domain.com` with your actual domain
     - Example: `https://legacy-os.vercel.app/api/stripe-webhook`
     - Or: `https://mylegacycontinues.com/api/stripe-webhook`
   - **Version:** Leave as default (latest)
3. Click **"Add endpoint"**

**Note:** Your server doesn't need to exist yet. You'll create it in Phase 10 Part 2.

### **1.3 Select Events to Listen For**

After creating endpoint, you'll see "Select events to listen to"

Select these events:

```
✅ payment_intent.succeeded     (customer paid successfully)
✅ payment_intent.payment_failed (payment failed - track refunds)
✅ charge.refunded              (customer requested refund)
```

**Step-by-step:**
1. Uncheck "Select all events"
2. Expand **"Payment intents"**
   - Check: `payment_intent.succeeded`
   - Check: `payment_intent.payment_failed`
3. Expand **"Charges"**
   - Check: `charge.refunded`
4. Click **"Update endpoint"**

---

## Step 2: Get Webhook Secret

**Important:** You'll need the webhook signing secret to verify webhook authenticity.

### **2.1 Find Webhook Secret**

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Find your endpoint in the list
3. Click on it to open details
4. Scroll down to **"Signing secret"**
5. Click **"Reveal"**
6. Copy the secret (starts with `whsec_`)
7. **Save this somewhere safe** - you'll need it in Phase 10 Part 2

Example format:
```
whsec_test_abc123xyz...
(In production, it will start with whsec_live_...)
```

---

## Step 3: Understand Webhook Events

### **3.1 What Data Stripe Sends**

When a customer completes payment, Stripe sends something like:

```json
{
  "id": "evt_1234567890",
  "object": "event",
  "type": "payment_intent.succeeded",
  "created": 1681234567,
  "data": {
    "object": {
      "id": "pi_1234567890",
      "object": "payment_intent",
      "amount": 34900,  # in cents: $349.00
      "amount_received": 34900,
      "currency": "usd",
      "customer": "cus_1234567890",
      "description": "Heritage Book + Photo Research",
      "metadata": {
        "product": "heritage_book",
        "add_ons": "photo_research",
        "customer_email": "customer@example.com",
        "customer_name": "John Doe"
      },
      "receipt_email": "customer@example.com",
      "status": "succeeded"
    }
  }
}
```

**Key fields your server needs:**
- `amount`: Purchase amount in cents (divide by 100 for dollars)
- `currency`: Always "usd"
- `status`: "succeeded" or "failed"
- `customer`: Stripe customer ID (to look up customer)
- `receipt_email`: Customer email (for GA4/FB matching)
- `metadata`: Custom fields we set up to identify product

### **3.2 What Metadata Looks Like**

In the webhook event, we can include custom data in `metadata`:

```json
"metadata": {
  "product": "heritage_book",        # which product
  "add_ons": "photo_research",       # any add-ons
  "utm_source": "facebook",          # which ad source
  "utm_campaign": "heritage_leads",  # which campaign
  "customer_email": "user@example.com"
}
```

**Where does this come from?** The Stripe Payment Link includes this data. We'll set this up when creating links.

---

## Step 4: Test Webhook (Optional)

### **4.1 Use Stripe's Test Event**

Before your server is ready, you can test the webhook:

1. In Stripe Dashboard → **Developers** → **Webhooks**
2. Click on your endpoint
3. Click **"Send test webhook"** button
4. Select **"payment_intent.succeeded"**
5. Click **"Send test event"**
6. Check if you get a response (you won't yet since server isn't ready)

---

## Step 5: Update Stripe Payment Links

### **5.1 Add Metadata to Payment Links**

Your existing Stripe Payment Links need to include metadata so the webhook knows which product was purchased.

**For Heritage Book payment link:**
1. Go to https://dashboard.stripe.com/payment-links
2. Find your heritage book link (or create if doesn't exist)
3. Edit the link
4. Add metadata:
   - Product: `heritage_book`
   - Add-ons: `photo_research` (if they bought it)
   - Email: `{customer_email}` (Stripe will fill automatically)
5. Save

**Example payment link URL with metadata:**
```
https://buy.stripe.com/bJe14o2a35pO6csg16fQI02?
  client_reference_id=customer_id&
  prefilled_email=customer@example.com
```

**For each product, set these metadata fields:**

| Product | Metadata |
|---------|----------|
| Heritage Book | `product=heritage_book` |
| Pet Tag | `product=pet_tag` |
| Business Profile | `product=business_profile` |
| Cemetery Plaque | `product=cemetery_plaque` |
| Photo Research Add-on | `product=photo_research_addon` |
| Oral History Add-on | `product=oral_history_addon` |

---

## Step 6: Webhook Security

### **6.1 Verify Webhook Signature**

⚠️ **CRITICAL:** Always verify that webhook came from Stripe, not an attacker

**Why:** Someone could send fake webhook to your server claiming "payment received"

**How:**
1. Stripe includes signature in `X-Stripe-Signature` header
2. Your server verifies signature using webhook secret
3. Only process if signature is valid

**Example (in Node.js):**
```javascript
const stripe = require('stripe');
const webhookSecret = 'whsec_test_abc123xyz...';

// Verify signature
const sig = request.headers['x-stripe-signature'];
try {
  const event = stripe.webhooks.constructEvent(
    request.body,
    sig,
    webhookSecret
  );
  // Safe to process event
} catch (err) {
  // Signature verification failed - reject
  return response.status(400).send('Webhook error');
}
```

---

## Stripe Webhook Testing Checklist

- [ ] Created webhook endpoint in Stripe Dashboard
- [ ] Selected events: `payment_intent.succeeded`, `payment_intent.payment_failed`, `charge.refunded`
- [ ] Copied webhook signing secret (whsec_...)
- [ ] Saved signing secret somewhere safe
- [ ] Understood webhook event structure
- [ ] Identified which metadata to include in payment links
- [ ] Reviewed webhook security (signature verification)
- [ ] Ready to implement server-side webhook handler

---

## Common Issues

### **Issue: "Webhook endpoint refused connection"**

**Solution:** Your server isn't deployed yet. This is normal. Move to Phase 10 Part 2 (Server Implementation).

### **Issue: "Can't find webhook signing secret"**

**Solution:** 
1. Go to Stripe Dashboard → Developers → Webhooks
2. Click your endpoint
3. Scroll to "Signing secret"
4. Click "Reveal"
5. Copy the secret starting with `whsec_`

### **Issue: "Webhook keeps failing in Stripe Dashboard"**

**Solution:** Your server is receiving the webhook but returning an error. Check logs in:
- Vercel: Vercel.com → Project → Deployments → Logs
- Firebase: Firebase console → Functions → Logs
- Your server: Check console.log output

---

## Next Steps

1. ✅ **Complete:** Stripe webhook setup (this doc)
2. → **Next:** `SERVER_SIDE_IMPLEMENTATION.md` - Build the code that receives webhook
3. → **Then:** `GA4_MEASUREMENT_PROTOCOL.md` - Send data to GA4
4. → **Then:** `FACEBOOK_CONVERSION_API_SETUP.md` - Send data to Facebook

---

## Quick Reference

| Item | Location |
|------|----------|
| Webhook endpoint | Stripe Dashboard → Developers → Webhooks |
| Signing secret | Stripe Dashboard → Developers → Webhooks → Endpoint → Signing secret |
| Event types | payment_intent.succeeded, payment_intent.payment_failed, charge.refunded |
| Test webhook | Stripe Dashboard → Webhooks → Send test webhook |

---

**Stripe webhook is now configured. Move to Phase 10 Part 2: Server-side implementation.**
