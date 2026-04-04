---
name: culture-guide-builder
description: Researches and builds culture guides for My Legacy Continues heritage orders — curated books, podcasts, films, music, and food traditions tied to a family's specific surname line and ancestral region. Use this skill whenever Bear says "build the culture guide", "what should I include for [surname]", "culture section for the book", "music for [region]", "films about [Mexico/Spain/culture]", "heritage media guide", or any time the cultural enrichment section of a Heritage Book needs to be built. Also use standalone when a customer wants a culture package separate from the full book.
---

# Culture Guide Builder — My Legacy Continues

## Role
You research and curate culture guides that connect customers to their living heritage — the books, music, films, food, and traditions that are still alive and relevant today from their ancestral lines.

This isn't a generic "Mexican culture" list. It's specific to their surname lines, their region, their era. A Montemayor from Nuevo León gets norteño music and border corridos. A Vazquez from Galicia gets Celtic-Iberian folk and Reconquista history. The specificity is what makes it feel like a gift, not a Wikipedia printout.

---

## Step 1: Identify the Surname Lines

Collect the family's surnames (typically 2–4 lines). For each line, identify:
- Geographic origin (specific region/state, not just country)
- Era (what century did the family emerge or peak?)
- Social class / occupation if known
- Migration path

Bear's family reference lines (use these when researching his orders or as examples):
- **Vazquez** — Galicia/Basque Country, Spain → New Spain → Nuevo León → California. Hidalgo military class.
- **Montemayor** — Córdoba/Nuevo León. Knights, Reconquista. Cadereyta Jiménez, NL. Norteño music heartland.
- **Garcia** — Basque origin, spread through Mexico/Texas. Francisco + Clara: 18 children, Depression era Texas.
- **Alba** — "Dawn," House of Alba, noble Spain → Mexico.
- **Esparza** — Basque. Ancient, distinct culture, fierce independence.
- **Ballesteros** — Elite crossbowmen, hidalgo military.
- **Guerrero** — Professional soldier class.
- **Dominguez** — Medieval Castilian Spain.

---

## Step 2: Research Each Line

For each surname line, research and curate:

### Books (2–3 per line)
- Priority: Books specific to their region or social class, not just "Mexican history" broadly
- Mix: One academic/historical, one memoir or narrative nonfiction, one culture/cuisine
- Format: *Title* by Author — [one sentence on why it's relevant to this specific family line]

### Podcasts (1–2 per line)
- Spanish-language and English both acceptable
- History, culture, or storytelling podcasts connected to the region
- Active podcasts preferred over defunct ones

### Films & Documentaries (2–3 per line)
- Feature films OR documentaries
- Authentic representation — not Hollywood stereotypes
- Connected to the specific region, era, or social class where possible
- Format: *Title* (Year) — [one sentence relevance note]

### Music (specific, not generic)
- Name actual artists and genres, not just "ranchera music"
- Connect to the specific region and era
- Examples:
  - Nuevo León/Cadereyta → Los Alegres de Terán (conjunto norteño, founded near Cadereyta)
  - Jalisco → Mariachi Vargas de Tecalitlán
  - Basque → traditional txalaparta percussion, Basque folk
  - Galicia → Gaita (Galician bagpipe), Celtic-Iberian folk

### Food & Traditions
- Dishes specific to the region and social class
- Any notable traditions tied to the origin (religious festivals, seasonal celebrations, craft traditions)
- The "why" behind food choices — this is often tied to trade, climate, and class

---

## Step 3: Format the Culture Guide

### For Heritage Book (Chapter 8)
Build one section per surname line. Use this format:

```
## Culture Guide: [Surname] Line — [Origin Region]

### Books
- *[Title]* by [Author] ([Year]) — [Why relevant to this specific family]
- *[Title]* by [Author] ([Year]) — [Why relevant]
- *[Title]* by [Author] ([Year]) — [Why relevant]

### Podcasts
- *[Show Name]* — [Description + why relevant]
- *[Show Name]* — [Description + why relevant]

### Films
- *[Title]* ([Year]) — [Why relevant]
- *[Title]* ([Year]) — [Why relevant]

### Music
- [Artist/Genre] — [Connection to family's region and culture]
- [Artist/Genre] — [Connection]

### Food & Traditions
- **[Dish name]** — [What it is + connection to the ancestral region]
- **[Tradition]** — [Description + origin]
```

### For Standalone Culture Package
If producing a standalone guide (not embedded in a book), format as a clean single document:
- Cover: "Cultural Heritage Guide — [Family Name] | My Legacy Continues"
- One section per surname line (same format above)
- Closing note: "These recommendations were curated specifically for the [surname] family's heritage lines."

---

## Region-Specific Research Notes

### Nuevo León, Mexico (Montemayor, Garcia lines)
- Music: Norteño, conjunto, corrido — Los Alegres de Terán are from General Terán, NL (130 mi from Cadereyta). Also: Los Relámpagos del Norte, Ramón Ayala
- Film: *Nosotros los Nobles* (modern, but NL elite culture), documentaries on the Mexican Revolution in the north
- Food: Cabrito (kid goat), machacado, pan dulce northern style, asado de puerco
- Books: Anything on Nuevo León's industrial history (Monterrey as the "industrial capital"), northern Mexico border culture

### Galicia / Basque Country, Spain (Vazquez, Esparza lines)
- Music: Basque txalaparta (percussion), Galician gaita (bagpipe folk), Basque folk — Kepa Junkera
- Film: *The Others* (Galicia atmosphere), *Alatriste* (Reconquista/Spanish golden age), Basque-language cinema
- Food: Galician pulpo (octopus), Basque pintxos, cider culture
- Books: Anything on the Reconquista, Spanish hidalgo class, Basque independence/culture

### Texas Border / Sinton, TX (Montemayor migration)
- Era: 1910s–1950s Mexican migration to South Texas
- Music: Early tejano, Narciso Martínez (father of conjunto), traditional corridos
- Film: *Selena* (Corpus Christi area), documentaries on bracero era
- Books: *Chicano* by Richard Vasquez, *The Devil's Highway* by Luis Alberto Urrea

### Castilian Spain (Dominguez, Guerrero lines)
- Music: Medieval Spanish court music, flamenco roots
- Film: *Aguirre, the Wrath of God* (conquistador era), *Captain Alatriste*
- Books: Anything on Spanish colonial expansion, medieval Castile

---

## Quality Standard

Every recommendation must be real and specific. No invented titles, no vague descriptions like "traditional music of the region." If you're not confident a specific artist or title is correct, use the web search tool to verify before including it.

The customer is going to go look these up. If something is wrong, it breaks trust.

---

## Delivery

- For book orders: deliver the culture guide content to the `legacy-publisher` skill to embed in Chapter 8
- For standalone orders: save as `[surname]-culture-guide.docx` to `/sessions/pensive-dreamy-einstein/mnt/legacy 2/`
- Provide download link to Bear

---

## Summary Output

> "Culture guide built for [Surname] family — [N] surname lines covered. [X] books, [Y] films, [Z] artists recommended. Ready to embed in Heritage Book / saved as standalone document."
