---
name: dog-status-updater
description: Updates rescue dog status on the My Legacy Continues rescue registry when Underdog Heroes notifies Bear of a change. Handles adopted, fostered, returned, new dogs, and profile transfers to new owners. Trigger this skill whenever Bear says "Shoshi said [dog] got adopted", "update [dog name] status", "add a new dog to the registry", "dog was adopted", or "Shoshi emailed about [dog]". This is how Shoshi's updates become live on the site without her needing to touch any code.
---

# Dog Status Updater — My Legacy Continues

## Role
When Shoshi (Underdog Heroes) notifies Bear of a change, you make that change to the rescue registry fast. Bear gets the update, you produce the corrected HTML, Bear pushes to GitHub. Done in under 5 minutes.

## Contact
Shoshi / Underdog Heroes: adopt@underdogheroes.org

## How Shoshi Notifies Bear (Current System — Phase 1)
Shoshi emails or texts Bear with one of these updates:
- "[Dog name] was adopted by [Family name]"
- "New dog added: [Name, breed, age, brief bio]"
- "[Dog name] went back to rescue — update status"
- "[Dog name] is in foster with [Foster name]"

Bear tells Claude the update. Claude produces the corrected HTML section. Bear pushes to GitHub.

## Status Changes

### Dog Gets Adopted
1. Find the dog's card in `rescue-registry.html`
2. Change status badge to "Forever Home Found 🏠"
3. Change button from "Meet [Name]" to "Adopted — Profile Lives On"
4. Add a one-line note: "Adopted [Month Year] — Profile transferred to forever family"
5. Mute the card visually (opacity 0.75, or gray border instead of gold)
6. Keep the card on the page — don't remove it. The permanence is the pitch.
7. If adopter wants QR tag: trigger pet-tag-profile-builder to update the profile with new owner contact info

### New Dog Added
1. Collect from Bear: name, breed, age, brief personality bio, availability status
2. Add new card to `rescue-registry.html` grid
3. Create individual `rescue-[dogname]-profile.html` page
4. Link card to individual profile page
5. Status badge: "Available"

### Dog Returns to Rescue
1. Update status badge back to "Available"
2. Remove any foster notes
3. Update bio if needed

### Dog Goes to Foster
1. Update status badge to "In Foster"
2. Add note: "Currently in foster care — adoption pending"

## The QR Transfer Workflow (When Dog Gets Adopted)
This is what makes MLC different from Petfinder:

1. Dog's rescue QR tag profile stays live forever
2. New owner gets a new personal QR tag linked to SAME profile URL
3. Profile updates: rescue story preserved + new owner contact added
4. New owner can add photos, update medical info via email to Bear

Talking points for Shoshi:
- "The dog's story never disappears"
- "Adopters love seeing how far their dog came"
- "New owners can update the profile anytime — just email us"

## Output
Always produce:
1. Updated `rescue-registry.html` section (the changed card only — Bear pastes it in)
OR
2. Full replacement `rescue-registry.html` if multiple changes at once

Then tell Bear: "Here's the update — push to markvazquez92/legacy-os and it'll be live in 2 minutes."

## Setting Up Shoshi's Workflow
Tell Bear to send Shoshi this message:

"Hey Shoshi — whenever a dog's status changes (adopted, new dog, foster update) just text or email me: '[Dog name] — [what changed]'. I'll have the registry updated same day. You don't need to touch anything on your end."

That's all she needs. You handle the rest on the backend.
