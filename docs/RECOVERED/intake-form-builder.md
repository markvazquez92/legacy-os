---
name: intake-form-builder
description: Builds the post-purchase intake forms for My Legacy Continues orders. Creates product-specific HTML intake forms that collect the information needed to fulfill each order, wired to the Formspree endpoint. Trigger this skill whenever an order has been placed and intake information needs to be collected, whenever user says "build the intake form", "create the order form for [product]", "customer needs to fill out their info", or when setting up a new product's fulfillment flow. Formspree endpoint is always https://formspree.io/f/xzzpqjle — never change this.
---

# Intake Form Builder — My Legacy Continues

## Role
Build the intake form that customers fill out AFTER paying. Each product needs different information. The form submits to Formspree and emails Bear directly.

## Critical Rule
**Formspree endpoint:** `https://formspree.io/f/xzzpqjle`
Never modify this URL. It's the only confirmed working endpoint.

## Product-Specific Forms

---

### Heritage Book Intake Form

**Fields:**
- Full name (required)
- Email (required)
- Phone
- Primary family surname (required) + spelling variants they know
- Secondary family surname (if applicable)
- Countries/states of family origin (required)
- Approximate decade family arrived in US
- Any ancestor names/dates you already know (textarea)
- Any family stories passed down (textarea)
- Customer's current occupation (for DNA of Excellence connection)
- How did you hear about us?
- Any specific questions or requests (textarea)

**Hidden field:** `_subject` = "Heritage Book Order — New Intake"

---

### Pet Tag Intake Form

**Fields:**
- Pet's full name (required)
- Species (dog/cat/other)
- Breed
- Age
- Your name (required) — shown on profile as "Owner"
- Your phone number (required) — tap-to-call button
- Display preference: show number publicly OR use MLC privacy relay
- Vet name and phone (required)
- Current medications (textarea)
- Allergies (textarea)
- Personality notes — how should a stranger approach? (textarea)
- Any special handling instructions
- Photo upload note: "Reply to confirmation email with 1–3 photos"

**Hidden field:** `_subject` = "Pet Tag Order — New Intake: [Pet Name]"

---

### Cemetery Plaque Intake Form

**Fields:**
- Your name (required)
- Your email (required)
- Loved one's full name (required)
- Date of birth
- Date of passing (required)
- Cemetery name and location
- Plot or section number (if known)
- Short bio or life summary (textarea — required)
- Their favorite songs (up to 5 — for playlist)
- Family members to list on profile
- Photo upload note: "Reply to confirmation email with photos"
- Special requests (textarea)

**Hidden field:** `_subject` = "Cemetery Plaque Order — New Intake"

---

### Business Profile Intake Form

**Fields:**
- Business owner full name (required)
- Business name (required)
- License number (required — displayed on profile for credibility)
- Years in business
- Primary trade/specialty (required)
- Service area (cities/regions covered)
- Phone number for tap-to-call (required)
- Email for contact form
- Website (if any)
- Why did you start this business? (textarea — required, this is the story)
- Your best 3 jobs or proudest moments (textarea)
- Any certifications or awards
- Photo upload note: "Reply with 3–10 photos of your best work"

**Hidden field:** `_subject` = "Business Profile Order — New Intake"

---

## Form Design Spec
Match MLC brand:
- Background: `#F4EFE6` (parchment) for the form page
- Form card: white `#FFFFFF`
- Borders: `rgba(201,168,76,0.3)` gold
- Submit button: forest green `#1E2D1F` with gold text
- Cinzel for headings, Lora for labels and body
- Mobile responsive — full-width on small screens

## File Naming
- `heritage-intake.html`
- `pet-tag-intake.html`
- `cemetery-intake.html`
- `business-intake.html`

## After Building
All 4 forms should be pushed to GitHub and linked from:
1. The confirmation email (email-confirmation-builder skill)
2. The product pages on the main site
3. The Stripe payment success redirect (if configured)

Tell Bear: "Push all 4 to GitHub. Then update each product page's 'Order' button to link to the intake form after payment."
