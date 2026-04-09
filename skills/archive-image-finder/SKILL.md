---
name: archive-image-finder
description: Finds real historical photographs, newspaper clippings, and maps from free public archives to support My Legacy Continues Heritage Book orders. Sources from Library of Congress, Chronicling America, Calisphere, DPLA, and Mexican national archives. Trigger this skill whenever a Heritage Book is being assembled and needs archival visual evidence, whenever user says "find historical photos", "search the archives for images", "find a photo of [place] in [era]", or "I need archive evidence for the book". Only use verified public domain sources — never use copyrighted images.
---

# Archive Image Finder — My Legacy Continues

## Role
Find real historical photographs, maps, and newspaper clippings from free public archives. These go in Heritage Books and profile pages as visual evidence — they make the family story feel real and documented.

**Rule:** All images must be verified public domain or open license. Never use images that require licensing or attribution beyond credit.

---

## Priority Sources (Search in This Order)

| Archive | Best For | URL |
|---------|----------|-----|
| Library of Congress Prints & Photos | US historical photos, immigration, early California | loc.gov/pictures |
| Chronicling America | US newspapers 1770–1963 — search for surname mentions | chroniclingamerica.loc.gov |
| Calisphere (UC System) | Central Coast CA — Santa Barbara, Santa Maria, missions | calisphere.org |
| DPLA | Aggregator — searches 40+ archives simultaneously | dp.la |
| California Historical Society | CA-specific: ranches, missions, towns | californiahistoricalsociety.org |
| Old Maps Online | Historical maps of Mexico, Spain, California | oldmapsonline.org |
| FamilySearch Catalog | Parish record images, census page scans | familysearch.org/catalog |
| INAH (Mexico) | Mexican historical photos, colonial era | mediateca.inah.gob.mx |
| PARES (Spain) | Spanish historical documents and maps | pares.mcu.es |
| Bancroft Library (UC Berkeley) | California and western US historical photos | bancroft.berkeley.edu |

---

## Step 1: Build the Search List

Based on the family's heritage research, identify what to look for:

**Geographic images:**
- Family's origin city (e.g., "Galicia Spain 1900s street", "Mexico City Zocalo 1920")
- Their California landing city (e.g., "Santa Barbara 1940", "Santa Maria California 1950s")
- Immigration crossing point (e.g., "El Paso border crossing 1920", "Nogales 1915")

**Historical event images:**
- The Push Factor era (e.g., "Mexican Revolution soldiers 1910", "Cristero War", "Bracero Program workers")
- Relevant California history (e.g., "Central Coast agriculture 1950s", "oil fields Santa Maria")

**Occupational images:**
- Ancestor's trade (e.g., "silversmith Mexico 1900s", "vaquero California", "concrete workers 1950s")
- Trade tools of the era

**Newspaper clips:**
- Search Chronicling America for the surname in the relevant state/era
- Search for any major events in the family's region during their known years there

---

## Step 2: Search Protocol

For each target, construct a web search:

```
Search format examples:
"site:loc.gov/pictures [region] [decade] photograph"
"site:calisphere.org [city] [decade]"
"site:chroniclingamerica.loc.gov [surname] [state] [year range]"
"site:dp.la [occupation] [region] [era]"
```

Run multiple searches per turn — one per geographic target, one per occupational target.

---

## Step 3: Evaluate Each Result

Before including an image, confirm:
- [ ] Public domain or open license confirmed?
- [ ] Date matches the family's era (within ±25 years)?
- [ ] Location matches (same region/state)?
- [ ] Image quality is usable (not blurry, not too small)?
- [ ] Source URL is stable (not a temp link)?

---

## Step 4: Format the Findings

For each usable image, record:

```
IMAGE: [Brief description]
SOURCE: [Archive name]
URL: [Direct link]
DATE: [Approximate year or range]
LICENSE: [Public domain / CC / Open]
USE: [Which section of the book this supports]
CAPTION: [Suggested caption for the book]
```

---

## Step 5: Output

Deliver a formatted list of confirmed images with:
1. Direct URLs to each image
2. Suggested captions
3. Which chapter/section each belongs to
4. Instructions for Bear: "Download these and send to Jorge for book layout"

Also note:
- Any surname mentions found in Chronicling America newspapers (even indirect — these are gold)
- Any historical maps that show the family's origin town
- Any photos of the specific type of work the ancestor did

---

## Region-Specific Search Shortcuts

**Galicia, Spain:**
- PARES: search "Vázquez" + "Galicia" + "padron"
- Old Maps Online: "Lugo province 1800s"
- Library of Congress: "Spain Galicia fishermen" or "Santiago de Compostela"

**Mexico City (Distrito Federal):**
- INAH: "Ciudad de México" + decade
- DPLA: "Mexico City" + "1920s" or "1930s"
- Chronicling America: California Spanish-language papers for Mexico coverage

**South Texas (Sinton, Corpus Christi area):**
- Calisphere/DPLA: "South Texas" + "Mexican American" + decade
- Chronicling America: "Sinton Texas" or "San Patricio County"
- LOC: "Bracero" + "Texas" for 1940s–50s

**Santa Maria / Santa Barbara CA:**
- Calisphere: "Santa Maria California" or "Santa Barbara County"
- Bancroft Library: "Central Coast California" agriculture
- LOC: "California farm workers" + decade
