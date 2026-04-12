# Rescue Partner Donation Program

## Overview

My Legacy Continues donates **10% of all Pet Tag sales** to rescue partner organizations. This document tracks the program, calculates donations, and manages partnerships.

---

## Current Partner: Underdog Heroes Inc.

**Organization:** Underdog Heroes Inc.  
**Founder:** Shoshi Gamliel  
**Location:** Riverside, CA  
**EIN:** 84-4188282  
**Website:** https://underdogheroes.org  
**Mission:** Real responsible rescue for dogs the system wrote off. Specializes in pit bulls, bully breeds, and dogs other rescues won't take.

**Impact (as of April 2026):**
- 312+ dogs rescued since 2020
- 287 successfully adopted
- 25+ currently in foster care
- 45,000+ Instagram followers
- Featured in Newsweek, Yahoo News, and regional media

**Partnership with My Legacy Continues:**
- Permanent dog profiles on mylegacycontinues.com
- Rescue intake form integration
- 10% of pet tag revenue donated monthly
- Co-branded marketing and promotion
- Joint testimonials and success stories

---

## Donation Calculation Process

### Monthly Calculation

**1. Identify Pet Tag Sales**

Pet Tag products sold:
- Pet Tag Basic ($24.99)
- Pet Tag Premium ($49.99)

Check these revenue sources:
- Stripe transaction history (search for orders from `pet-tag.html`)
- Formspree submissions from pet-tag product page
- Any manual sales or refunds to subtract

**2. Calculate 10% Donation**

```
Total Pet Tag Revenue (Month) = $X
Donation Amount (10%) = $X × 0.10
```

**Example:**
- January Pet Tag Sales: $1,200
- Donation to Underdog Heroes: $1,200 × 0.10 = **$120**

**3. Track in Spreadsheet**

See **Donation Tracking Spreadsheet** section below for template.

**4. Process Payout**

- Calculate on last day of month
- Process payout by 5th of following month
- Use Stripe payout to Underdog Heroes bank account
- Document in ledger with date and reference number

### Annual Reconciliation

- Compile all monthly donations
- Cross-check against Stripe revenue reports
- Verify with Underdog Heroes bookkeeper
- File documentation for tax purposes

---

## Donation Tracking Spreadsheet Template

| Month | Pet Tag Sales | 10% Donation | Payout Date | Status | Notes |
|-------|---|---|---|---|---|
| January 2026 | $1,200 | $120 | 2/5/2026 | ✓ Sent | — |
| February 2026 | $1,450 | $145 | 3/5/2026 | ✓ Sent | Includes bundle sales |
| March 2026 | $2,100 | $210 | 4/5/2026 | ✓ Sent | Bundle promotion boost |
| April 2026 | $1,800 | $180 | 5/5/2026 | Pending | — |
| **2026 YTD** | **$6,550** | **$655** | — | — | — |

---

## Stripe Integration Notes

### Finding Pet Tag Revenue

1. Log into Stripe Dashboard
2. Navigate to Transactions / Invoices
3. Filter by:
   - Time period (e.g., January 1-31)
   - Product name or description: "Pet Tag" or "QR Tag"
   - Status: Successful payments only (exclude failed, refunded)
4. Sum total revenue
5. Calculate 10% and record

### Setting Up Automated Tracking (Future)

When scaling to multiple products:
- Use Stripe API to export monthly revenue by product
- Automate calculation in spreadsheet
- Set calendar reminder for monthly payout

---

## Partnership Agreement Terms

### Underdog Heroes Responsibilities:
- ✅ Provide monthly impact metrics (dogs rescued, adopted, in care)
- ✅ Send testimonials from adopters for marketing
- ✅ Feature My Legacy Continues as primary partner on their site
- ✅ Participate in co-marketing and social media
- ✅ Provide receipts/documentation for donations

### My Legacy Continues Responsibilities:
- ✅ Donate 10% of pet tag revenue (no cap, no minimum)
- ✅ Feature Underdog Heroes on website prominently
- ✅ Link to adoption/fostering/volunteering opportunities
- ✅ Share partner success stories in marketing
- ✅ Process donations by 5th of each month
- ✅ Provide monthly donation reports

---

## Future Partners (Framework)

To add additional rescue partners:

1. **Qualification Criteria:**
   - 501(c)(3) nonprofit status
   - Track record of animal rescue (minimum 2 years)
   - Clear mission alignment with My Legacy Continues
   - Willing to collaborate on storytelling

2. **Partnership Structure:**
   - Can allocate different percentages by product
   - Example: 10% pet tag sales to Dog Rescue A, 5% to Dog Rescue B
   - Total never exceeds 10% of revenue

3. **Addition Process:**
   - Board approval (if applicable)
   - Written partnership agreement
   - Update website with partner showcase
   - Begin tracking donations separately

4. **Partner Showcase:**
   - /partners.html page with all active rescues
   - Monthly impact metrics for each
   - Links to their websites
   - Adopt/volunteer CTAs

---

## Monthly Reporting

### Internal Report (My Legacy Continues Team)

**Template:**

```
MONTHLY DONATION REPORT — [Month] [Year]

Pet Tag Sales: $X,XXX
Donation Amount (10%): $XXX
Payout Status: [Sent / Pending]
Payout Date: [Date]

Underdog Heroes Impact This Month:
- Dogs rescued: X
- Dogs adopted: X
- Current in foster: X

Marketing/Community Activity:
- [Social posts, features, testimonials shared]

Notes:
- [Any anomalies, special circumstances]
```

### Partner Report (To Underdog Heroes)

**Send by 5th of each month:**

```
My Legacy Continues — Monthly Donation
Month: [Month] [Year]
Amount: $XXX (10% of pet tag revenue)
Reference: [Stripe transaction ID]

Thank you for your partnership!
```

---

## Promotional Materials & Messaging

### Website Footer
"10% of every pet tag sale supports rescue dogs finding forever homes."

### Pet Tag Product Page
"Your purchase helps rescue dogs. We partner with Underdog Heroes to provide permanent profiles and adoption support for rescued dogs."

### Homepage Rescue Partner Section
**Featured Partner: Underdog Heroes**
- 312+ dogs rescued since 2020
- 287 in forever homes
- 25+ in current foster care
- [Link: Learn More About Underdog Heroes]
- [Link: Submit a Dog for Rescue]
- [Link: Adopt or Foster]

### Social Media Template
"This month, we donated $XXX to @underdogheroes_ supporting their mission. That's X dogs closer to forever homes. Your legacy helps rescue dogs thrive. 🐾"

---

## Tax Documentation

### IRS Requirements

- Maintain records of all donations
- Get receipts from Underdog Heroes
- File Form 990-N (e-postcard) if non-profit
- Document program purpose and impact

### Record Retention

- Keep all Stripe reports (3+ years)
- Keep donation receipts (7 years minimum)
- Keep partnership agreement
- Keep monthly impact metrics

---

## Troubleshooting & FAQs

**Q: Can we adjust the percentage?**
A: Yes, with partner approval. Current: 10% of pet tag sales. Could be 5-20% depending on business model.

**Q: What if pet tag sales are low one month?**
A: Donation scales with sales. Example: $100 sales = $10 donation. No minimum or guaranteed amount.

**Q: How do we handle refunds?**
A: Subtract refunded amounts from pet tag revenue before calculating 10%.

**Q: Can we add more rescue partners?**
A: Yes. Consider allocating 10% between multiple partners or increasing to 15% total donation. Always maintain 501(c)(3) status requirement.

**Q: What if Underdog Heroes changes location/contact?**
A: Update this document and notify accounting team. Verify new banking info before payout.

---

## Contact Information

**Underdog Heroes:**
- Shoshi Gamliel, Founder
- adopt@underdogheroes.org
- EIN: 84-4188282
- Bank: [To be added when partnership is formalized]

**My Legacy Continues:**
- Bear (Founder)
- hello@mylegacycontinues.com
- (805) 863-3794

---

## Document History

| Date | Update | Author |
|------|--------|--------|
| April 12, 2026 | Initial documentation | Claude |
| — | — | — |

---

**Last Updated:** April 12, 2026  
**Next Review:** May 12, 2026  
**Program Started:** April 2026
