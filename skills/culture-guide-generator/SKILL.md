---
name: culture-guide-generator
description: Builds the interactive Culture Learning Guide chapter for My Legacy Continues Heritage Book orders. Auto-generates a 4-week immersion plan with food, music, films, books, and traditions specific to the family's region of origin (Galicia, Mexico City, Sinton TX, Central Valley CA, etc.). Trigger this skill whenever a Heritage Book order is being processed, whenever the heritage-research skill has run, or whenever a customer's family background has been identified and a culture guide needs to be written. Also trigger when user says "build the culture guide", "write the culture chapter", "add culture section", or "generate the 4-week plan".
---

# Culture Guide Generator — My Legacy Continues

## Role
You are writing the Culture Learning Guide — Deliverable #3 of the 5-deliverable Heritage Package. This is an interactive, clickable guide that gives the customer a 4-week immersion plan into their ancestral culture. It must feel personal, not generic.

## What This Deliverable Is
A structured 4-week plan organized by cultural pillar:
- **Food** — traditional dishes from the family's specific region, with recipe links
- **Music** — artists, songs, playlists tied to region and era
- **Film** — films that capture the culture, with streaming links where possible
- **Literature** — books, authors, oral tradition from that region
- **Traditions** — holidays, rituals, craft traditions the family likely practiced

## Input Required
Before generating, confirm you have:
- [ ] Family surnames (e.g., Vázquez, García, Montemayor)
- [ ] Regions of origin (e.g., Galicia Spain, Mexico City, Sinton TX)
- [ ] Approximate eras (e.g., early 1900s Mexico City, 1940s Texas)
- [ ] Any known cultural details from the order form or heritage research

If any are missing, ask before proceeding.

## Output Format
Produce the Culture Guide as a self-contained HTML file using the MLC brand (black background #1A1A1A, gold accents #D4AF37, Cinzel headings). Include:

### Structure
```
Header: "[Family Name] Culture Learning Guide"
Subhead: "A 4-Week Immersion into Your Heritage"

Week 1: The Food
Week 2: The Music  
Week 3: The Stories (Film + Literature)
Week 4: The Traditions
```

### Each Week Contains
- 3–5 specific recommendations (not generic — tied to the family's actual region/era)
- A one-sentence "why this matters to your family" note
- Clickable links where applicable (Spotify, YouTube, Amazon, recipe sites)
- A simple action: "This week, cook ___" / "This week, listen to ___"

## Regional Reference: Key Culture Anchors

### Galicia, Spain
- Food: Pulpo a la gallega, caldo gallego, empanada gallega, Albariño wine
- Music: Gaita (Galician bagpipe), Carlos Núñez, Milladoiro
- Film: *O lapis do carpinteiro* (2003), *Sempre Xonxa* (1989)
- Tradition: Feast of St. James (Santiago de Compostela), Día de los Muertos Gallego, lavandeiras (washing songs)
- Literature: Rosalía de Castro (poet), Álvaro Cunqueiro

### Mexico City (Distrito Federal)
- Food: Tacos de canasta, tlayudas, tamales de rajas, atole, champurrado
- Music: Mariachi Vargas de Tecalitlán, Agustín Lara, bolero, norteño
- Film: *Amores Perros* (2000), *Roma* (2018), *El ángel exterminador* (1962)
- Tradition: Día de Muertos altar building, posadas, Semana Santa
- Literature: Carlos Fuentes, Octavio Paz, Elena Poniatowska

### Sinton / Corpus Christi TX (South Texas, 1900s–1950s)
- Food: Carne guisada, tamales, pan dulce, frijoles de la olla, barbacoa
- Music: Conjunto Tejano, Lydia Mendoza, Narciso Martínez (accordion), corridos
- Film: *Lone Star* (1996), *Selena* (1997), *The Milagro Beanfield War* (1988)
- Tradition: Quinceañeras, comadre networks, Catholic feast days, curanderismo
- Literature: Gloria Anzaldúa (*Borderlands/La Frontera*), Américo Paredes

### Central Coast California (Santa Maria / Santa Barbara)
- Food: Santa Maria BBQ (tri-tip, pinquito beans, salsa), produce culture
- Music: Norteño crossover, mariachi, 1950s–70s California Chicano rock
- Film: *Zoot Suit* (1981), *La Bamba* (1987)
- Tradition: Fiesta Santa Barbara, harvest festivals, Catholic parishes as community center

## Quality Standards
- Every recommendation must be SPECIFIC — no "Mexican food" generics. Name the dish, the artist, the film.
- Each item ties back to the family's actual region and era — not just "Mexican culture"
- Tone is warm, celebratory, educational — not academic
- Length: ~600–900 words for the full guide
- Must be deliverable as both a HTML file and as a section in the Heritage Book DOCX

## Output Filenames
- `[surname]-culture-guide.html` — standalone interactive web version
- Add as Chapter 3.5 in the Heritage Book DOCX if being assembled simultaneously
