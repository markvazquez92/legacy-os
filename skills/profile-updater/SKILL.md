---
name: profile-updater
description: Updates any live HTML profile on the My Legacy Continues site — heritage profiles, business profiles, pet profiles, or rescue dog cards. Makes the change, outputs the corrected file, Bear pushes to GitHub. Trigger this skill whenever a customer needs info updated, whenever Bear says "update [name]'s profile", "[customer] wants to change their phone number", "add a photo to [profile]", "update [dog]'s status", or any time a live profile needs a change after it's been pushed to GitHub.
---

# Profile Updater — My Legacy Continues

## Role
Update any live profile on the site quickly. Customer requests a change → you make it → Bear pushes to GitHub → live in 2 minutes. This is how you deliver great service without a fancy backend system.

## Types of Updates

### Customer Profile Updates (Heritage, Business)
- Phone number or email change
- New photos added (embed or placeholder update)
- Bio correction or addition
- New business information (license update, new services)
- Spotify/Apple Music playlist link change
- Address or service area change

### Pet Profile Updates
- Owner contact info change (most common)
- New pet photo
- Medical info update (new medication, vet change)
- Pet name change (rare but happens)
- Pet passing — convert to memorial profile

### Rescue Dog Updates
Use dog-status-updater skill for status changes (adopted, foster, new dog).
Use this skill for: bio edits, photo updates, breed/age corrections.

### Cemetery Memorial Updates
- New photos added by family
- New tribute message
- Date correction
- Additional family member added

---

## How to Make an Update

### Step 1: Identify the File
Bear tells you which profile to update. Map it to the filename:
- Heritage profile → `[surname]-profile.html`
- Business profile → `[businessname]-profile.html`
- Pet profile → `[petname]-tag-profile.html`
- Rescue dog → `rescue-[dogname]-profile.html`
- Rescue registry → `rescue-registry.html`

### Step 2: Get the Current Content
Bear pastes the current HTML (from GitHub raw view), OR describes what needs to change if the structure is known.

### Step 3: Make the Change
Output ONLY the changed section — not the entire file unless it's a small file. Tell Bear:
"Replace lines [X] through [Y] in [filename] with this:"
```html
[UPDATED HTML]
```

### Step 4: Push Instructions
Tell Bear:
"Open GitHub.com/markvazquez92/legacy-os → find [filename] → click the pencil (edit) → paste the new section in → commit with message 'Update [name] profile — [what changed]' → push. Live in 2 minutes."

---

## Pet Profile — Memorial Conversion

When a pet passes away, the profile becomes a memorial:

Changes to make:
1. Status banner: Add gold bar at top — "[Pet Name] — Forever in Our Hearts · [Year]–[Year]"
2. Call button: Remove tap-to-call, replace with "Leave a Tribute" (mailto: link to owner)
3. Add memorial note below photo: "This profile is preserved in loving memory."
4. Keep all photos, personality notes, and medical history — it's part of their story
5. Keep QR code active — family members can still visit the profile

---

## Quick Response Templates for Customer Requests

When a customer emails asking for a change, Bear can send:

**Confirming the update:**
"Got it — I'll have that updated on your profile by end of day. You'll be able to see it live at [URL]. Let me know if anything else needs changing."

**After it's live:**
"Your profile has been updated. Check it out at [URL] — scan the QR on your [book/tag/plaque] and it'll show the new info. Let me know if it looks right."

---

## What This Skill Replaces
Without this skill: Customer emails → Bear has to remember → maybe gets done → maybe not.
With this skill: Customer emails → Bear tells Claude → corrected HTML in 2 min → push → done → reply to customer.

This is how you deliver $199 service that feels like $500 service.
