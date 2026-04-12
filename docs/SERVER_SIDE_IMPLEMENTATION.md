# SERVER-SIDE WEBHOOK IMPLEMENTATION
## Node.js/Express Code to Receive & Process Stripe Events

**Time to complete:** 1-2 hours (includes deployment)  
**Difficulty:** Medium (coding required)  
**Tech Stack:** Node.js, Express, Vercel or Firebase

---

## Architecture Overview

```
Stripe Payment → [WEBHOOK EVENT] → Your Server → GA4 + Facebook
                                        ↓
                                   Parse Stripe event
                                        ↓
                                   Extract: amount, email, product
                                        ↓
                                   Send to GA4 Measurement Protocol
                                        ↓
                                   Send to Facebook Conversion API
                                        ↓
                                   Return success to Stripe
```

---

## Deployment Options

### **Option A: Vercel (Recommended - Free Tier)**
- Easy to deploy
- Free for up to 100GB bandwidth/month
- Scales automatically
- GitHub integration

**Setup time:** 30 minutes

### **Option B: Firebase Cloud Functions (Alternative - Free Tier)**
- Free tier: 2 million invocations/month
- Built into Google ecosystem
- Good integration with GA4
- Requires Google account

**Setup time:** 40 minutes

### **Option C: Your Own Server (If you have one)**
- Full control
- Costs: depends on hosting

**Setup time:** 20 minutes

---

## Part 1: Create Node.js Application

### **1.1 Create Project Directory**

```bash
mkdir legacy-os-webhook
cd legacy-os-webhook
npm init -y
```

### **1.2 Install Dependencies**

```bash
npm install express stripe dotenv axios body-parser cors
```

**What each does:**
- `express` — Web server framework
- `stripe` — Stripe SDK to verify webhooks
- `dotenv` — Load environment variables
- `axios` — Make HTTP requests to GA4/Facebook
- `body-parser` — Parse JSON requests
- `cors` — Handle cross-origin requests

### **1.3 Create `.env` File**

Create file named `.env` in project root:

```
# Stripe
STRIPE_WEBHOOK_SECRET=whsec_test_abc123...

# GA4 Measurement Protocol
GA4_MEASUREMENT_ID=G-XQJ8KPVZX9
GA4_API_SECRET=your_ga4_api_secret_here

# Facebook Conversion API
FACEBOOK_PIXEL_ID=2828165625364437
FACEBOOK_ACCESS_TOKEN=your_facebook_access_token_here

# Environment
NODE_ENV=production
PORT=3000
```

**Where to get these values:**
- `STRIPE_WEBHOOK_SECRET` — From Stripe Dashboard (Phase 10 Part 1)
- `GA4_MEASUREMENT_ID` — Already have: G-XQJ8KPVZX9
- `GA4_API_SECRET` — Create in GA4 settings (see Part 3)
- `FACEBOOK_PIXEL_ID` — Already have: 2828165625364437
- `FACEBOOK_ACCESS_TOKEN` — Create in Facebook (see Part 4)

---

## Part 2: Create Express Server

### **2.1 Create `index.js`**

Create file named `index.js`:

```javascript
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Webhook server is running');
});

// ============================================
// STRIPE WEBHOOK ENDPOINT
// ============================================
app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['x-stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Log event received
  console.log(`Received event: ${event.type}`);

  // Handle different event types
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSucceeded(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailed(event.data.object);
      break;
    case 'charge.refunded':
      await handleRefund(event.data.object);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return success to Stripe
  res.json({ received: true });
});

// ============================================
// HANDLE PAYMENT SUCCEEDED
// ============================================
async function handlePaymentSucceeded(paymentIntent) {
  try {
    // Extract purchase data from Stripe
    const amount = paymentIntent.amount / 100; // Convert cents to dollars
    const currency = paymentIntent.currency.toUpperCase();
    const email = paymentIntent.receipt_email;
    const customerId = paymentIntent.customer;
    const metadata = paymentIntent.metadata || {};

    console.log(`Processing payment: $${amount} from ${email}`);

    // Build items array from metadata
    const items = [];
    
    // Add main product
    if (metadata.product) {
      items.push({
        item_id: metadata.product,
        item_name: formatProductName(metadata.product),
        price: parseFloat(metadata.product_price) || 199
      });
    }

    // Add add-ons if purchased
    if (metadata.photo_research_addon === 'true') {
      items.push({
        item_id: 'photo-research-addon',
        item_name: 'Photo Research Add-On',
        price: 150
      });
    }
    if (metadata.oral_history_addon === 'true') {
      items.push({
        item_id: 'oral-history-addon',
        item_name: 'Oral History Interview',
        price: 299
      });
    }

    // Send to GA4
    await sendToGA4({
      email,
      customerId,
      amount,
      currency,
      items,
      transactionId: paymentIntent.id,
      metadata
    });

    // Send to Facebook
    await sendToFacebook({
      email,
      amount,
      currency,
      items,
      transactionId: paymentIntent.id
    });

    console.log(`✅ Payment processed: $${amount} sent to GA4 and Facebook`);
  } catch (error) {
    console.error('Error handling payment:', error);
  }
}

// ============================================
// HANDLE PAYMENT FAILED
// ============================================
async function handlePaymentFailed(paymentIntent) {
  console.log(`Payment failed for ${paymentIntent.receipt_email}`);
  // Optionally log failed payments for analysis
}

// ============================================
// HANDLE REFUND
// ============================================
async function handleRefund(charge) {
  console.log(`Refund processed for ${charge.receipt_email}`);
  // Optionally track refunds in GA4
}

// ============================================
// SEND TO GA4 (MEASUREMENT PROTOCOL)
// ============================================
async function sendToGA4({ email, customerId, amount, currency, items, transactionId, metadata }) {
  try {
    const ga4Secret = process.env.GA4_API_SECRET;
    const ga4MeasurementId = process.env.GA4_MEASUREMENT_ID;

    // Get GA4 client ID from email (or use hashed email)
    // In real setup, you'd match this to the actual GA4 client_id from website
    const clientId = customerId || email;

    const payload = {
      client_id: clientId,
      user_id: email, // Use email as user ID for matching
      events: [{
        name: 'purchase',
        params: {
          transaction_id: transactionId,
          value: amount,
          currency: currency,
          items: items.map(item => ({
            item_id: item.item_id,
            item_name: item.item_name,
            price: item.price,
            quantity: 1
          })),
          // Include UTM parameters from metadata
          utm_source: metadata.utm_source || 'direct',
          utm_medium: metadata.utm_medium || 'organic',
          utm_campaign: metadata.utm_campaign || 'direct'
        }
      }]
    };

    const response = await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${ga4MeasurementId}&api_secret=${ga4Secret}`,
      payload
    );

    console.log('✅ GA4 event sent successfully');
    return response.data;
  } catch (error) {
    console.error('Error sending to GA4:', error.response?.data || error.message);
  }
}

// ============================================
// SEND TO FACEBOOK (CONVERSION API)
// ============================================
async function sendToFacebook({ email, amount, currency, items, transactionId }) {
  try {
    const pixelId = process.env.FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    // Hash email for Facebook (for better matching)
    const crypto = require('crypto');
    const hashedEmail = crypto
      .createHash('sha256')
      .update(email.toLowerCase().trim())
      .digest('hex');

    const payload = {
      data: [{
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: {
          em: hashedEmail, // Hashed email
          client_user_agent: 'server-side'
        },
        event_id: transactionId,
        event_source_url: 'https://mylegacycontinues.com',
        custom_data: {
          value: amount,
          currency: currency,
          content_name: items.map(i => i.item_name).join(' + '),
          content_type: 'product',
          content_id: items[0]?.item_id || 'unknown'
        }
      }],
      test_event_code: process.env.NODE_ENV === 'development' ? 'TEST12345' : undefined
    };

    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`,
      payload
    );

    console.log('✅ Facebook conversion event sent successfully');
    return response.data;
  } catch (error) {
    console.error('Error sending to Facebook:', error.response?.data || error.message);
  }
}

// ============================================
// HELPER FUNCTION: FORMAT PRODUCT NAME
// ============================================
function formatProductName(productId) {
  const names = {
    'heritage-book': 'Heritage Culture Book',
    'pet-tag': 'Pet Tag',
    'business-profile': 'Business Profile',
    'cemetery-plaque': 'Cemetery Plaque',
    'baby-legacy': 'Baby Legacy',
    'morning-memories': 'Morning Memories Book',
    'photo-research-addon': 'Photo Research',
    'oral-history-addon': 'Oral History Interview'
  };
  return names[productId] || productId;
}

// ============================================
// START SERVER
// ============================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});

module.exports = app;
```

---

## Part 3: Deploy to Vercel (Recommended)

### **3.1 Create `vercel.json`**

Create file named `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

### **3.2 Initialize Git & Push to GitHub**

```bash
git init
git add .
git commit -m "Phase 10: Stripe webhook server"
git branch -M main
git remote add origin https://github.com/yourusername/legacy-os-webhook.git
git push -u origin main
```

### **3.3 Deploy to Vercel**

1. Go to https://vercel.com
2. Sign up / Log in (with GitHub)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Import"
6. Set environment variables:
   - Click "Environment Variables"
   - Add all variables from `.env` file
7. Click "Deploy"

**Your webhook URL will be:** `https://legacy-os-webhook.vercel.app/api/stripe-webhook`

### **3.4 Update Stripe Webhook URL**

1. Go to Stripe Dashboard → Developers → Webhooks
2. Edit your webhook endpoint
3. Change URL to: `https://legacy-os-webhook.vercel.app/api/stripe-webhook`
4. Save

---

## Part 4: Alternative - Deploy to Firebase

### **4.1 Create `functions/index.js`**

If using Firebase Cloud Functions, create similar code in Firebase function.

See Firebase documentation: https://firebase.google.com/docs/functions

### **4.2 Deploy**

```bash
firebase init functions
firebase deploy --only functions
```

---

## Testing the Webhook

### **5.1 Test in Stripe Dashboard**

1. Go to Stripe Dashboard → Developers → Webhooks
2. Find your endpoint
3. Click "Send test event"
4. Select `payment_intent.succeeded`
5. Click "Send test event"

### **5.2 Check Logs**

**Vercel:**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Click "Deployments"
4. Find latest deployment
5. Click "Logs"
6. Should see output from webhook

**Firebase:**
1. Go to Firebase Console
2. Select project
3. Functions → Logs
4. Should see function execution

### **5.3 Real Payment Test**

1. Visit https://mylegacycontinues.com/heritage-book.html
2. Click "Pay Now"
3. Use test card: `4242 4242 4242 4242`
4. Expiry: Any future date (e.g., 12/25)
5. CVC: Any 3 digits
6. Complete payment
7. Check server logs for webhook event
8. Verify GA4 and Facebook received data

---

## Environment Variables Reference

| Variable | Source | Example |
|----------|--------|---------|
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Webhooks | `whsec_test_abc...` |
| `GA4_MEASUREMENT_ID` | Already have | `G-XQJ8KPVZX9` |
| `GA4_API_SECRET` | GA4 Settings | (create in Part 3) |
| `FACEBOOK_PIXEL_ID` | Already have | `2828165625364437` |
| `FACEBOOK_ACCESS_TOKEN` | Facebook | (create in Part 4) |

---

## Error Handling

### **Common Errors**

**"Invalid signature"**
- Check `STRIPE_WEBHOOK_SECRET` is correct
- Make sure you're using exact secret from Stripe

**"GA4 request failed"**
- Check `GA4_API_SECRET` is valid
- Check `GA4_MEASUREMENT_ID` is correct
- Check GA4 API is enabled in Google Cloud

**"Facebook request failed"**
- Check `FACEBOOK_ACCESS_TOKEN` hasn't expired
- Check `FACEBOOK_PIXEL_ID` is correct
- Check token has required permissions

---

## Next Steps

1. ✅ **Complete:** Stripe webhook setup
2. ✅ **Complete:** Server implementation (this doc)
3. → **Next:** `GA4_MEASUREMENT_PROTOCOL.md` - Get GA4 API secret
4. → **Next:** `FACEBOOK_CONVERSION_API_SETUP.md` - Get Facebook token

---

**Server is now deployed and receiving Stripe webhooks.**
