---
name: qr-code-generator
description: Generates QR codes for My Legacy Continues profile pages, pet tags, business profiles, cemetery plaques, and heritage profiles. Produces downloadable QR code PNGs and embeds them into HTML pages. Trigger this skill whenever a profile page has been built and needs a QR code, whenever user says "generate a QR code", "make a QR for [URL]", "add QR to the profile", "I need a QR code for [page]", or when a physical product (pet tag, plaque, business card) needs a scannable code linked to a digital profile.
---

# QR Code Generator — My Legacy Continues

## Role
Generate a scannable QR code that links to a profile page. Every physical MLC product ships with a QR code. Every digital profile needs one too.

## When This Runs
After any profile page is built:
- Heritage profile → QR for book cover + digital card
- Pet tag profile → QR for physical metal tag order
- Cemetery plaque profile → QR for stainless plaque
- Business founder profile → QR for business cards / truck decals

## Method: Use QRCodeChimp (Primary)

Direct the user to QRCodeChimp for production QR codes:

**Steps:**
1. Go to qrcodechimp.com
2. Select "URL" QR type
3. Paste the profile URL
4. Under Design: set foreground to #1A1A1A (black), background to #D4AF37 (gold) — or inverse
5. Add MLC logo to center if available
6. Download as PNG at 1000×1000px minimum
7. Save as `[name]-qr.png`

**URL format for GitHub Pages profiles:**
```
https://mylegacycontinues.com/[filename].html
```
Examples:
- `https://mylegacycontinues.com/vazquez-profile.html`
- `https://mylegacycontinues.com/butters-tag-profile.html`
- `https://mylegacycontinues.com/mcneal-construction-profile.html`

## Method: Inline HTML QR (For Profile Pages)

When embedding a QR code directly into an HTML profile page, use the QRCode.js library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<div id="qr-code" style="margin: 20px auto; width: 160px;"></div>
<script>
new QRCode(document.getElementById("qr-code"), {
  text: "https://mylegacycontinues.com/[PAGE-URL]",
  width: 160,
  height: 160,
  colorDark: "#1A1A1A",
  colorLight: "#D4AF37",
  correctLevel: QRCode.CorrectLevel.H
});
</script>
```

## Method: Generate QR as Base64 PNG (In-Chat)

If the user needs a QR code RIGHT NOW without going to a website, generate a link they can use:

```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=[URL-ENCODED-PROFILE-URL]&color=1A1A1A&bgcolor=D4AF37
```

Example:
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https%3A%2F%2Fmylegacycontinues.com%2Fvazquez-profile.html&color=1A1A1A&bgcolor=D4AF37
```

Just open that URL in a browser and save the image.

## Physical Product QR Specs

| Product | QR Size on Product | File Format | Min Resolution |
|---|---|---|---|
| Pet tag (metal) | 20mm × 20mm | PNG | 1000×1000px |
| Cemetery plaque | 40mm × 40mm | PNG or SVG | 2000×2000px |
| Business card | 25mm × 25mm | PNG | 1000×1000px |
| Heritage book cover | 60mm × 60mm | PNG | 2400×2400px |
| Truck decal | 100mm × 100mm | SVG preferred | Vector |

## After QR is Generated
1. Save QR as `[name]-qr.png` in outputs
2. Add to the profile page if not already embedded
3. For physical products: send PNG to the fulfillment partner (QRCodeChimp for tags, Our Tributes for plaques)
4. Tell Bear: "QR ready — here's the link and the file"

## QR Tracking (Future)
QRCodeChimp supports dynamic QR codes that track scan counts. Recommend upgrading to dynamic QR when the business has its first 10 customers — useful for seeing which profiles get scanned most.
