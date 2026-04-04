---
name: tag-integration
description: Handles QR tag purchases for My Legacy Continues — creates digital profile pages, generates QR codes, and deploys them live. Use this skill whenever a customer buys a Safety Registry Tag ($35), Cemetery Tribute Plaque ($149), Full Legacy Bundle ($199), or Contractor Bundle ($650), or when Bear says "set up their profile", "create a QR page", "build the profile for [name]", "generate the QR", "make a contractor page", "set up a memorial", "pet profile for [name]", or any time a digital profile needs to be created and linked to a QR tag.
---

# Tag Integration — My Legacy Continues

## Role
You create and deploy digital profiles that live at permanent URLs on mylegacycontinues.com. Each profile is linked to a physical QR tag. When someone scans the tag, they land on this page.

These pages need to work forever — they're the "permanent" part of "Permanent Digital Assets | Zero Subscriptions."

---

## Profile Types by Product

| Product | Profile Type | Template Base | URL Pattern |
|---------|-------------|---------------|-------------|
| Safety Registry Tag ($35) | Pet profile | rescue-profile.html | `/[petname]-profile.html` |
| Cemetery Tribute Plaque ($149) | Memorial profile | heritage-book.html (adapted) | `/[lastname]-memorial.html` |
| Full Legacy Bundle ($199) | Heritage vault | portal.html | `/[lastname]-vault.html` |
| Contractor Bundle ($650) | Business portfolio | trade-profile.html | `/[businessname]-profile.html` |

---

## Step 1: Collect Profile Information

### Pet Profile (Safety Tag)
- Pet name
- Breed, age, weight, color, markings
- Owner name and contact phone/email
- Vet name and contact (optional)
- Medical notes (vaccines, conditions, medications)
- Photo (if provided)
- Any notes for finder ("friendly with kids", "shy around strangers")

### Memorial Profile (Cemetery Plaque)
- Full name of the deceased
- Birth date / death date
- Hometown
- Occupation or life's work
- Family members (spouse, children, siblings — whatever they share)
- A short life story or tribute (ask for 2–3 sentences if not provided)
- Photo (if provided)
- Inscription they want displayed

### Heritage Vault (Full Legacy Bundle)
- Family surname(s)
- Origin region
- Family story or known history
- Current family members they want to include
- Customer name and any personal bio they want
- Photo(s)
- Connect to `heritage-research` output when available

### Contractor Portfolio (Contractor Bundle)
- Business name
- Owner name
- Trade/specialty (concrete pumping, plumbing, electrical, masonry, etc.)
- Services offered (list)
- Service area
- Years in business
- License number (if they share it)
- Phone, email, website (if any)
- Photo of work, crew, or equipment
- Any testimonials or notable projects

---

## Step 2: Build the Profile Page

Use the brand system — Obsidian & Gold, Cinzel + Montserrat. Every profile page must:
- Load fast (no unnecessary external scripts)
- Look professional on mobile (responsive)
- Have a clear CTA (for contractor pages: "Get a Quote"; for memorial: "Leave a Message"; for pet: "I Found This Pet — Contact Owner")
- Include the My Legacy Continues footer: "A permanent digital asset by mylegacycontinues.com"

### Contractor Portfolio Page Structure
1. Hero: Business name, trade, "Serving [service area]"
2. About section: Owner name, years experience, what sets them apart
3. Services list (cards or bullets)
4. Service area
5. Contact CTA (phone + email + "Get a Quote" button)
6. Footer with MLC branding

### Pet Profile Page Structure
1. Hero: Pet name + photo
2. Owner contact prominently displayed ("If you found me, call [name] at [phone]")
3. Pet details (breed, age, color, markings)
4. Medical notes
5. "I Found This Pet" button (mailto link to owner email)
6. MLC footer

### Memorial Profile Page Structure
1. Hero: Full name + dates + photo
2. Life tribute (the story they provided)
3. Family section
4. Inscription (if provided)
5. "Leave a Memory" (mailto or Formspree contact)
6. MLC footer

### Heritage Vault Page Structure
1. Hero: Surname + origin
2. Family timeline / history highlights
3. Ancestor profiles (cards)
4. Migration route (if researched)
5. Living family section (if customer wants it)
6. MLC footer + "Order Your Own Heritage Book" CTA

---

## Step 3: Generate QR Code

```python
import qrcode
from PIL import Image

url = "https://mylegacycontinues.com/[filename].html"
qr = qrcode.QRCode(version=1, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)
img = qr.make_image(fill_color="#d97706", back_color="#0c0a09")
img.save("[name]-qr.png")
```

Install if needed: `pip install qrcode pillow --break-system-packages`

Save QR PNG to `/sessions/pensive-dreamy-einstein/mnt/legacy 2/[name]-qr.png`

---

## Step 4: Deploy

Save the HTML file to the legacy-os clone and push via the `vault-architect` workflow:
1. Copy HTML to `/sessions/pensive-dreamy-einstein/legacy-os-fresh/`
2. Commit and push using git with PAT (ask Bear for PAT if not cached)
3. Confirm push via GitHub API

Live URL: `https://mylegacycontinues.com/[filename].html`

---

## Step 5: Deliver to Customer

Send via Gmail MCP:

**Contractor Bundle:**
```
Subject: Your Digital Portfolio Is Live — Here's Your Link

Hi [First Name],

Your digital portfolio is live. Share this link anywhere:
https://mylegacycontinues.com/[businessname]-profile.html

Your 500 metal QR cards are being processed. They'll all link directly to this page. Anyone who scans them lands on your portfolio.

If you want to update anything — services, photos, contact info — just reply.

Long live your legacy,
Bear Vazquez | My Legacy Continues
```

**Pet Safety Tag:**
```
Subject: Your Pet's Profile Is Live — [Pet Name]

Hi [First Name],

[Pet Name]'s safety profile is live:
https://mylegacycontinues.com/[petname]-profile.html

Your QR tag links to this page. If [Pet Name] ever gets lost and someone scans it, they'll see everything they need to return them safely.

Attached is the QR image — you can also print it as backup.

Long live your legacy,
Bear Vazquez | My Legacy Continues
```

**Memorial:**
```
Subject: [Name]'s Memorial Profile Is Live

Hi [First Name],

[Name]'s memorial is live:
https://mylegacycontinues.com/[lastname]-memorial.html

Your plaque will link to this page. Anyone who visits and scans it will be able to read their story and leave a memory.

If you'd like to add photos, update the tribute, or make any changes, just reply.

Long live your legacy,
Bear Vazquez | My Legacy Continues
```

---

## Summary Output

> "Tag integration complete: [Profile type] for [Name] is live at mylegacycontinues.com/[filename].html. QR code saved to your folder. Confirmation email sent to [customer email]."
