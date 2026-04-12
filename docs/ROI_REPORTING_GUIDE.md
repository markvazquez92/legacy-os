# ROI REPORTING GUIDE
## Set Up GA4 Dashboards to Track Revenue by Campaign

**Time to complete:** 30 minutes  
**Difficulty:** Easy (configuration, no coding)  
**Purpose:** Build reports that show which campaigns generate revenue

---

## What You'll Build

By end of this guide, you'll have:

```
Report: Campaign Revenue Performance
──────────────────────────────────────────────────────────────
Campaign           | Cost   | Users | Orders | Revenue  | ROAS
──────────────────────────────────────────────────────────────
heritage_leads     | $500   | 147   | 5      | $1,745   | 3.5x
retargeting        | $200   | 89    | 1      | $349     | 1.7x
search_branded     | $300   | 234   | 2      | $398     | 0.3x
email_newsletter   | $0     | 45    | 2      | $698     | ∞
──────────────────────────────────────────────────────────────
TOTAL              | $1,000 | 515   | 10     | $3,190   | 3.2x
```

This shows **exactly** which campaigns work and which don't.

---

## Step 1: Create Custom Report in GA4

### **1.1 Access GA4 Reporting**

1. Go to https://analytics.google.com
2. Select your property: **My Legacy Continues (G-XQJ8KPVZX9)**
3. Left sidebar → **Reports** → **Report Snapshot**
4. You'll see pre-built reports (Acquisition, Conversion, etc.)

### **1.2 Create New Custom Report**

1. Left sidebar → **Reports** (expand if collapsed)
2. Near top, click **+ Create** (or **+ New Report**)
3. Drag to add dimensions and metrics (see Step 2)

---

## Step 2: Build the Revenue by Campaign Report

### **2.1 Add Dimensions**

Dimensions are "categories" that group your data.

1. Click **Dimensions** section
2. Add these three dimensions in order:
   - `utm_source` (traffic source: facebook, google, email)
   - `utm_campaign` (campaign name: heritage_leads, retargeting)
   - `utm_content` (creative identifier: creative_001, banner_top)

**Result:** Data will be grouped by source → campaign → creative

### **2.2 Add Metrics**

Metrics are "numbers" that measure performance.

1. Click **Metrics** section
2. Add these metrics (click **Add metric** for each):

#### **Core Metrics:**
- **Users** - Number of unique visitors from this campaign
- **User Engagement Rate** - % of users who did something (form, click, etc.)
- **Conversions** - Number of conversion events (form submissions, purchases)
- **Conversion Rate** - % of users who converted

#### **Revenue Metrics:**
- **Transactions** - Number of purchase transactions
- **Transaction Conversion Rate** - % of users who purchased
- **Revenue** - Total revenue from transactions
- **Average Order Value** - Revenue ÷ Transactions

#### **Engagement Metrics:**
- **Sessions** - Number of user sessions
- **Bounce Rate** - % of sessions that left without action
- **Events per Session** - Average actions per session

### **2.3 Configure Report Display**

1. **Rows:** Select `utm_campaign` to show one row per campaign
2. **Columns:** Metrics will auto-arrange
3. **Sorting:** Sort by `Revenue` (descending) to see best performers first
4. **Date Range:** Last 30 days

### **2.4 Save Your Report**

1. Click **Save Report** (top right)
2. Name it: `Campaign Revenue Performance`
3. Click Save
4. Report now appears in left sidebar under "Reports"

---

## Step 3: Understand Your Report

### **3.1 Example Report**

```
Campaign Performance Report (Last 30 Days)
═══════════════════════════════════════════════════════════════
Campaign           Users  Sessions  Transactions  Revenue   ROAS
───────────────────────────────────────────────────────────────
heritage_leads      147     152         5        $1,745    3.5x
retargeting          89      94         1        $349      1.7x
search_branded      234     245         2        $398      0.3x
email_newsletter     45      47         2        $698       ∞
direct               98     104         0        $0         0.0x
───────────────────────────────────────────────────────────────
TOTAL              613     642        10       $3,190     3.2x
```

### **3.2 How to Read Each Column**

| Column | Meaning | Insight |
|--------|---------|---------|
| **Campaign** | Campaign name | Which campaign? |
| **Users** | Unique visitors | How much traffic? |
| **Sessions** | Number of visits | Returning visitors? |
| **Transactions** | Purchases made | How many bought? |
| **Revenue** | Total money | Total sales |
| **ROAS** | Return on Ad Spend | For every $1 spent, got $X back |

### **3.3 What Makes a Good Campaign?**

**Low Users, High Revenue:** 👍 Excellent targeting
- Few people clicked, but they bought
- Example: heritage_leads (147 users → 5 sales = 3.4% conversion)

**High Users, Low Revenue:** 👎 Poor targeting
- Many clicked, few bought
- Example: search_branded (234 users → 2 sales = 0.9% conversion)

**Zero Revenue:** ⚠️ Not optimized yet
- People visited but didn't buy
- Example: direct traffic (98 users, $0 revenue)

---

## Step 4: Calculate ROI & CPA Metrics

### **4.1 Get Ad Spend Data from Facebook/Google**

These metrics aren't automatically in GA4. You need to manually add costs from your ad platforms:

#### **Facebook Ads Manager:**
1. Go to https://ads.facebook.com
2. Select your campaign
3. **Results** column shows: Spend, Conversions
4. Example:
   ```
   Campaign: Heritage Book Leads
   Spend: $500
   Conversions: 25 (form submissions)
   ```

#### **Google Ads:**
1. Go to https://ads.google.com
2. Select campaign
3. **Cost** column shows: Ad spend
4. Example:
   ```
   Campaign: Search - Heritage Book
   Cost: $300
   Conversions: 2 (purchases)
   ```

### **4.2 Calculate Metrics Manually**

Use GA4 revenue data + ad spend to calculate:

#### **Cost Per Acquisition (CPA)**
```
CPA = Ad Spend ÷ Conversions

Example (Heritage Book campaign):
  Ad Spend: $500
  Conversions: 5 purchases
  CPA = $500 ÷ 5 = $100 per purchase
  
Interpretation: 
  You spent $100 in ads to get each customer
```

#### **Return on Ad Spend (ROAS)**
```
ROAS = Revenue ÷ Ad Spend

Example (Heritage Book campaign):
  Revenue: $1,745
  Ad Spend: $500
  ROAS = $1,745 ÷ $500 = 3.5x
  
Interpretation:
  For every $1 spent on ads, you got $3.50 back
  Profit: $3.50 - $1.00 = $2.50 per $1 spent
```

#### **Profit/Loss**
```
Net Profit = Revenue - Ad Spend

Example (Heritage Book campaign):
  Revenue: $1,745
  Ad Spend: $500
  Net Profit: $1,745 - $500 = $1,245
```

#### **Break-Even Ad Spend**
```
Break-Even Cost = Average Order Value × Number of Conversions

Example:
  Average Order Value: $349
  Current conversions: 5
  If you had zero conversions:
  You'd spend $500 with $0 revenue = -$500 loss
  
  To break even, you'd need:
  $500 ÷ $349 = 1.4 conversions
  You only need 1-2 sales to cover all ad costs
```

### **4.3 Create a Campaign Performance Spreadsheet**

Use Google Sheets to track all campaigns (template below):

```
Campaign Performance Dashboard
═══════════════════════════════════════════════════════════════
Campaign      | Ad Spend | Orders | Revenue  | CPA  | ROAS | Status
──────────────────────────────────────────────────────────────
heritage_    | $500    | 5     | $1,745  | $100 | 3.5x | 🟢 SCALE
leads        |         |       |        |      |      |
──────────────────────────────────────────────────────────────
retargeting  | $200    | 1     | $349   | $200 | 1.7x | 🟡 TEST
──────────────────────────────────────────────────────────────
search_      | $300    | 2     | $398   | $150 | 0.3x | 🔴 PAUSE
branded      |         |       |        |      |      |
──────────────────────────────────────────────────────────────
TOTAL        | $1,000  | 8     | $2,492 | $125 | 2.5x |
```

---

## Step 5: Identify Winning Campaigns

### **5.1 Campaign Scoring Framework**

Use ROAS to decide what to do with each campaign:

| ROAS | Status | Action |
|------|--------|--------|
| **4.0x+** | 🟢 Excellent | **SCALE** - Increase budget 2-3x |
| **3.0-4.0x** | 🟢 Good | **SCALE** - Increase budget 1.5x |
| **2.0-3.0x** | 🟡 Acceptable | **MAINTAIN** - Keep current budget |
| **1.0-2.0x** | 🟡 Marginal | **OPTIMIZE** - Test new creatives |
| **0-1.0x** | 🔴 Losing | **PAUSE** - Stop spending |

### **5.2 Example Analysis**

```
Current Campaigns:

Heritage Book Leads
  ROAS: 3.5x ✓ GOOD
  Action: SCALE from $500 to $1,000/month

Retargeting
  ROAS: 1.7x ⚠️ MARGINAL
  Action: OPTIMIZE - test new ad creatives

Search Branded
  ROAS: 0.3x ✗ LOSING
  Action: PAUSE - reallocate budget to heritage_leads

Result:
  Old budget allocation: heritage=$500, retargeting=$200, search=$300
  New budget allocation: heritage=$1,000, retargeting=$100, search=$0
  Reallocate $300 from search to heritage
  New total: $1,200 (up from $1,000)
  Expected new revenue: $1,200 × 3.5 = $4,200 (up from $1,745)
```

---

## Step 6: Track Lifetime Value (Advanced)

### **6.1 The Problem with Single-Purchase Metrics**

A customer who buys once might buy again:

```
Month 1:
  Customer buys Heritage Book: $199
  Ad cost: $100
  ROAS: 1.99x (barely profitable)
  
Months 2-6:
  Same customer:
    - Buys Photo Research: $150
    - Buys Oral History: $299
    - Refers friend who buys: $199
  Total repeat/referral revenue: $648

Lifetime Value Analysis:
  Total revenue from customer: $199 + $648 = $847
  Ad cost: $100
  Lifetime ROAS: 8.47x (EXTREMELY profitable)
```

### **6.2 Calculate Lifetime Value (LTV)**

**Formula:**
```
LTV = Average Order Value × Average Repeat Purchases + Referral Revenue
```

**Example (Using 3 months of data):**
```
Metric                          | Data
────────────────────────────────────────
Average Order Value             | $349
Repeat Purchase Rate            | 15% (1.5 people per 10 buy again)
Average Repeat Order Value      | $200 (lower than first order)
Repeat Purchases per Customer   | 0.15 × 1 = 0.15
Referral Value (indirect)       | $100 (estimated value of referrals)

LTV = ($349 × 1.15) + $100 = $501.35
```

### **6.3 Use LTV to Justify Higher Ad Spend**

```
Traditional Analysis (first purchase only):
  Heritage Book: $199
  Ad Cost: $100
  ROAS: 1.99x (marginal, maybe pause)
  
Lifetime Value Analysis:
  Average Customer LTV: $501
  Ad Cost: $100
  LTV ROAS: 5.01x (excellent, SCALE campaign)
  
Conclusion: Campaign is actually highly profitable
             when considering repeat purchases
```

---

## Step 7: Set Up Automated Reports

### **7.1 Email Reports from GA4**

1. In GA4, go to your **Campaign Revenue Performance** report
2. Click **Share** (top right)
3. Select **Email**
4. Configure:
   - **Recipients:** Your email
   - **Frequency:** Weekly or Monthly
   - **Format:** Summary + charts

### **7.2 Integrate with Google Sheets**

Connect GA4 directly to Google Sheets for live updates:

1. Open Google Sheets
2. Create new sheet
3. Menu → **Extensions** → **AppSheet** → **Set up**
4. Connect GA4 property
5. Sheet auto-refreshes daily with latest data

### **7.3 Create a Dashboard in Data Studio**

1. Go to https://datastudio.google.com
2. Create new report
3. Connect GA4 data source
4. Add these visualizations:
   - **Scorecard:** Total Revenue, Total Users, Total Conversions
   - **Table:** Campaigns with Revenue, ROAS, CPA
   - **Bar Chart:** Revenue by Campaign
   - **Line Chart:** Revenue trend over 30 days
   - **Pie Chart:** Revenue distribution by source

---

## Step 8: Monthly Review Process

### **Every Month:**

1. **Pull Report:** Go to Campaign Revenue Performance report
2. **Add Ad Spend:** Input costs from Facebook/Google Ads
3. **Calculate Metrics:** Compute ROAS, CPA, Profit
4. **Analyze:** Which campaigns won/lost?
5. **Plan Actions:** Scale, optimize, or pause campaigns
6. **Budget Allocation:** Move budget to winners
7. **Track Results:** Check next month if changes worked

### **Monthly Checklist**

- [ ] Generated GA4 revenue report
- [ ] Collected ad spend data from all platforms
- [ ] Calculated ROAS for each campaign
- [ ] Identified top 3 performers
- [ ] Planned optimization for weak campaigns
- [ ] Updated budget allocation
- [ ] Set alerts for anomalies

---

## Troubleshooting

### **"No revenue showing in GA4"**

**Problem:** Purchase events aren't reaching GA4

**Solutions:**
1. Check webhook is running (see TESTING_GUIDE.md)
2. Verify GA4_API_SECRET is correct
3. Check firewall isn't blocking requests
4. Wait 5-10 minutes (GA4 has latency)
5. Check GA4 Real-Time dashboard (not historical reports)

### **"Revenue is there but no utm_source"**

**Problem:** Purchases aren't attributed to campaign source

**Solutions:**
1. Check customer came from UTM link (has utm_source in URL)
2. Verify GA4 script captured UTM parameters
3. Ensure email matched between sessions
4. Wait 24 hours for attribution processing
5. Check GA4 Attribution Settings (may need model change)

### **"ROAS is very low but we know campaign works"**

**Solutions:**
1. Look at Lifetime Value instead of first purchase
2. Check attribution window (may be too short - 30 days)
3. Verify all revenue is reaching GA4 (may be missing orders)
4. Check if customers bought on different device/browser

### **"Ad spend doesn't match GA4 conversions"**

**Common reasons:**
- Ad impressions ≠ clicks ≠ conversions
- Conversion definitions differ between platforms
- Time zone differences (GA4 vs. ad platform)
- Attribution window differences

**Solution:**
- Focus on ROAS (revenue ÷ spend) rather than conversion count
- Compare month-to-month trends, not absolute numbers

---

## Key Reports to Build

| Report Name | Purpose | How to Build | Refresh |
|-------------|---------|-------------|---------|
| **Campaign Revenue** | See revenue by campaign | Dimensions: utm_campaign, Metrics: Revenue, Transactions | Weekly |
| **Traffic Source** | See revenue by platform | Dimensions: utm_source, Metrics: Revenue, Users | Weekly |
| **Conversion Funnel** | See drop-off by step | Events: page_view → form_submission → purchase | Daily |
| **Product Performance** | See revenue by product | Custom dimension: product_id, Metrics: Revenue | Weekly |
| **Time Series** | See revenue trend | Date range: 30 days, Metrics: Daily Revenue | Daily |

---

## Success Metrics

**Goal:** Build a reporting system that answers:
- ✅ Which campaigns generate revenue?
- ✅ What's the ROI of each campaign?
- ✅ Where should I allocate my ad budget?
- ✅ Are customers repeating purchases?
- ✅ What's my overall profitability?

**Outcome:** Data-driven campaign optimization instead of guessing.

---

**You now have complete revenue visibility. Scale profitable campaigns with confidence.**
