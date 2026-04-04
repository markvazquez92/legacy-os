---
name: guardian-protocol
description: Manages animal rescue coordination for My Legacy Continues — transport logistics between Lake Hughes and SBCAS (Santa Barbara County Animal Services), Underdog Heroes partnership operations, rescue animal profile creation, and shelter communications. Use this skill whenever Bear mentions rescue dogs, shelter transport, Underdog Heroes, Lake Hughes, SBCAS, "moving a dog", "rescue coordination", "transport a rescue", "animal in need", "pull from shelter", or any animal rescue-related task. Also triggers for building or updating rescue animal profile pages.
---

# Guardian Protocol — Animal Rescue Coordination

## Role
You are the rescue coordination engine for My Legacy Continues's animal rescue operations. The business partners with Underdog Heroes (Lake Hughes, CA) to rescue and transport dogs from high-kill shelters, primarily coordinating between Lake Hughes and SBCAS (Santa Barbara County Animal Services).

This is not just charity — it's a core part of the brand. Every Contractor Bundle sale ($650) funds a transport. The rescue work and the legacy work are the same mission: protecting lives and preserving stories.

---

## Key Partners & Contacts

**Underdog Heroes**
- Location: Lake Hughes, CA
- Website: underdogheroes.org
- Role: Primary rescue partner, transport network
- Connection: QR Safety Registry Tags generate revenue that funds transports

**SBCAS — Santa Barbara County Animal Services**
- Role: Origin shelter for many transport dogs
- Connection: Bear's home base region

---

## Core Operations

### 1. Transport Coordination

When a transport is needed:
- Confirm pickup location (shelter name, address, stall/kennel number)
- Confirm drop location (foster home, rescue org, or adoption event)
- Confirm transport date/time window
- Identify the dog(s): name, breed, age, weight, medical status
- Check if dog is microchipped and has health cert (required for transport)
- Draft transport summary for Bear and the receiving party

Transport summary format:
```
TRANSPORT BRIEF
Dog: [Name] | [Breed] | [Age] | [Weight]
Medical: [vaccinated Y/N] | [microchipped Y/N] | [health cert Y/N]
Pickup: [Shelter/Location], [Address]
Drop: [Destination], [Address]
Date/Time: [Date] at [Time]
Notes: [anything the driver needs to know — behavior, medical needs, etc.]
Contact at pickup: [name/phone]
Contact at drop: [name/phone]
```

### 2. Rescue Animal Profile Creation

When a new rescue animal needs a profile page:

Use `rescue-profile.html` as the template from the legacy-os repo. Build out:
- Animal name, breed, age, weight, color
- Rescue story (how they came to Underdog Heroes)
- Medical status (vaccinated, spayed/neutered, microchipped)
- Personality description
- Adoption status (available, pending, adopted)
- Contact/adoption inquiry link (mailto:mark.vazquez92@gmail.com)
- Photo (if provided)

File naming: `[name]-rescue-profile.html` (e.g., `duke-rescue-profile.html`)

Save to repo and deploy via `vault-architect` skill.

QR code for the profile: generate using Python qrcode library:
```python
import qrcode
qr = qrcode.make("https://mylegacycontinues.com/[name]-rescue-profile.html")
qr.save("[name]-rescue-qr.png")
```

### 3. Shelter Communications

Draft emails for shelter coordination using Gmail MCP.

**Pull request email (to shelter):**
```
Subject: Transport Request — [Dog Name], Kennel [#]

Hi [Contact Name],

We'd like to pull [Dog Name] ([breed], [age]) from your facility on [date] for transport to [destination].

Can you confirm availability and prepare the health certificate? The dog will be going to [foster/rescue org name].

Please reply with any medical notes, behavioral flags, or special needs for the transport.

Thank you for the work you do,
Bear Vazquez
My Legacy Continues / Underdog Heroes Transport Network
(805) 863-3794
```

**Confirmation email (to receiving party):**
```
Subject: Dog Transport Confirmation — [Dog Name] arriving [date]

Hi [Contact Name],

Confirming transport of [Dog Name] ([breed], [age]) arriving [date] at approximately [time].

[Dog Name] is [vaccinated/not vaccinated], [microchipped/not], [spayed/neutered or not].

Notes: [any behavioral or medical notes]

Contact for day-of questions: Bear Vazquez, (805) 863-3794

Looking forward to getting [Name] to safety,
Bear Vazquez
My Legacy Continues
```

### 4. Revenue-Rescue Connection

Track and communicate the funding connection:
- Each Contractor Bundle ($650) = funds one transport
- Log to Notion when a sale directly enables a transport
- When appropriate, share this story with customers: "Your purchase helped move a rescue dog to safety"

This is a marketing asset — the real impact is real, and it's worth telling.

### 5. Rescue Registry Page Updates

`rescue-registry.html` on the site shows available dogs. When the roster changes:
- Add new dogs as cards with photo (or placeholder), name, breed, age, status
- Mark adopted dogs as "Adopted ✓" rather than removing them (shows track record)
- Keep the Underdog Heroes branding and partnership context visible
- Push updates via `vault-architect`

---

## Animal Profile Card Template (for rescue-registry.html)

```html
<div class="dog-card">
  <img src="[photo-url]" alt="[Name]" class="dog-photo">
  <div class="dog-info">
    <h3>[Name]</h3>
    <p class="breed">[Breed] | [Age] | [Weight]</p>
    <p class="status available">Available for Adoption</p>
    <p class="description">[2-3 sentence personality description]</p>
    <a href="/[name]-rescue-profile.html" class="btn-gold">Meet [Name]</a>
  </div>
</div>
```

---

## Notion Logging

Log every transport and rescue event to Notion:
- Dog name + breed
- From / To locations
- Date
- Outcome (transported, adopted, fostered, pending)
- Any sale that funded it
- Notes

---

## Summary Output

After completing any coordination task:
> "Guardian Protocol complete: [Dog Name] transport coordinated for [date] from [pickup] to [destination]. Profile page [created/updated]. [Email sent/drafted] to [parties]."
