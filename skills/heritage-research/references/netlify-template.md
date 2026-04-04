# Netlify Website Template — HTML Section Guide

This is the HTML structure for the "My Legacy Continues" heritage websites.
Each section maps directly to the book chapters — same research, web-optimized format.

The HTML output should be a single self-contained file that can be dropped into any Netlify project.
Use inline styles + a `<style>` block at the top. No external CSS dependencies needed.

---

## COMPLETE HTML SHELL

When generating the Netlify output file, wrap all sections in this shell:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The [SURNAME] Legacy — My Legacy Continues</title>
  <style>
    /* === GLOBAL STYLES === */
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Georgia', serif;
      background-color: #faf7f2;
      color: #2c2416;
      line-height: 1.8;
    }

    /* Typography */
    h1 { font-size: 3.5rem; letter-spacing: 0.05em; color: #1a1108; }
    h2 { font-size: 2rem; letter-spacing: 0.03em; color: #5c3d1e; border-bottom: 2px solid #c9a84c; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
    h3 { font-size: 1.3rem; color: #7a5c2e; margin-bottom: 1rem; font-style: italic; }
    p { margin-bottom: 1.2rem; font-size: 1.05rem; max-width: 720px; }

    /* Gold accent color: #c9a84c */
    /* Dark brown: #2c2416 */
    /* Parchment background: #faf7f2 */

    .section { padding: 80px 40px; max-width: 1100px; margin: 0 auto; }
    .section-full { padding: 80px 40px; }

    .citation {
      font-size: 0.8rem;
      color: #8a7255;
      font-style: italic;
      background: #f0ebe0;
      border-left: 3px solid #c9a84c;
      padding: 8px 12px;
      margin: 1rem 0;
    }

    .document-box {
      background: #f5f0e8;
      border: 1px solid #d4c5a0;
      padding: 24px;
      margin: 2rem 0;
      position: relative;
    }
    .document-box::before {
      content: "ARCHIVAL RECORD";
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      color: #8a7255;
      display: block;
      margin-bottom: 8px;
    }

    .timeline-item { display: flex; gap: 20px; margin-bottom: 2rem; align-items: flex-start; }
    .timeline-year { font-size: 1.4rem; font-weight: bold; color: #c9a84c; min-width: 80px; }
    .timeline-content { flex: 1; }

    .layer-badge {
      display: inline-block;
      background: #c9a84c;
      color: #1a1108;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      padding: 3px 10px;
      margin-bottom: 1rem;
      font-family: sans-serif;
    }
  </style>
</head>
<body>

  <!-- SECTIONS GO HERE -->

</body>
</html>
```

---

## SECTION 1: HERO

The first thing visitors see. Full-screen impact.

```html
<!-- ==================== SECTION 1: HERO ==================== -->
<section style="
  min-height: 100vh;
  background: linear-gradient(rgba(26,17,8,0.75), rgba(26,17,8,0.85)),
              url('[BACKGROUND_IMAGE_URL]') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
">
  <p style="font-size: 0.85rem; letter-spacing: 0.2em; color: #c9a84c; margin-bottom: 1rem; font-family: sans-serif;">
    MY LEGACY CONTINUES
  </p>
  <h1 style="color: #faf7f2; font-size: clamp(2.5rem, 8vw, 5rem); margin-bottom: 1.5rem;">
    THE [SURNAME] LEGACY
  </h1>
  <p style="color: #d4c5a0; font-size: 1.3rem; max-width: 600px; font-style: italic;">
    From the [TERRAIN TYPE] of [ORIGIN_REGION] to the foundations of California —
    [NUMBER] years of [TRADE/CRAFT] in the blood.
  </p>
  <div style="margin-top: 3rem; display: flex; gap: 20px;">
    <span style="color: #c9a84c; font-size: 0.8rem; letter-spacing: 0.15em; font-family: sans-serif;">
      ORIGIN: [MUNICIPALITY, STATE, COUNTRY]
    </span>
    <span style="color: #8a7255;">|</span>
    <span style="color: #c9a84c; font-size: 0.8rem; letter-spacing: 0.15em; font-family: sans-serif;">
      ARRIVED: [ARRIVAL_DECADE]
    </span>
    <span style="color: #8a7255;">|</span>
    <span style="color: #c9a84c; font-size: 0.8rem; letter-spacing: 0.15em; font-family: sans-serif;">
      TRADE: [MASTER_TRADE]
    </span>
  </div>
</section>
```

**Image recommendation:** Use a public domain photo of the origin region's terrain, or a historical map of [STATE], Mexico. Good sources: Wikimedia Commons, Library of Congress.

---

## SECTION 2: THE SOIL (Chapter 1)

The homeland narrative.

```html
<!-- ==================== SECTION 2: THE SOIL ==================== -->
<section class="section-full" style="background: #faf7f2;">
  <div class="section">

    <span class="layer-badge">LAYER 1: VITAL · LAYER 4: STATUS</span>
    <h2>THE SOIL</h2>
    <h3>The Ancient Homeland · [ORIGIN_REGION] · Est. [EARLIEST_RECORD_YEAR]</h3>

    <!-- Surname Origin -->
    <div style="margin-bottom: 3rem;">
      <p style="font-size: 1.2rem; font-style: italic; color: #5c3d1e; border-left: 4px solid #c9a84c; padding-left: 1.5rem;">
        "[SURNAME_MEANING_AND_ORIGIN_SENTENCE]"
      </p>
    </div>

    <!-- Main narrative paragraph(s) — paste Chapter 1 content here -->
    <p>[SOIL_PARAGRAPH_1]</p>
    <p>[SOIL_PARAGRAPH_2]</p>
    <p>[SOIL_PARAGRAPH_3]</p>

    <!-- Archive evidence box -->
    <div class="document-box">
      <strong>[DOCUMENT_TYPE]</strong> — [ARCHIVE_NAME], [YEAR]<br>
      <em style="font-size: 0.9rem; color: #5c3d1e;">"[QUOTE_OR_SUMMARY_FROM_RECORD]"</em>
      <div class="citation">[FULL_CITATION]</div>
    </div>

    <p>[SOIL_PARAGRAPH_4]</p>

    <!-- Status/Hidalgo finding (if applicable) -->
    <!-- If NO hidalgo record found, use the dignified alternative text from SKILL.md -->
    <div style="background: #2c2416; color: #faf7f2; padding: 32px; margin: 2rem 0;">
      <p style="color: #c9a84c; font-size: 0.75rem; letter-spacing: 0.15em; font-family: sans-serif; margin-bottom: 0.5rem;">
        LAYER 4 — STATUS FINDING
      </p>
      <p style="font-size: 1.1rem; margin: 0; font-style: italic;">
        "[STATUS_FINDING_SUMMARY — hidalgo designation, land grant, military service, OR dignified alternative]"
      </p>
      <p style="font-size: 0.8rem; color: #8a7255; margin-top: 0.5rem;">[SOURCE_CITATION]</p>
    </div>

  </div>
</section>
```

---

## SECTION 3: THE JOURNEY (Chapter 2)

The migration story + push factor.

```html
<!-- ==================== SECTION 3: THE JOURNEY ==================== -->
<section class="section-full" style="background: #2c2416;">
  <div class="section">

    <span class="layer-badge" style="background: #faf7f2; color: #2c2416;">LAYER 3: MIGRATION</span>
    <h2 style="color: #faf7f2; border-color: #c9a84c;">THE JOURNEY</h2>
    <h3 style="color: #d4c5a0;">The Crossing · [DEPARTURE_REGION] → [ENTRY_PORT] → California</h3>

    <!-- Push Factor callout box -->
    <div style="border: 1px solid #c9a84c; padding: 24px; margin-bottom: 3rem;">
      <p style="color: #c9a84c; font-size: 0.75rem; letter-spacing: 0.15em; font-family: sans-serif; margin-bottom: 0.5rem;">
        THE PUSH FACTOR — [DECADE]
      </p>
      <p style="color: #faf7f2; font-size: 1.15rem; font-style: italic; margin: 0;">
        "[PUSH_FACTOR_SUMMARY — specific event, region, year]"
      </p>
    </div>

    <!-- Journey narrative -->
    <p style="color: #d4c5a0;">[JOURNEY_PARAGRAPH_1 — the historical event]</p>
    <p style="color: #d4c5a0;">[JOURNEY_PARAGRAPH_2 — the decision to leave]</p>

    <!-- Border crossing / manifest evidence -->
    <div class="document-box" style="background: #1a1108; border-color: #5c3d1e;">
      <strong style="color: #c9a84c;">[DOCUMENT_TYPE — Border Crossing Card / Ship Manifest / Bracero Contract]</strong>
      <br><span style="color: #8a7255; font-size: 0.85rem;">[ARCHIVE] — [DATE]</span><br><br>
      <em style="color: #d4c5a0; font-size: 0.9rem;">"[TRANSCRIPTION_OR_SUMMARY]"</em>
      <div class="citation" style="background: #2c2416; border-color: #c9a84c;">[FULL_CITATION]</div>
    </div>

    <p style="color: #d4c5a0;">[JOURNEY_PARAGRAPH_3 — the crossing itself]</p>
    <p style="color: #d4c5a0;">[JOURNEY_PARAGRAPH_4 — first years in California]</p>

    <!-- Migration route visual (text-based if no map available) -->
    <div style="border-top: 1px solid #5c3d1e; padding-top: 2rem; margin-top: 2rem;">
      <p style="color: #8a7255; font-size: 0.8rem; letter-spacing: 0.1em; font-family: sans-serif;">
        THE ROUTE
      </p>
      <p style="color: #c9a84c; font-size: 1rem; font-family: sans-serif;">
        [MUNICIPALITY, STATE] → [BORDER_CITY] → [US_PORT_OF_ENTRY] → [CALIFORNIA_SETTLEMENT]
      </p>
      <p style="color: #8a7255; font-size: 0.85rem; font-style: italic;">
        Estimated journey: [DISTANCE] miles · [TRAVEL_METHOD] · [APPROXIMATE_YEAR]
      </p>
    </div>

  </div>
</section>
```

---

## SECTION 4: THE LEGACY (Chapter 3)

The DNA of Excellence — the big payoff.

```html
<!-- ==================== SECTION 4: THE LEGACY ==================== -->
<section class="section-full" style="background: #faf7f2;">
  <div class="section">

    <span class="layer-badge">LAYER 2: OCCUPATIONAL</span>
    <h2>THE LEGACY</h2>
    <h3>The DNA of Excellence · [MASTER_TRADE] → [MODERN_BUSINESS]</h3>

    <!-- Trade connection visual -->
    <div style="display: flex; align-items: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
      <div style="text-align: center; padding: 24px; border: 2px solid #c9a84c; min-width: 180px;">
        <p style="font-size: 0.7rem; letter-spacing: 0.15em; color: #8a7255; font-family: sans-serif;">THEN</p>
        <p style="font-size: 1.3rem; color: #5c3d1e; font-style: italic;">[ANCESTOR_TRADE]</p>
        <p style="font-size: 0.85rem; color: #8a7255;">[ORIGIN_REGION], [CENTURY]</p>
      </div>
      <div style="font-size: 2rem; color: #c9a84c;">→</div>
      <div style="text-align: center; padding: 24px; border: 2px solid #c9a84c; min-width: 180px;">
        <p style="font-size: 0.7rem; letter-spacing: 0.15em; color: #8a7255; font-family: sans-serif;">NOW</p>
        <p style="font-size: 1.3rem; color: #5c3d1e; font-style: italic;">[MODERN_BUSINESS]</p>
        <p style="font-size: 0.85rem; color: #8a7255;">California, [CURRENT_YEAR]</p>
      </div>
    </div>

    <!-- Legacy narrative -->
    <p>[LEGACY_PARAGRAPH_1 — the master trade description]</p>

    <!-- Occupational archive finding -->
    <div class="document-box">
      <strong>[DOCUMENT_TYPE — Census entry / hacienda record / guild record]</strong>
      <br><span style="font-size: 0.85rem; color: #8a7255;">[ARCHIVE] — [DATE]</span><br><br>
      <em style="font-size: 0.9rem; color: #5c3d1e;">"[TRANSCRIPTION — lists ancestor's occupation]"</em>
      <div class="citation">[FULL_CITATION]</div>
    </div>

    <p>[LEGACY_PARAGRAPH_2 — the thread connecting then to now]</p>

    <!-- The Statement of Legacy — the climax -->
    <div style="background: #2c2416; padding: 48px; margin: 3rem 0; text-align: center;">
      <p style="color: #c9a84c; font-size: 0.75rem; letter-spacing: 0.2em; font-family: sans-serif; margin-bottom: 1rem;">
        THE [SURNAME] INHERITANCE
      </p>
      <p style="color: #faf7f2; font-size: 1.4rem; font-style: italic; max-width: 600px; margin: 0 auto; line-height: 1.6;">
        "[THE_LEGACY_STATEMENT — the powerful climax sentence connecting ancestor to today]"
      </p>
    </div>

    <p>[LEGACY_PARAGRAPH_3 — the forward-looking close]</p>

  </div>
</section>
```

---

## SECTION 5: FAMILY TIMELINE

```html
<!-- ==================== SECTION 5: TIMELINE ==================== -->
<section class="section-full" style="background: #f0ebe0;">
  <div class="section">

    <h2>FAMILY TIMELINE</h2>
    <h3>[EARLIEST_YEAR] — [CURRENT_YEAR]</h3>

    <!-- Repeat this block for each timeline entry found in research -->

    <div class="timeline-item">
      <div class="timeline-year">[YEAR]</div>
      <div class="timeline-content">
        <strong>[EVENT_NAME]</strong><br>
        <span style="font-size: 0.9rem; color: #5c3d1e;">[EVENT_DESCRIPTION]</span><br>
        <span style="font-size: 0.75rem; color: #8a7255; font-style: italic;">[SOURCE_CITATION]</span>
      </div>
    </div>

    <!-- Add more timeline items as needed -->
    <!-- Minimum target: 5–8 timeline entries across the 500-year span -->

  </div>
</section>
```

---

## SECTION 6: EVIDENCE VAULT

Displays the key archival documents found.

```html
<!-- ==================== SECTION 6: EVIDENCE VAULT ==================== -->
<section class="section-full" style="background: #faf7f2;">
  <div class="section">

    <h2>EVIDENCE VAULT</h2>
    <h3>Primary Sources & Archival Records</h3>

    <p style="color: #8a7255;">The following records form the documentary foundation of this heritage report.
    All sources have been cited from official national archives.</p>

    <!-- Repeat for each document found -->
    <div class="document-box">
      <strong style="color: #5c3d1e;">[DOCUMENT_TITLE]</strong><br>
      <span style="font-size: 0.85rem; color: #8a7255;">[ARCHIVE] · [COLLECTION] · [DATE]</span><br><br>
      <p style="font-size: 0.9rem;">[DOCUMENT_SUMMARY_AND_SIGNIFICANCE]</p>
      <div class="citation">[FULL_CITATION_WITH_URL_IF_AVAILABLE]</div>
    </div>

  </div>
</section>
```

---

## SECTION 7: FOOTER / CTA

```html
<!-- ==================== SECTION 7: FOOTER ==================== -->
<footer style="background: #1a1108; color: #8a7255; padding: 60px 40px; text-align: center;">

  <p style="color: #c9a84c; font-size: 0.75rem; letter-spacing: 0.2em; font-family: sans-serif; margin-bottom: 1rem;">
    MY LEGACY CONTINUES
  </p>
  <p style="color: #faf7f2; font-size: 1.5rem; font-style: italic; margin-bottom: 2rem;">
    "Your story didn't start with you.<br>It starts with where you came from."
  </p>

  <div style="border-top: 1px solid #2c2416; padding-top: 2rem; margin-top: 2rem;">
    <p style="font-size: 0.85rem;">
      Heritage Research Commission for the [CUSTOMER_NAME] Family<br>
      Researched and produced by My Legacy Continues · [CURRENT_YEAR]
    </p>
    <p style="font-size: 0.75rem; margin-top: 1rem;">
      Primary sources: FamilySearch · PARES · AGN México · NARA · [STATE_ARCHIVE]
    </p>
  </div>

</footer>
```

---

## NETLIFY DEPLOYMENT CHECKLIST

After generating the HTML file, confirm these before handing to the customer:

- [ ] Replace ALL `[PLACEHOLDER]` values with actual researched content
- [ ] Replace `[BACKGROUND_IMAGE_URL]` in hero with a real public domain image URL
- [ ] Ensure all citation tags include actual archive names (not generic)
- [ ] Test that the HTML file opens cleanly in a browser before delivering
- [ ] Save as `[Surname]_Netlify_Sections.html`
- [ ] File can be deployed directly to Netlify by dragging the folder to netlify.com/drop
