

# Repositioning AZUCA: Tech-First → Premium Gummy Brand

## Overview
Rewrite all copy across the site to shift from a B2B technology narrative to a B2C premium gummy brand experience. No layout or structural changes — only messaging, hierarchy, and emphasis.

---

## Changes by File

### 1. Hero Section (`src/components/HeroSection.tsx`) — CRITICAL
- **Headline**: "A Better Kind of Gummy Experience"
- **Subheadline**: "Designed to feel social, clear, and consistent — not heavy or unpredictable."
- **Supporting line**: "Our entourage formulation (THC + CBD + terpenes) enhanced with TiME INFUSION® delivers effects in 5–15 minutes."
- **CTAs**: "Shop Gummies" + "Explore the Experience"
- **Pill label**: "Social · Sessionable · Fast-Acting"
- Remove molecular science image reference; keep the `heroScience` asset as-is (no image swap needed in code, but alt text updated)

### 2. New Section: Entourage Effect (`src/components/EntourageSection.tsx`)
- Create a new component inserted into `Index.tsx` after `CategoryCards`
- **Header**: "Why These Gummies Feel Different"
- **Three simple cards** (no tech jargon):
  - **Full-Spectrum Formulation**: THC + CBD + terpenes working together for a balanced, full-body experience
  - **Mimics Smoking, Without Smoke**: The entourage effect delivers a clear, uplifting feeling — similar to smoking but without inhaling
  - **Enhanced with TiME INFUSION®**: Faster onset (5–15 min) and consistent effects, every time
- Consumer-friendly language throughout, no molecular science

### 3. TrustSection (`src/components/TrustSection.tsx`)
- Change header from "The TiME INFUSION® Advantage" → "The AZUCA Difference"
- Rewrite stat descriptions to benefit-focused:
  - "5–15 Min Onset" → desc: "Feel it fast, not 90 minutes later"
  - "Water-Soluble" → rename to "Great Taste" → desc: "No bitter cannabis flavor"
  - "Bioavailability 18–22%" → rename to "More From Every Dose" → desc: "Get more effect per gummy"
  - "Shelf Stable 24mo" → rename to "Always Consistent" → desc: "Same great experience every time"

### 4. AboutSection (`src/components/AboutSection.tsx`)
- Change header from "The Science Behind TiME INFUSION®" → "What Makes AZUCA Different"
- Rewrite paragraph to lead with the gummy experience, mention TiME INFUSION® as "enhanced with" in one line
- Update value cards:
  - "TiME INFUSION®" → "Fast-Acting": "Feel effects in 5–15 minutes, not an hour and a half"
  - "Delta-9-THC Preserved" → "Uplifting, Not Sedating": "A lighter, euphoric experience — no couch-lock"
  - "Premium Effects" → "Full-Spectrum Formulation": "THC + CBD + terpenes for the entourage effect"
  - "Social Ready" stays, desc updated: "Perfect for parties, dinners, and good times with friends"

### 5. FAQSection (`src/components/FAQSection.tsx`)
- Change subtitle from "Everything you need to know about TiME INFUSION® technology" → "Common questions about AZUCA gummies"
- Rewrite FAQ answers to lead with consumer benefits, mention TiME INFUSION® only as a brief "enhanced with" aside
- Reduce tech jargon (remove "hydrophilic," "buccal absorption," "Thermodynamic Individual Molecular Encapsulation")

### 6. Footer (`src/components/Footer.tsx`)
- Change description from "Fast-acting cannabis products powered by TiME INFUSION® technology" → "Premium cannabis gummies crafted for a social, consistent, and enjoyable experience."

### 7. Product Data (`src/data/products.ts`)
- **Categories**: Rewrite descriptions to experience-focused:
  - Gummies: "Social, fast-acting gummies that feel great in 5–15 minutes"
  - Beverages: "Refreshing cannabis beverages perfect for social occasions"
  - Chocolates: "Premium infused chocolates with no bitter taste"
- **Product descriptions & shortDescriptions**: Rewrite all to lead with experience/feeling, move "TiME INFUSION®" to end-of-sentence supporting mention or remove entirely from short descriptions

### 8. About Page (`src/pages/About.tsx`) — CRITICAL BUG FIX
- Replace "About Entourage" → "About AZUCA"
- Replace "We started Entourage" → "We started AZUCA"
- Rewrite copy to tell the story of a premium gummy brand, not a tech company
- Add brand tagline: "A better kind of gummy experience"

### 9. Blog Data (`src/data/blog.ts`)
- Rewrite titles and excerpts to be consumer-facing:
  - "What Is TiME INFUSION®..." → "Why AZUCA Gummies Work Faster"
  - "18–22% Bioavailability..." → "Why You Feel More With Less"
  - Keep educational tone but lead with consumer benefit, not tech specs

### 10. FeaturedProducts (`src/components/FeaturedProducts.tsx`)
- Change subtitle from "Fast-acting favorites powered by TiME INFUSION® technology" → "Our most-loved gummies and treats"

### 11. Index Page (`src/pages/Index.tsx`)
- Add `EntourageSection` import and place it after `CategoryCards`

---

## Files Touched (11 files)
1. `src/components/HeroSection.tsx` — rewrite copy
2. `src/components/EntourageSection.tsx` — new file
3. `src/pages/Index.tsx` — add EntourageSection
4. `src/components/TrustSection.tsx` — rewrite copy
5. `src/components/AboutSection.tsx` — rewrite copy
6. `src/components/FAQSection.tsx` — rewrite copy
7. `src/components/Footer.tsx` — rewrite tagline
8. `src/components/FeaturedProducts.tsx` — rewrite subtitle
9. `src/data/products.ts` — rewrite all descriptions
10. `src/pages/About.tsx` — fix brand name + rewrite
11. `src/data/blog.ts` — rewrite titles/excerpts

## What Does NOT Change
- Layout, structure, styling, animations, routing
- Component hierarchy and page order
- Images, colors, fonts
- Cart, checkout, product detail functionality

