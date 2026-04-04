---
name: order-tracker
description: Tracks and manages all open My Legacy Continues orders. Maintains a running list of every customer order — name, product, status, what's been delivered, what's still needed. Trigger this skill whenever Bear asks "what orders are open", "where are we on [customer name]", "what do I still need from [customer]", "show me active orders", or "update the status on [order]". Also use at the start of any work session to orient on what needs to get done.
---

# Order Tracker — My Legacy Continues

## Role
You are the operations board. You track every open order, its status, and what action is needed next. This is how Bear runs the business like a pro — nothing falls through the cracks.

## Order Status States

| Status | Meaning |
|--------|---------|
| INTAKE PENDING | Customer paid — waiting for them to fill out intake form |
| RESEARCH IN PROGRESS | Intake received — running heritage research or building profile |
| DRAFT READY | Deliverables built — needs Bear review before sending |
| SENT TO CUSTOMER | Draft sent for customer review/approval |
| REVISION REQUESTED | Customer sent feedback — needs update |
| SENT TO JORGE | Book sent to Jorge for final layout |
| PRINTING | Book approved and ordered on Blurb.com |
| SHIPPED | Physical product shipped to customer |
| LIVE | Digital profile is live on the site |
| COMPLETE | All deliverables delivered, customer happy |

## Order Log Format

When tracking orders, maintain this structure:

```
ORDER LOG — My Legacy Continues
Last updated: [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORDER #001
Customer: [Full Name]
Product: [Heritage Book / Pet Tag / Cemetery Plaque / Business Profile]
Date Paid: [Date]
Status: [Status from above]
Intake received: Yes / No
What's needed next: [One clear action]
Notes: [Any relevant details]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORDER #002
...
```

## How to Use This Skill

**At start of work session:**
"Show me all open orders" → Display full log, highlight what needs action today

**When a new order comes in:**
"New order — [Name], [Product]" → Add to log as INTAKE PENDING, trigger email-confirmation-builder

**When intake form arrives (Formspree email):**
"Got intake from [Name]" → Update status to RESEARCH IN PROGRESS, list what was provided, flag any missing info

**When research is done:**
"Research done for [Name]" → Update to DRAFT READY, list deliverables completed

**When customer approves:**
"[Name] approved the book" → Update to SENT TO JORGE (Heritage Book) or LIVE (digital products)

## Priority System

Flag these situations immediately:
- Any order in INTAKE PENDING for more than 3 days → Follow up with customer
- Any order in RESEARCH IN PROGRESS for more than 7 days → Check what's blocking
- Any order in SENT TO CUSTOMER for more than 5 days → Follow up for approval

## Current Order Log

(Empty — will populate as orders come in)

## Integration with Other Skills
- New order → run email-confirmation-builder
- Intake received → run heritage-research or pet-tag-profile-builder
- Draft ready → run heritage-book-assembler (for books) or qr-profile-builder
- Live → run qr-code-generator to confirm QR works
