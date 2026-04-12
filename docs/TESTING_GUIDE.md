# PHASE 10 TESTING GUIDE
## End-to-End Webhook Testing

**Time to complete:** 1-2 hours  
**Difficulty:** Medium (requires coordination of multiple systems)  
**Purpose:** Verify entire flow works before going live

---

## Testing Strategy

Test in this order:

```
1. Verify Infrastructure (10 min)
   ├─ Stripe webhook is configured
   ├─ Server is deployed (Vercel/Firebase)
   └─ Environment variables are set

2. Test Stripe → Server (15 min)
   ├─ Send test webhook from Stripe
   └─ Check server received it

3. Test Server → GA4 (15 min)
   ├─ Verify GA4 API secret works
   └─ Check GA4 receives test event

4. Test Server → Facebook (15 min)
   ├─ Verify Facebook token works
   └─ Check Facebook receives test event

5. End-to-End Test (30 min)
   ├─ Make real test purchase
   ├─ Verify Stripe webhook fires
   ├─ Check GA4 received purchase
   └─ Check Facebook received conversion

6. Verify Attribution (15 min)
   ├─ Check purchase linked to campaign
   └─ Verify revenue appears in reports
```

---

## Part 1: Verify Infrastructure

### **1.1 Check Stripe Webhook**

1. Go to https://dashboard.stripe.com
2. Click **Developers** → **Webhooks**
3. Find your endpoint
4. Check status:
   - ✅ Green checkmark = Connected and working
   - ⚠️ Yellow warning = Receiving but some failures
   - ❌ Red X = Not connecting

**If failing:**
- Check URL is correct: `https://your-domain.com/api/stripe-webhook`
- Verify server is deployed and running
- Check firewall/security rules allow webhook

### **1.2 Check Server Deployment**

**If using Vercel:**

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Deployments**
4. Most recent deployment should show: **Ready**
5. Click on it → **Logs** → Should see no errors

**If using Firebase:**

1. Go to https://console.firebase.google.com
2. Select project
3. **Functions** → **Logs**
4. Recent logs should show successful deployments
5. No red errors

### **1.3 Check Environment Variables**

**Vercel:**
1. Project → **Settings** → **Environment Variables**
2. Verify these are present:
   - ✅ STRIPE_WEBHOOK_SECRET
   - ✅ GA4_MEASUREMENT_ID
   - ✅ GA4_API_SECRET
   - ✅ FACEBOOK_PIXEL_ID
   - ✅ FACEBOOK_ACCESS_TOKEN

**Firebase:**
1. Project → **Functions**
2. Select function
3. **Runtime settings** → **Environment variables**
4. Same check as above

**If any are missing:** Go back to `SERVER_SIDE_IMPLEMENTATION.md` and set them.

---

## Part 2: Test Stripe → Server

### **2.1 Send Test Webhook from Stripe**

1. Go to https://dashboard.stripe.com
2. **Developers** → **Webhooks**
3. Click on your endpoint
4. Scroll down to **Testing**
5. Click **Send test event**
6. Select: `payment_intent.succeeded`
7. Click **Send test event**

### **2.2 Check Server Received Event**

**If using Vercel:**

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Deployments** → Latest
4. Click **Logs**
5. Scroll through logs
6. Look for:
   ```
   Received event: payment_intent.succeeded
   ```
   - ✅ Message appeared = Server received webhook

**If using Firebase:**

1. Go to https://console.firebase.google.com
2. **Functions** → **Logs**
3. Look for function execution logs
4. Should show:
   ```
   Received event: payment_intent.succeeded
   ```

### **2.3 Troubleshoot Webhook Reception**

If no "Received event" message:

**Check 1: Is webhook URL correct?**
```
Stripe Dashboard → Developers → Webhooks
Click your endpoint → URL should be: https://your-domain.com/api/stripe-webhook
```

**Check 2: Is server responding?**
```
Try visiting your webhook URL directly in browser:
  https://your-domain.com/api/stripe-webhook

Should see error or message (not blank)
```

**Check 3: Is endpoint registered correctly?**
```
In SERVER_SIDE_IMPLEMENTATION.md, check:
  app.post('/api/stripe-webhook', ...

URL in code must match Stripe webhook URL exactly
```

---

## Part 3: Test Server → GA4

### **3.1 Manually Test GA4 API**

Before testing with real webhook, test GA4 API directly.

Use curl (or Postman) to send test event:

```bash
curl -X POST "https://www.google-analytics.com/mp/collect" \
  -H "Content-Type: application/json" \
  -d '{
    "measurement_id": "G-XQJ8KPVZX9",
    "api_secret": "YOUR_GA4_API_SECRET",
    "client_id": "test_client_12345",
    "user_id": "test@example.com",
    "events": [{
      "name": "purchase",
      "params": {
        "transaction_id": "test_pi_12345",
        "value": 349.00,
        "currency": "USD",
        "items": [{
          "item_id": "heritage-book",
          "item_name": "Heritage Book",
          "price": 199.00
        }]
      }
    }]
  }'
```

Expected response:
```json
{
  "validationMessages": []
}
```

- ✅ Empty array = Success
- ❌ Errors = GA4_API_SECRET is wrong or GA4 not enabled

### **3.2 Verify GA4 Receives Event**

1. Go to https://analytics.google.com
2. Select your property: **My Legacy Continues**
3. Left sidebar → **Reports** → **Real-time**
4. Send your test curl command from 3.1 above
5. Check Real-Time dashboard:
   - **Events** counter should increase
   - **Event name** "purchase" should appear
   - ✅ If visible = GA4 is receiving events

### **3.3 Troubleshoot GA4**

**"Invalid measurement_id"**
- Check GA4_MEASUREMENT_ID is exactly: `G-XQJ8KPVZX9`
- No extra spaces

**"Invalid api_secret"**
- Double-check secret copied from GA4
- Secrets start with `ghN`
- Make sure not truncated

**"Validation failed: user_id too long"**
- Keep user_id short
- Use only email, not full name
- Max 256 characters

**No events in Real-Time after 10 minutes**
- GA4 takes 5-15 minutes to show in Real-Time
- Check if API secret has been changed (need to refresh)
- Verify Measurement Protocol API is enabled in GA4

---

## Part 4: Test Server → Facebook

### **4.1 Manually Test Facebook API**

```bash
curl -X POST "https://graph.facebook.com/v17.0/2828165625364437/events" \
  -H "Content-Type: application/json" \
  -d '{
    "data": [{
      "event_name": "Purchase",
      "event_time": '$(date +%s)',
      "action_source": "website",
      "event_id": "test_pi_12345",
      "user_data": {
        "em": "'$(echo -n 'test@example.com' | sha256sum | cut -d' ' -f1)'"
      },
      "custom_data": {
        "value": 349.00,
        "currency": "USD",
        "content_name": "Heritage Book + Photo Research",
        "content_type": "product"
      }
    }],
    "test_event_code": "TEST12345"
  }' \
  -G -d 'access_token=YOUR_FACEBOOK_ACCESS_TOKEN'
```

Expected response:
```json
{
  "events_received": 1,
  "fbia_sales_channel_id": null,
  "pixel_id": "2828165625364437"
}
```

- ✅ `events_received: 1` = Success
- ❌ Other errors = Token is wrong or expired

### **4.2 Verify Facebook Receives Event**

1. Go to https://business.facebook.com
2. **Events Manager** (from left menu)
3. Select your pixel: **My Legacy Continues**
4. Go to **Test Events** tab
5. Make sure test event code matches (`TEST12345`)
6. After 30-60 seconds, you should see:
   - Event appeared in list
   - Shows: Purchase, amount $349, email (hashed)

### **4.3 Troubleshoot Facebook**

**"Invalid access_token"**
- Token should start with `EAAB`
- Check token hasn't expired (system user tokens expire ~60 days)
- Regenerate if needed

**"No events appearing"**
- Wait 60-90 seconds (takes longer than GA4)
- Check test_event_code is in use
- Verify pixel ID is correct: `2828165625364437`
- Check you're looking at correct pixel in Events Manager

**"Invalid event data"**
- Check `event_name` is exactly `"Purchase"` (capital P)
- Check `value` is number, not string: `349.00` not `"349"`
- Check `currency` is uppercase: `USD` not `usd`
- Check email is hashed with SHA-256

---

## Part 5: End-to-End Test (Real Purchase)

### **5.1 Make Test Purchase**

1. Go to https://mylegacycontinues.com/heritage-book.html
2. Click **"Pay Now"** button
3. You'll be redirected to Stripe checkout
4. Use test card: **4242 4242 4242 4242**
   - Expiry: 12/25 (or any future date)
   - CVC: 123 (any 3 digits)
   - Name: Test Customer
   - Email: your-email@example.com
5. Complete payment
6. You'll be redirected to thank you page
7. Should show: "Order complete!"

### **5.2 Check Stripe Webhook Fired**

1. Within 30 seconds of payment, go to:
   https://dashboard.stripe.com → **Developers** → **Webhooks**
2. Click your endpoint
3. Scroll down to **Logs**
4. Most recent entry should show:
   - **Event:** `payment_intent.succeeded`
   - **Status:** `2xx` (usually 200)
   - Time: Recently (within last minute)

- ✅ If shows 200 = Server received and accepted webhook

### **5.3 Check Server Logs**

**If using Vercel:**
1. https://vercel.com/dashboard
2. Select project
3. **Deployments** → Latest → **Logs**
4. Look for messages:
   ```
   Processing payment: $349.00 from your-email@example.com
   ✅ GA4 event sent successfully
   ✅ Facebook conversion event sent successfully
   ```

**If using Firebase:**
1. https://console.firebase.google.com
2. **Functions** → **Logs**
3. Same messages as above

### **5.4 Check GA4 Received Purchase**

1. Go to https://analytics.google.com
2. Select property: **My Legacy Continues**
3. **Reports** → **Real-time**
4. Should show:
   - Event: "purchase"
   - User: your-email@example.com
   - Revenue: $349

- ✅ If visible = GA4 received purchase event

### **5.5 Check Facebook Received Conversion**

1. Go to https://business.facebook.com
2. **Events Manager**
3. Select pixel: **My Legacy Continues**
4. **Live** tab (not Test Events)
5. Should see:
   - Event type: Purchase
   - Amount: $349
   - Time: Just now

- ✅ If visible = Facebook received conversion

---

## Part 6: Verify Attribution

### **6.1 Check Purchase is Linked to Campaign**

1. Go to GA4
2. **Reports** → **Acquisition**
3. Click **Session source / medium**
4. Look for row: **direct / (none)** or your utm_source
5. Should show: Users, Sessions, Conversions

**Example:**
```
Source / Medium        | Users | Conversions | Revenue
direct / (none)        | 1     | 1           | $349.00
```

- ✅ If purchase shows here = Attribution is working

### **6.2 Check Campaign Attribution (if used UTM links)**

If you used UTM parameters when making the test purchase:

1. GA4 **Reports**
2. Create custom report
3. Dimensions: `utm_campaign`
4. Metrics: `Conversions`, `Revenue`
5. Should show your campaign name with revenue

---

## Part 7: Complete Testing Checklist

Use this checklist to verify each system:

### **Stripe Webhook**
- [ ] Webhook endpoint created in Stripe
- [ ] Endpoint URL is correct
- [ ] Webhook secret copied to server `.env`
- [ ] Test webhook from Stripe fires without errors
- [ ] Server logs show "Received event" message

### **GA4 Setup**
- [ ] GA4 API secret created in GA4
- [ ] GA4 measurement ID correct: G-XQJ8KPVZX9
- [ ] Both copied to server `.env`
- [ ] Test curl request to GA4 succeeds
- [ ] Test event appears in GA4 Real-Time

### **Facebook Setup**
- [ ] Facebook system user created
- [ ] Access token generated and copied
- [ ] Pixel ID correct: 2828165625364437
- [ ] Both in server `.env`
- [ ] Test curl request to Facebook succeeds
- [ ] Test event appears in Facebook Events Manager

### **Server Deployment**
- [ ] Server deployed (Vercel or Firebase)
- [ ] All environment variables set
- [ ] Server logs accessible and showing activity
- [ ] No errors in recent logs

### **End-to-End Flow**
- [ ] Made real test purchase with card 4242...
- [ ] Received thank you confirmation
- [ ] Stripe webhook shows successful (200 status)
- [ ] Server logs show processing messages
- [ ] GA4 shows purchase in Real-Time
- [ ] Facebook shows conversion in Events Manager
- [ ] Revenue amount matches ($349)

### **Attribution**
- [ ] Purchase appears in GA4 campaign/source report
- [ ] Revenue is attributed to traffic source
- [ ] Email matched correctly
- [ ] Add-ons tracked separately (if purchased)

---

## Troubleshooting Common Issues

### **Webhook received but GA4 event fails**

**Symptoms:**
- Server logs show: "Error sending to GA4"
- GA4 not receiving events

**Solutions:**
1. Check GA4_API_SECRET is correct (starts with `ghN`)
2. Check GA4_MEASUREMENT_ID is: `G-XQJ8KPVZX9`
3. Verify Measurement Protocol API enabled in GA4
4. Check server logs for exact error message
5. Try manual curl test (see Part 3)

### **Webhook received but Facebook event fails**

**Symptoms:**
- Server logs show: "Error sending to Facebook"
- Facebook not receiving events

**Solutions:**
1. Check FACEBOOK_ACCESS_TOKEN starts with `EAAB`
2. Check FACEBOOK_PIXEL_ID is: `2828165625364437`
3. Try regenerating Facebook access token
4. Check token hasn't expired (60-day limit)
5. Try manual curl test (see Part 4)

### **Webhook not firing from Stripe**

**Symptoms:**
- Server logs show no webhook activity
- Stripe dashboard shows endpoint failing

**Solutions:**
1. Check webhook URL in Stripe:
   - `https://your-domain.com/api/stripe-webhook`
2. Verify server deployed and live
3. Try manual test webhook from Stripe dashboard
4. Check firewall/security groups allow inbound
5. Check server error logs for connection issues

### **GA4 shows event but no revenue**

**Symptoms:**
- GA4 shows purchase event
- But revenue amount is $0

**Solutions:**
1. Check `value` parameter in GA4 request
   - Should be: `"value": 349.00` (float, not string)
2. Check `currency` is uppercase: `USD`
3. Check items have `price` field
4. Verify payment amount correct in Stripe

### **Purchase not attributed to campaign**

**Symptoms:**
- Purchase shows in GA4
- But attributed to "direct" not your campaign

**Solutions:**
1. Check if you used UTM link when making purchase
2. Check email matched between sessions
3. Check GA4 isn't in test mode (disables attribution)
4. Wait 24 hours (attribution processing latency)
5. Check Attribution Settings in GA4 Admin

---

## Going Live Checklist

Before using Phase 10 in production:

- [ ] All tests passed
- [ ] No errors in server logs
- [ ] GA4 receiving real events
- [ ] Facebook receiving real conversions
- [ ] Attribution working correctly
- [ ] Revenue appearing in reports
- [ ] Team trained on new system
- [ ] Monitoring/alerts set up
- [ ] Backup/recovery plan in place

---

**All systems tested and verified. Ready for production.**
