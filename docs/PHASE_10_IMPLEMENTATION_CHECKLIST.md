# PHASE 10 IMPLEMENTATION CHECKLIST
## Complete Stripe Webhook & Revenue Attribution Setup

**Total Time:** 2-3 days active work + 1-2 weeks testing  
**Difficulty:** Medium (multiple systems, but straightforward steps)  
**Outcome:** Full revenue attribution from ad campaigns to actual sales

---

## Pre-Implementation Setup (Complete Before Starting)

- [ ] You have Stripe account access
- [ ] You have GA4 property access (G-XQJ8KPVZX9)
- [ ] You have Facebook Business Manager access
- [ ] You have Vercel or Firebase account (for server deployment)
- [ ] You have GitHub account to push code
- [ ] You've read PHASE_10_OVERVIEW.md to understand architecture

---

## SECTION 1: Stripe Webhook Configuration (10 minutes)

**File:** `STRIPE_WEBHOOK_SETUP.md`

### **1.1 Create Stripe Webhook Endpoint**
- [ ] Go to https://dashboard.stripe.com → **Developers** → **Webhooks**
- [ ] Click **"Add endpoint"**
- [ ] Enter endpoint URL:
  - For Vercel: `https://legacy-os-webhook.vercel.app/api/stripe-webhook`
  - For Firebase: `https://us-central1-PROJECT.cloudfunctions.net/webhook`
  - For custom server: `https://your-domain.com/api/stripe-webhook`
- [ ] Click **"Add endpoint"**

### **1.2 Select Events to Listen For**
- [ ] Uncheck "Select all events"
- [ ] Expand **"Payment intents"**
  - [ ] Check: `payment_intent.succeeded`
  - [ ] Check: `payment_intent.payment_failed`
- [ ] Expand **"Charges"**
  - [ ] Check: `charge.refunded`
- [ ] Click **"Update endpoint"**

### **1.3 Get Webhook Secret**
- [ ] Go to **Developers** → **Webhooks**
- [ ] Click on your endpoint
- [ ] Scroll to **"Signing secret"**
- [ ] Click **"Reveal"**
- [ ] Copy the secret (starts with `whsec_`)
- [ ] **Save somewhere safe** - you'll need this in Step 2

---

## SECTION 2: Server-Side Implementation (1-2 hours)

**File:** `SERVER_SIDE_IMPLEMENTATION.md`

### **2.1 Create Node.js Project**

- [ ] Create project directory:
  ```bash
  mkdir legacy-os-webhook
  cd legacy-os-webhook
  npm init -y
  ```

- [ ] Install dependencies:
  ```bash
  npm install express stripe dotenv axios body-parser cors
  ```

### **2.2 Create .env File**

- [ ] Create file named `.env` in project root
- [ ] Add these variables:
  ```
  STRIPE_WEBHOOK_SECRET=whsec_... (from Step 1.3)
  STRIPE_API_KEY=sk_test_... (get from Stripe Dashboard)
  
  GA4_MEASUREMENT_ID=G-XQJ8KPVZX9
  GA4_API_SECRET=(you'll get this in Section 3)
  
  FACEBOOK_PIXEL_ID=2828165625364437
  FACEBOOK_ACCESS_TOKEN=(you'll get this in Section 4)
  
  NODE_ENV=production
  PORT=3000
  ```

- [ ] Note: You'll fill in GA4 and Facebook values in Sections 3-4

### **2.3 Create index.js with Server Code**

- [ ] Create file named `index.js`
- [ ] Copy complete code from `SERVER_SIDE_IMPLEMENTATION.md` (lines 114-378)
- [ ] Code includes:
  - Express server setup
  - Stripe webhook handler
  - GA4 Measurement Protocol sender
  - Facebook Conversion API sender
  - Email hashing for Facebook
  - Product name formatter

### **2.4 Create vercel.json (If Using Vercel)**

- [ ] Create file named `vercel.json`
- [ ] Copy JSON from `SERVER_SIDE_IMPLEMENTATION.md` (lines 389-403)
- [ ] This tells Vercel how to deploy your Node.js code

### **2.5 Push to GitHub**

- [ ] Initialize git in project:
  ```bash
  git init
  git add .
  git commit -m "Phase 10: Stripe webhook server"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/legacy-os-webhook.git
  git push -u origin main
  ```

- [ ] Verify code is on GitHub

---

## SECTION 3: GA4 Setup (15 minutes)

**File:** `GA4_MEASUREMENT_PROTOCOL.md`

### **3.1 Create GA4 API Secret**

- [ ] Go to https://analytics.google.com
- [ ] Select property: **My Legacy Continues (G-XQJ8KPVZX9)**
- [ ] Click **"Admin"** (bottom left)
- [ ] Go to **"Data API"** → **"Measurement Protocol"**
- [ ] Click **"Create"** button
- [ ] Fill in:
  - **Name:** `Stripe Webhook Server` or `Purchase Events`
  - **Description:** (optional) Server webhook integration
- [ ] Click **"Create"**
- [ ] Copy the API secret (starts with `ghN...`)
- [ ] **Save this secret** - you need it in next step

### **3.2 Enable Measurement Protocol API**

- [ ] In GA4, go to **Admin** → **Data API**
- [ ] Verify **Measurement Protocol API** shows: ✅ **Enabled**
- [ ] If not enabled, click it and enable

### **3.3 Add GA4 Secret to Server**

- [ ] Open your `.env` file
- [ ] Update: `GA4_API_SECRET=ghN...` (paste your secret)

### **3.4 Enable Enhanced eCommerce (Optional but Recommended)**

- [ ] GA4 → **Admin** → **Data streams**
- [ ] Click your web stream
- [ ] Scroll to **"Enhanced measurement"**
- [ ] Toggle **"Purchase events"**: **ON**
- [ ] Click **"Save"**

---

## SECTION 4: Facebook Setup (20 minutes)

**File:** `FACEBOOK_CONVERSION_API_SETUP.md`

### **4.1 Create System User & Token**

- [ ] Go to https://business.facebook.com
- [ ] Click **"Settings"** (bottom left)
- [ ] Go to **"System Users"** (left sidebar)
- [ ] Click **"Create System User"**
- [ ] Fill in:
  - **Name:** `Stripe Webhook Server`
  - **Role:** `Admin`
- [ ] Click **"Create System User"**

### **4.2 Generate Access Token**

- [ ] Click on the system user you just created
- [ ] Click **"Generate Token"**
- [ ] Select your app (or create new if needed)
- [ ] Click **"Generate"**
- [ ] Copy the token (starts with `EAAB...`)
- [ ] **Save this token** - you need it next

### **4.3 Assign Permissions**

- [ ] In System Users, find your user
- [ ] Click **"Assign Apps"**
- [ ] Select your app
- [ ] Grant these permissions:
  - [ ] `manage_pages`
  - [ ] `ads_management`
  - [ ] `manage_business_accounts`

### **4.4 Add Facebook Token to Server**

- [ ] Open your `.env` file
- [ ] Update: `FACEBOOK_ACCESS_TOKEN=EAAB...` (paste your token)
- [ ] Keep `FACEBOOK_PIXEL_ID=2828165625364437`

---

## SECTION 5: Deploy Server (30 minutes)

**Choose one deployment option:**

### **OPTION A: Deploy to Vercel (Recommended)**

- [ ] Go to https://vercel.com
- [ ] Sign up / Log in (with GitHub)
- [ ] Click **"Import Project"**
- [ ] Select your GitHub repository: `legacy-os-webhook`
- [ ] Click **"Import"**
- [ ] Vercel will detect `vercel.json` automatically

#### **Add Environment Variables:**

- [ ] Click **"Environment Variables"**
- [ ] Add each variable from your `.env` file:
  - [ ] STRIPE_WEBHOOK_SECRET
  - [ ] STRIPE_API_KEY
  - [ ] GA4_MEASUREMENT_ID
  - [ ] GA4_API_SECRET
  - [ ] FACEBOOK_PIXEL_ID
  - [ ] FACEBOOK_ACCESS_TOKEN
  - [ ] NODE_ENV=production
  - [ ] PORT=3000

- [ ] Click **"Deploy"**
- [ ] Wait for deployment to complete (2-5 minutes)
- [ ] You'll see: **"Congratulations! Your project has been successfully deployed"**

#### **Get Your Webhook URL:**

- [ ] Copy the deployment URL (e.g., `https://legacy-os-webhook.vercel.app`)
- [ ] Your webhook URL is: `https://legacy-os-webhook.vercel.app/api/stripe-webhook`
- [ ] **Note:** Update Stripe if you used a different URL in Step 1

### **OPTION B: Deploy to Firebase Cloud Functions (Alternative)**

- [ ] Follow Firebase Cloud Functions deployment guide
- [ ] Install Firebase CLI: `npm install -g firebase-tools`
- [ ] Create `functions/index.js` with server code
- [ ] Deploy: `firebase deploy --only functions`
- [ ] Your webhook URL will be provided by Firebase

### **OPTION C: Deploy to Custom Server (If You Have One)**

- [ ] Clone repo on your server
- [ ] Install Node.js and npm
- [ ] Run: `npm install`
- [ ] Set environment variables (via shell profile or `.env`)
- [ ] Start server: `node index.js`
- [ ] Use process manager (PM2) to keep running

---

## SECTION 6: Update Stripe Webhook URL (If Changed)

- [ ] Go to https://dashboard.stripe.com → **Developers** → **Webhooks**
- [ ] Click on your endpoint
- [ ] Click **"Edit"** (or gear icon)
- [ ] Update URL to your deployed server URL
- [ ] Click **"Save"**

---

## SECTION 7: Test Webhook Reception (15 minutes)

**File:** `TESTING_GUIDE.md` Part 1-2

### **7.1 Send Test Webhook from Stripe**

- [ ] Stripe Dashboard → **Developers** → **Webhooks**
- [ ] Click your endpoint
- [ ] Click **"Send test event"**
- [ ] Select: `payment_intent.succeeded`
- [ ] Click **"Send test event"**

### **7.2 Check Server Received It**

- [ ] **If Vercel:** Project → **Deployments** → Latest → **Logs**
- [ ] **If Firebase:** Functions → **Logs**
- [ ] Look for message: `"Received event: payment_intent.succeeded"`
- [ ] ✅ If visible = Webhook reception working

---

## SECTION 8: Test GA4 Integration (15 minutes)

**File:** `TESTING_GUIDE.md` Part 3

### **8.1 Test GA4 API Directly**

- [ ] Use curl/Postman to send test event to GA4
- [ ] See `TESTING_GUIDE.md` Part 3.1 for exact curl command
- [ ] Expected response: `"validationMessages": []`

### **8.2 Verify GA4 Receives Event**

- [ ] Go to https://analytics.google.com
- [ ] Select property: **My Legacy Continues**
- [ ] **Reports** → **Real-time**
- [ ] After sending test curl, check:
  - [ ] Event count increases
  - [ ] Event "purchase" appears
  - ✅ If visible = GA4 working

---

## SECTION 9: Test Facebook Integration (15 minutes)

**File:** `TESTING_GUIDE.md` Part 4

### **9.1 Test Facebook API Directly**

- [ ] Use curl/Postman to send test event
- [ ] See `TESTING_GUIDE.md` Part 4.1 for exact curl command
- [ ] Expected response: `"events_received": 1`

### **9.2 Verify Facebook Receives Event**

- [ ] Go to https://business.facebook.com
- [ ] **Events Manager**
- [ ] Select pixel: **My Legacy Continues**
- [ ] Go to **"Test Events"** tab
- [ ] After sending test curl, check:
  - [ ] Event appears in list
  - [ ] Shows: Purchase, amount, email
  - ✅ If visible = Facebook working

---

## SECTION 10: End-to-End Test with Real Purchase (30 minutes)

**File:** `TESTING_GUIDE.md` Part 5-6

### **10.1 Make Real Test Purchase**

- [ ] Go to https://mylegacycontinues.com/heritage-book.html
- [ ] Click **"Pay Now"**
- [ ] Use test card: **4242 4242 4242 4242**
  - Expiry: 12/25 (any future date)
  - CVC: 123
  - Email: your-email@example.com
- [ ] Complete payment
- [ ] Should see thank you page

### **10.2 Verify Webhook Fired**

- [ ] Stripe Dashboard → **Developers** → **Webhooks**
- [ ] Click endpoint → **Logs**
- [ ] Check most recent entry:
  - [ ] Event: `payment_intent.succeeded`
  - [ ] Status: `200` or `2xx`
  - [ ] ✅ If shows 200 = Webhook fired

### **10.3 Check Server Processing**

- [ ] Check server logs (Vercel/Firebase):
  - [ ] Message: `"Processing payment: $349 from your-email@example.com"`
  - [ ] Message: `"✅ GA4 event sent successfully"`
  - [ ] Message: `"✅ Facebook conversion event sent successfully"`
  - [ ] ✅ All 3 messages should appear

### **10.4 Verify GA4 Received Purchase**

- [ ] GA4 → **Reports** → **Real-time**
- [ ] Should show:
  - [ ] Event: "purchase"
  - [ ] User: your-email@example.com
  - [ ] Revenue: $349
  - [ ] ✅ All should be visible

### **10.5 Verify Facebook Received Conversion**

- [ ] Facebook → **Events Manager**
- [ ] Select pixel → **Live** tab
- [ ] Should show:
  - [ ] Event: Purchase
  - [ ] Amount: $349
  - [ ] User: your test email
  - [ ] ✅ All should be visible

---

## SECTION 11: Verify Attribution (15 minutes)

**File:** `ATTRIBUTION_GUIDE.md`

- [ ] GA4 → **Reports** → **Acquisition** → **Session source / medium**
- [ ] Should show purchase attributed to traffic source
- [ ] If you used UTM parameters:
  - [ ] Create custom report with `utm_campaign` dimension
  - [ ] Should show your campaign with revenue
- [ ] ✅ Revenue should be attributed to correct source

---

## SECTION 12: Set Up ROI Reporting (30 minutes)

**File:** `ROI_REPORTING_GUIDE.md`

### **12.1 Create Campaign Revenue Report**

- [ ] GA4 → **Reports** → **+Create**
- [ ] Add dimensions:
  - [ ] utm_source
  - [ ] utm_campaign
  - [ ] utm_content
- [ ] Add metrics:
  - [ ] Users, Transactions, Revenue
  - [ ] Transaction Conversion Rate
- [ ] Save as: `Campaign Revenue Performance`

### **12.2 Set Up Automated Reports**

- [ ] Go to your revenue report
- [ ] Click **"Share"** → **"Email"**
- [ ] Set up:
  - [ ] Recipient: Your email
  - [ ] Frequency: Weekly
- [ ] OR: Set up Data Studio dashboard for live data

### **12.3 Collect Ad Spend Data**

- [ ] Go to Facebook Ads Manager
- [ ] Note budget spent on each campaign
- [ ] Go to Google Ads (if using)
- [ ] Note budget spent on each campaign
- [ ] Create spreadsheet to track:
  - Campaign name
  - Ad spend
  - GA4 conversions
  - GA4 revenue
  - Calculated ROAS = Revenue ÷ Ad Spend

---

## SECTION 13: Monitor & Optimize (Ongoing)

### **Weekly:**

- [ ] Check server logs for errors
- [ ] Verify webhook is still receiving events
- [ ] Check GA4 for purchase events coming through
- [ ] Check Facebook for conversions

### **Monthly:**

- [ ] Pull Campaign Revenue Report
- [ ] Calculate ROAS for each campaign
- [ ] Identify top performers (ROAS > 3.0x)
- [ ] Identify underperformers (ROAS < 1.5x)
- [ ] Plan optimizations:
  - [ ] Scale budget on winners
  - [ ] Pause or optimize losers
- [ ] Update budget allocation

### **Quarterly:**

- [ ] Review lifetime value of customers
- [ ] Analyze repeat purchase rate
- [ ] Calculate payback period
- [ ] Plan new campaigns based on data

---

## SECTION 14: Production Checklist

Before considering Phase 10 "complete," verify:

### **Infrastructure**
- [ ] Stripe webhook configured and working
- [ ] Server deployed and accessible
- [ ] All environment variables set and correct
- [ ] No errors in server logs

### **GA4**
- [ ] GA4 API secret created and working
- [ ] Measurement Protocol enabled
- [ ] Test purchase appears in Real-Time dashboard
- [ ] Revenue amounts are correct
- [ ] Attribution to traffic source working

### **Facebook**
- [ ] System user created and token generated
- [ ] Facebook Conversion API working
- [ ] Test purchase appears in Events Manager
- [ ] Email hashing working correctly

### **Testing**
- [ ] Made 2-3 real test purchases
- [ ] All purchases appear in GA4 and Facebook
- [ ] Revenue amounts match Stripe
- [ ] Add-ons tracked separately (if applicable)

### **Reporting**
- [ ] Campaign Revenue Report created
- [ ] Can calculate ROAS for each campaign
- [ ] Automated reports set up
- [ ] Team understands how to read reports

### **Documentation**
- [ ] Team trained on new system
- [ ] Backup of .env file created (stored securely)
- [ ] Runbook created for troubleshooting
- [ ] Emergency contact list if issues arise

---

## Common Issues & Quick Fixes

| Issue | Likely Cause | Solution |
|-------|--------------|----------|
| Webhook not firing | Server URL wrong or not deployed | Check Stripe webhook URL matches deployed server |
| GA4 not receiving | API secret wrong or Measurement Protocol disabled | Verify GA4_API_SECRET, enable Measurement Protocol |
| Facebook not receiving | Access token expired or permissions missing | Regenerate token, verify permissions |
| Revenue not attributed | Email didn't match between sessions | Ensure customer comes from UTM link, captures email |
| Server returning errors | Missing environment variable | Check all 8 env vars are set in Vercel/Firebase |
| Purchase shows $0 value | GA4 API request has formatting error | Check `value` is float, `currency` is uppercase |

---

## Success Criteria

**Phase 10 is complete when:**

✅ Stripe payment triggers webhook on your server  
✅ Server receives webhook and validates signature  
✅ Server sends purchase event to GA4 via Measurement Protocol  
✅ GA4 receives purchase with correct revenue amount  
✅ GA4 attributes revenue to correct traffic source (utm_source/utm_campaign)  
✅ Server sends conversion to Facebook via Conversion API  
✅ Facebook receives conversion with hashed email  
✅ You can run Campaign Revenue Report and see:
  - Traffic source (facebook, google, etc.)
  - Campaign name (heritage_leads, retargeting, etc.)
  - Revenue for each campaign
  - Calculated ROAS for each campaign  
✅ You can make data-driven decisions about ad budget allocation  

---

## Next Steps After Phase 10

1. **Monitor for 2 weeks** to ensure everything works
2. **Collect real customer data** (need 5-10 real purchases for trends)
3. **Launch paid ad campaigns** with proper UTM tracking
4. **Analyze results weekly** and optimize campaigns
5. **Scale winning campaigns** based on ROAS
6. **Plan Phase 11+** based on business goals

---

## Support Resources

| Question | File |
|----------|------|
| How does attribution work? | ATTRIBUTION_GUIDE.md |
| How do I create GA4 reports? | ROI_REPORTING_GUIDE.md |
| How do I test everything? | TESTING_GUIDE.md |
| How do I deploy the server? | SERVER_SIDE_IMPLEMENTATION.md |
| How do I set up GA4? | GA4_MEASUREMENT_PROTOCOL.md |
| How do I set up Facebook? | FACEBOOK_CONVERSION_API_SETUP.md |
| What's the big picture? | PHASE_10_OVERVIEW.md |

---

## Timeline

**Week 1:**
- Day 1: Stripe webhook + Server deployment (1 hour)
- Day 2: GA4 + Facebook setup (1 hour)
- Day 3: Testing (2 hours)
- Day 4: ROI reporting setup (1 hour)

**Week 2-4:**
- Make 5-10 real test purchases
- Verify everything works
- Gather baseline data
- Train team

**Week 4+:**
- Launch real ad campaigns
- Monitor and optimize daily
- Make data-driven budget decisions
- Scale profitable campaigns

---

**Phase 10 complete. You now have full revenue attribution from ads to actual sales.**

**Revenue tracking enabled. ROI optimization enabled. Profitable scaling enabled.**
