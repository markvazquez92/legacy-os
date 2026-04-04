# Archive Search Strings — Heritage Research Reference

These are the exact URLs and query templates to use for each research layer.
Replace `[SURNAME]`, `[REGION]`, `[YEAR_START]`, `[YEAR_END]` with the customer's order data.

---

## TABLE OF CONTENTS
1. [FamilySearch — Birth/Marriage/Death Records](#familysearch)
2. [PARES — Spanish National Archives](#pares)
3. [AGN Mexico — Archivo General de la Nación](#agn-mexico)
4. [NARA — US Border Crossings and Immigration](#nara)
5. [Mexican State Archives](#mexican-state-archives)
6. [Supplemental Sources](#supplemental-sources)
7. [Push Factor Historical Context](#push-factor-search)

---

## 1. FamilySearch {#familysearch}

**Base URL:** `https://www.familysearch.org/search/record/results`

### Vital Records Search
```
Search URL pattern:
https://www.familysearch.org/search/record/results?q.surname=[SURNAME]&q.birthPlace=[REGION]+Mexico&q.birthLikeDate.from=[YEAR_START]&q.birthLikeDate.to=[YEAR_END]

WebSearch query:
site:familysearch.org "[SURNAME]" "[REGION]" Mexico baptism OR birth OR marriage

Example (Ramos, Jalisco, 1850-1920):
https://www.familysearch.org/search/record/results?q.surname=Ramos&q.birthPlace=Jalisco+Mexico&q.birthLikeDate.from=1850&q.birthLikeDate.to=1920
```

### Key FamilySearch Collections for Mexican Research
| Collection | Time Period | Coverage |
|-----------|------------|---------|
| Mexico, Civil Registration (Registro Civil) | 1859–1940 | Most states; births, marriages, deaths |
| Mexico, Jalisco, Catholic Church Records | 1590–1979 | Jalisco parishes — excellent coverage |
| Mexico, Guanajuato, Catholic Church Records | 1534–1984 | Very deep colonial coverage |
| Mexico, Zacatecas, Catholic Church Records | 1605–1981 | Strong mining-region coverage |
| Mexico, Chihuahua, Catholic Church Records | 1632–1958 | Northern border states |
| Mexico, Oaxaca, Catholic Church Records | 1559–1977 | Note: 1931 earthquake damaged many originals |
| Mexico, Nuevo León, Catholic Church Records | 1667–1981 | Northern industrial region |
| Mexico, Michoacán, Catholic Church Records | 1614–1983 | Central highlands |
| Mexico, Puebla, Catholic Church Records | 1545–2004 | Strong Aztec-era colonial coverage |

### Parish Record Bridge Query (pre-Civil Registration)
```
WebSearch: site:familysearch.org "[SURNAME]" "[MUNICIPALITY]" "[STATE]" Mexico Catholic parish 1700s OR 1800s bautismo OR matrimonio
```

---

## 2. PARES — Archivo Histórico Nacional / Real Chancillería {#pares}

**Base URL:** `https://pares.mcu.es/ParesBusquedas20/catalogo/search`

PARES is the Spanish national archive portal. It holds:
- Padrón de Hidalgos (nobility rolls) — Real Chancillería de Valladolid and Granada
- Emigration records to New Spain (colonial migration)
- Inquisition records (contain detailed genealogical info)
- Military service records

### Hidalgo / Nobility Search
```
PARES Direct Search URL:
https://pares.mcu.es/ParesBusquedas20/catalogo/search?nm=[SURNAME]&nm=[FIRST_NAME]&fnd=true

WebSearch query:
site:pares.mcu.es "[SURNAME]" hidalgo OR nobleza OR ejecutoria

Alternative WebSearch:
"[SURNAME]" "Padrón de Hidalgos" OR "Real Chancillería" Mexico OR "Nueva España" OR [REGION_SPAIN]
```

### Colonial Emigration to New Spain
```
WebSearch: site:pares.mcu.es "[SURNAME]" "Nueva España" OR "México" emigración OR pasajero
PARES Collection: "Pasajeros a Indias" — lists colonists who emigrated to the Americas 1509–1790

Direct search: https://pares.mcu.es/ParesBusquedas20/catalogo/search?nm=[SURNAME]&destino=Nueva+España
```

### Spanish Civil War / 20th Century
```
WebSearch: "[SURNAME]" "Guerra Civil Española" OR "exilio español" Mexico
Resource: CDMH (Centro Documental de la Memoria Histórica): https://www.pares.mcu.es
```

---

## 3. AGN Mexico — Archivo General de la Nación {#agn-mexico}

**Base URL:** `https://www.agn.gob.mx/`
**Digital catalog:** `https://catalogo.agn.gob.mx/`

The AGN holds colonial records going back to the 1520s. Key sections for heritage research:

### Land Grant Records (Tierras)
```
WebSearch: site:agn.gob.mx "[SURNAME]" tierras OR "merced de tierras" OR hacienda

Catalog search: https://catalogo.agn.gob.mx/
Search term: [SURNAME] + "Tierras" (Ramo/Branch)
What to find: Land grants, disputes, surveys — contain full family names and locations
```

### Colonial Census / Padrones
```
WebSearch: site:agn.gob.mx "[SURNAME]" padrón OR censo [REGION] colonial
Ramo: "Padrones" — lists all household heads with occupation, race/caste classification, and location
Key years: 1777 padrón (very comprehensive), 1790 padrón
```

### Inquisition Records (Inquisición)
```
WebSearch: site:agn.gob.mx "[SURNAME]" inquisición [REGION]
Note: Don't be alarmed — most Inquisition mentions are property records, witness lists, or routine filings.
These contain extraordinarily detailed genealogical information going back 4–5 generations.
```

### Tribute Records (Tributos)
```
WebSearch: site:agn.gob.mx "[SURNAME]" tributos OR "exento de tributo" [REGION]
Key: If a family is listed as EXEMPT from tribute, they had hidalgo status. This is gold.
```

### Vínculos y Mayorazgos (Entailed Estates)
```
WebSearch: site:agn.gob.mx "[SURNAME]" mayorazgo OR vínculo [REGION]
What it means: An entailed estate that passed to the eldest son — only wealthy/noble families had these.
```

---

## 4. NARA — National Archives (US Border & Immigration) {#nara}

### Border Crossing Records (1895–1960)
**Most important collection for Mexican families entering California.**

```
Ancestry.com collection: "US Border Crossings from Mexico to US, 1895-1960"
WebSearch: "[SURNAME]" "[FIRST_NAME]" Mexico border crossing 1910 OR 1920 OR 1930 NARA
Alternative: "[SURNAME]" "[FIRST_NAME]" "El Paso" OR "Nogales" OR "Laredo" immigration 191X

Direct NARA catalog: https://www.archives.gov/research/immigration/border-crossings.html
```

### Ship Manifests (Pacific arrivals to California)
```
Ancestry search: "[SURNAME]" "[FIRST_NAME]" "San Francisco" OR "Los Angeles" ship manifest 1880-1930
WebSearch: "[SURNAME]" ship manifest "San Francisco" OR "Los Angeles" Mexico 1910 OR 1920
NARA collection: "Passenger and Crew Lists of Vessels Arriving at San Francisco, California"
```

### Naturalization Records
```
WebSearch: "[SURNAME]" "[FIRST_NAME]" naturalization California 1920s OR 1930s OR 1940s
NARA: Declaration of Intention + Petition for Naturalization — contain birthplace, parents' names, occupation
```

### Bracero Program Records (1942–1964)
```
WebSearch: "[SURNAME]" "[FIRST_NAME]" bracero contract California OR [US_STATE] 1942 OR 1950s
UC Davis Bracero Archive: https://braceroarchive.org/
Bracero records contain: photo, fingerprint, birthplace, hometown in Mexico, contract employer
```

---

## 5. Mexican State Archives {#mexican-state-archives}

Access the correct archive based on the customer's home state:

| State | Archive Name | Website / Access |
|-------|-------------|-----------------|
| Jalisco | ARAG — Archivo de la Real Audiencia de Guadalajara | arag.jalisco.gob.mx |
| Zacatecas | AHZ — Archivo Histórico del Estado de Zacatecas | archivoszacatecas.gob.mx |
| Guanajuato | AHEG — Archivo Histórico del Estado de Guanajuato | archivo.guanajuato.gob.mx |
| Michoacán | AHM — Archivo Histórico de Michoacán | patrimoniocultural.michoacan.gob.mx |
| Oaxaca | AGEO — Archivo General del Estado de Oaxaca | archivosoaxaca.gob.mx |
| Nuevo León | AGENL — Archivo General del Estado de Nuevo León | agenl.gob.mx |
| Chihuahua | AHECH — Archivo Histórico del Estado de Chihuahua | — (contact directly) |
| Sonora | AGES — Archivo General del Estado de Sonora | archivogeneral.sonora.gob.mx |
| Durango | AGED — Archivo Histórico del Estado de Durango | — (contact directly) |
| San Luis Potosí | AHESLP | archivoseslp.gob.mx |
| Puebla | AGN Puebla / BCCAP | — |

**WebSearch query for any state archive:**
```
"[SURNAME]" "[STATE]" archivo histórico OR "registro civil" OR parroquia genealogía
```

---

## 6. Supplemental Sources {#supplemental-sources}

### California Mission Records (for families with pre-1850 California roots)
```
Resource: Early California Population Project — https://www.huntington.org/early-california-population-project
WebSearch: "[SURNAME]" California mission baptism OR "misión" 1769 1821
Covers: All 21 California missions, 1769–1836
```

### Rancho Land Grant Records (California)
```
Resource: California State Archives — Spanish/Mexican Land Grants
WebSearch: "[SURNAME]" "rancho" "California" land grant OR "diseño" 1830s OR 1840s
```

### Mexico City Notary Records (Protocolos Notariales)
```
WebSearch: "[SURNAME]" protocolo notarial "Ciudad de México" OR [REGION] siglo XVII OR XVIII
These contain: wills, property sales, business contracts — all with full family genealogy
```

### Ancestry.com Key Collections
```
- Mexico, Civil Registration Deaths, 1859-1997
- Mexico, Select Federal Census Records, 1930
- California, County Birth and Death Records, 1800s-1994
- U.S., World War I Draft Registration Cards (for Mexican-Americans, 1917-1918)
```

---

## 7. Push Factor Historical Context Search {#push-factor-search}

Always research the specific historical event happening in the ancestor's REGION and DECADE of departure.

### Query templates:
```
WebSearch: [REGION] Mexico history [DECADE] violence OR revolution OR war OR famine OR drought
WebSearch: "[SURNAME ORIGIN MUNICIPALITY]" historia [DECADE] revolución OR Cristero OR bracero
WebSearch: [STATE] Mexico 1910 OR 1920 OR 1930 OR 1940 historical events agricultural crisis
```

### Key Historical Events by Region:

**Jalisco/Aguascalientes/Colima (Cristero heartland):**
```
WebSearch: Cristero War Jalisco [municipality] 1926 1929 impact
Key fact: Over 90,000 died in the Cristero War. Jalisco was the epicenter.
```

**Chihuahua/Sonora/Durango (Revolution zone):**
```
WebSearch: Mexican Revolution [municipality] Chihuahua Pancho Villa 1910 1920
Key fact: The north was the primary battleground — entire villages evacuated
```

**Oaxaca/Guerrero/Puebla (Indigenous and mestizo displacement):**
```
WebSearch: Oaxaca [municipality] 1900s 1910s land reform OR hacendado displacement
Key fact: The Díaz-era land seizures (Ley Lerdo) stripped communal lands from villages 1856–1910
```

**Michoacán/Guanajuato (Industrial/mining migration):**
```
WebSearch: Guanajuato OR Michoacán mining hacienda decline 1890s 1900s labor migration
Key fact: Silver and gold mine collapses after 1890 sent thousands north seeking railroad work
```
