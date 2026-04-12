# FACEBOOK CONVERSION API SETUP
## Server-Side Purchase Event Tracking for Facebook

**Time to complete:** 25 minutes  
**Difficulty:** Medium (multiple Facebook steps)  
**Requirements:** Facebook Business Manager access

---

## What is Facebook Conversion API?

Similar to GA4 Measurement Protocol, Conversion API lets your server send purchase events directly to Facebook.

```
Website Pixel → JavaScript → Facebook (client-side)

Server → Conversion API → Facebook (server-side)
```

**Why we need it:** 
- Browser privacy (iOS 14+ blocks some tracking)
- More reliable than client-side pixel
- Better event matching (server can send more user data)
- Required for conversion optimization in ads

---

## Step 1: Get Facebook Pixel Access Token

### **1.1 Go to Facebook Business Manager**

1. Log in to https://business.facebook.com
2. Click **"Settings"** (bottom left)
3. Go to **"Data Sources"** → **"Pixels"**

### **1.2 Create System User**

1. Click **"System Users"** (left sidebar under settings)
2. Click **"Create System User"**
3. Fill in:
   - **Name:** `Stripe Webhook Server`
   - **Role:** `Admin`
4. Click **"Create System User"**

### **1.3 Create System User Token**

1. Click on the system user you just created
2. Click **"Generate Token"**
3. Select your app (or create new if needed)
4. Click **"Generate"**
5. **Copy the token** - you'll need it in server
6. Save it somewhere safe (like in `.env`)

**Token format:** `EAAB...` (very long string)

### **1.4 Grant Permissions**

1. In System Users, find your user
2. Click **"Assign Apps"**
3. Select your app
4. Grant permissions: `manage_pages`, `ads_management`, `manage_business_accounts`

---

## Step 2: Get Pixel Access Token (Alternative Method)

If you want to use a different token specifically for conversions:

### **2.1 Create App Access Token**

1. Facebook Business Manager → Settings → Apps and websites
2. Select your app
3. Go to **"Settings"** → **"Basic"**
4. You'll see:
   - **App ID:** `123456789`
   - **App Secret:** `abc123xyz...`
5. Click **"Show"** next to App Secret
6. Note both values

### **2.2 Generate Token via API**

```bash
# Get access token
curl -X GET "https://graph.instagram.com/oauth/access_token" \
  -d "client_id=YOUR_APP_ID" \
  -d "client_secret=YOUR_APP_SECRET" \
  -d "grant_type=client_credentials"
```

The response will include an `access_token` you can use for Conversion API.

---

## Step 3: Add Pixel to Your App

### **3.1 Associate Pixel with App**

1. Facebook Business Manager → Data Sources → Pixels
2. Select your pixel (2828165625364437)
3. Click **"Settings"**
4. Under **"Business Integrations"**, connect your app
5. Save

---

## Step 4: Update Server Configuration

### **4.1 Add Facebook Token to `.env`**

In your webhook server, update `.env`:

```
FACEBOOK_PIXEL_ID=2828165625364437
FACEBOOK_ACCESS_TOKEN=EAAB...
```

Replace `EAAB...` with your actual access token.

---

## Step 5: Test Event Code (For Development)

### **5.1 Create Test Event Code**

This is optional but helpful for testing without affecting live data.

1. Facebook Business Manager → Events Manager
2. Select your pixel
3. Settings → Test Events
4. Generate a **Test Event Code**
5. Example: `TEST12345`
6. Add to `.env`: `FACEBOOK_TEST_EVENT_CODE=TEST12345`

When testing in development, add `test_event_code` to your API request:

```json
{
  "data": [...],
  "test_event_code": "TEST12345"
}
```

This sends events to test mode instead of affecting real data.

---

## Step 6: Understand Purchase Event Format

### **6.1 What Facebook Receives**

```json
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1681234567,
      "action_source": "website",
      "event_id": "pi_1234567890",
      "event_source_url": "https://mylegacycontinues.com",
      "user_data": {
        "em": "a7dff89b9d5a8e6f...",  # hashed email
        "ph": "5d41402abc4b2a76...",  # hashed phone
        "fn": "John",                   # first name
        "ln": "Doe",                    # last name
        "ct": "New York",               # city
        "st": "NY",                     # state
        "zp": "10001",                  # zip
        "country": "US"                 # country
      },
      "custom_data": {
        "value": 349.00,
        "currency": "USD",
        "content_name": "Heritage Book + Photo Research",
        "content_type": "product",
        "content_id": "heritage-book"
      }
    }
  ],
  "test_event_code": "TEST12345"  # Only in development
}
```

### **6.2 Key Parameters**

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `event_name` | Event type | Purchase, Lead, AddToCart |
| `event_time` | Unix timestamp | 1681234567 |
| `action_source` | Source of action | website, app, phone_call |
| `event_id` | Unique ID for deduplication | Stripe payment intent ID |
| `user_data` | Customer info (hashed) | email, phone, name, address |
| `custom_data` | Transaction details | value, currency, content_name |

### **6.3 Email Hashing**

Facebook requires email to be hashed (SHA-256):

```javascript
const crypto = require('crypto');
const email = 'customer@example.com';
const hashedEmail = crypto
  .createHash('sha256')
  .update(email.toLowerCase().trim())
  .digest('hex');
// Result: "a7dff89b9d5a8e6f..."
```

---

## Step 7: Test Conversion Event

### **7.1 Send Test Event**

Use curl or Postman to test:

```bash
curl -X POST https://graph.facebook.com/v17.0/2828165625364437/events \
  -H "Content-Type: application/json" \
  -d '{
    "data": [{
      "event_name": "Purchase",
      "event_time": '$(date +%s)',
      "action_source": "website",
      "event_id": "test_'$(date +%s)'",
      "user_data": {
        "em": "'$(echo -n 'test@example.com' | sha256sum | cut -d' ' -f1)'"
      },
      "custom_data": {
        "value": 199.00,
        "currency": "USD",
        "content_name": "Heritage Book",
        "content_type": "product"
      }
    }],
    "test_event_code": "TEST12345"
  }' \
  -G -d 'access_token=YOUR_ACCESS_TOKEN'
```

### **7.2 Check Facebook Events Manager**

1. Facebook Business Manager → Events Manager
2. Select your pixel
3. Go to **"Test Events"** tab
4. Your test event should appear within seconds

---

## Step 8: Enable Conversion API in Ads Manager

### **8.1 Set Up for Conversion Optimization**

1. Facebook Ads Manager → Your campaign
2. Go to **"Campaign details"** → **"Conversion settings"**
3. Select **"Website"** as conversion location
4. Select your pixel (2828165625364437)
5. Select event: **"Purchase"**
6. Click **"Save"**

---

## Step 9: Monitor Conversions

### **9.1 Check Conversions in Events Manager**

1. Facebook Business Manager → Events Manager
2. Select your pixel
3. Go to **"Test Events"** (for testing) or **"Live"** (for production)
4. You should see purchase events appear in real-time

### **9.2 Check Conversions in Ads Manager**

1. Facebook Ads Manager → Your campaign
2. Metrics should show:
   - **Purchase conversions:** Count of purchases
   - **Cost per conversion:** Average cost per purchase
   - **Conversion rate:** % of people who purchased

---

## Troubleshooting

### **"Invalid access_token"**
- Make sure token starts with `EAAB`
- Check token hasn't expired (system user tokens expire after ~60 days)
- Try regenerating token

### **"No events appearing"**
- Wait 5-10 minutes for real-time data
- Check `test_event_code` is in use if testing
- Verify pixel ID is correct: `2828165625364437`
- Check server logs for API errors

### **"User data hashing incorrect"**
- Email must be lowercase and trimmed before hashing
- Use SHA-256, not MD5
- Result should be hex string

### **"Event data validation failed"**
- Check all required fields are present
- `value` should be float, not string
- `currency` should be uppercase (USD, not usd)

---

## Production Checklist

Before going live:

- [ ] Created system user in Business Manager
- [ ] Generated and saved access token
- [ ] Token added to server `.env`
- [ ] Pixel ID is correct (2828165625364437)
- [ ] Test event code generated (for testing)
- [ ] Test event sent successfully
- [ ] Events appear in Facebook Events Manager
- [ ] Conversion API enabled in ad campaigns
- [ ] Email hashing implemented correctly
- [ ] Error handling in place

---

## Best Practices

1. **Always hash PII** (Personally Identifiable Information)
   - Email, phone, name, address must be hashed
   - Use SHA-256
   - Lowercase before hashing

2. **Use unique event IDs** to prevent duplicates
   - Use Stripe payment intent ID
   - Facebook deduplicates based on event_id

3. **Send complete data**
   - Include customer info for better matching
   - More data = better optimization

4. **Test in sandbox first**
   - Use `test_event_code` during development
   - Doesn't affect live conversion data
   - Switch to production when ready

5. **Monitor for errors**
   - Check server logs regularly
   - Set up alerts for failed events
   - Track conversion rate trends

---

## Next Steps

1. ✅ **Complete:** Facebook Conversion API setup (this doc)
2. → **Next:** `ATTRIBUTION_GUIDE.md` - How attribution works
3. → **Next:** `ROI_REPORTING_GUIDE.md` - Set up GA4 dashboards
4. → **Next:** `TESTING_GUIDE.md` - End-to-end testing

---

**Facebook is now receiving purchase events from your server.**
