export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  effects: string[];
  dosage: string;
  ingredients: string;
  labTested: boolean;
  image: string;
  badge?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "time-gummy-social",
    name: "TiME Social Gummy",
    category: "edibles",
    price: 34.99,
    description:
      "Engineered with TiME INFUSION® for a fast-acting, socially calibrated experience. Feel effects in 5–15 minutes with uplifting Delta-9 THC delivered through molecular encapsulation. Designed for gatherings, events, and moments that matter.",
    shortDescription: "Fast-acting Delta-9 gummy for social moments",
    effects: ["social", "euphoria", "fast-onset"],
    dosage: "5mg Delta-9 THC per piece",
    ingredients:
      "TiME INFUSION® encapsulated Delta-9 THC, natural flavors, pectin, citric acid, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "time-gummy-unwind",
    name: "TiME Unwind Gummy",
    category: "edibles",
    price: 36.99,
    description:
      "A calming fast-acting edible powered by TiME INFUSION® technology. Hydrophilic cannabinoids absorb through soft tissue for rapid onset without the heavy 11-Hydroxy-THC effects of traditional edibles. Perfect for unwinding with predictable timing.",
    shortDescription: "Calm, predictable relaxation in minutes",
    effects: ["calm", "relaxation", "fast-onset"],
    dosage: "10mg Delta-9 THC per piece",
    ingredients:
      "TiME INFUSION® encapsulated Delta-9 THC, CBN, natural flavors, pectin, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "time-gummy-elevate",
    name: "TiME Elevate Gummy",
    category: "edibles",
    price: 39.99,
    description:
      "Higher-potency fast-acting edible delivering euphoric Delta-9 THC effects similar to smoking — without combustion. TiME INFUSION® ensures rapid sublingual absorption with no bitter distillate taste.",
    shortDescription: "Higher potency euphoric experience",
    effects: ["euphoria", "energy", "fast-onset"],
    dosage: "25mg Delta-9 THC per piece",
    ingredients:
      "TiME INFUSION® encapsulated Delta-9 THC, natural flavors, pectin, citric acid, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
    badge: "High Potency",
    featured: true,
  },
  {
    id: "time-infused-seltzer",
    name: "TiME Infused Seltzer",
    category: "beverages",
    price: 7.99,
    description:
      "A sessionable cannabis beverage powered by water-soluble TiME INFUSION® cannabinoids. Designed for social consumption with predictable onset and offset — the cannabis equivalent of a craft cocktail.",
    shortDescription: "Sessionable cannabis seltzer, 5-minute onset",
    effects: ["social", "light", "fast-onset"],
    dosage: "5mg Delta-9 THC per can",
    ingredients:
      "Carbonated water, TiME INFUSION® encapsulated Delta-9 THC, natural flavors, citric acid",
    labTested: true,
    image: "/placeholder.svg",
    badge: "New",
  },
  {
    id: "time-beverage-mixer",
    name: "TiME Beverage Mixer",
    category: "beverages",
    price: 24.99,
    description:
      "Professional-grade water-soluble cannabinoid mixer for creating infused beverages. TiME INFUSION® technology ensures complete miscibility with no separation, no bitter taste, and precise dosing per serving.",
    shortDescription: "Water-soluble mixer for infused cocktails",
    effects: ["social", "versatile"],
    dosage: "5mg Delta-9 THC per serving (20 servings)",
    ingredients:
      "Purified water, TiME INFUSION® encapsulated Delta-9 THC, natural emulsifiers",
    labTested: true,
    image: "/placeholder.svg",
  },
  {
    id: "time-culinary-drops",
    name: "TiME Culinary Drops",
    category: "culinary",
    price: 44.99,
    description:
      "Shelf-stable, hydrophilic cannabinoid drops designed for chefs and culinary professionals. TiME INFUSION® molecular encapsulation ensures even distribution in any recipe with consistent dosing and no cannabis taste.",
    shortDescription: "Precision cannabinoid drops for chefs",
    effects: ["versatile", "precision"],
    dosage: "10mg Delta-9 THC per dropper",
    ingredients:
      "TiME INFUSION® encapsulated Delta-9 THC, MCT oil, natural emulsifiers",
    labTested: true,
    image: "/placeholder.svg",
  },
];

export const categories = [
  {
    id: "edibles",
    name: "Fast-Acting Edibles",
    description:
      "Powered by TiME INFUSION® for 5–15 minute onset with uplifting Delta-9 THC effects.",
    image: "/placeholder.svg",
  },
  {
    id: "beverages",
    name: "Cannabis Beverages",
    description:
      "Water-soluble cannabinoids for sessionable social consumption with predictable timing.",
    image: "/placeholder.svg",
  },
  {
    id: "culinary",
    name: "Culinary Cannabis",
    description:
      "Premium hydrophilic ingredients for chefs — shelf-stable, great-tasting, precisely dosed.",
    image: "/placeholder.svg",
  },
];

export const blogPosts = [
  {
    id: "fast-acting-vs-traditional",
    title: "Fast-Acting vs Traditional Edibles: The Science",
    excerpt:
      "Why TiME INFUSION® delivers effects in minutes while traditional edibles take over an hour — and why Delta-9 THC matters.",
    image: "/placeholder.svg",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    category: "Science",
  },
  {
    id: "social-consumption-future",
    title: "The Future of Social Cannabis Consumption",
    excerpt:
      "How predictable-onset edibles and beverages are transforming cannabis lounges, events, and social gatherings.",
    image: "/placeholder.svg",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    category: "Industry",
  },
  {
    id: "understanding-bioavailability",
    title: "Understanding Cannabinoid Bioavailability",
    excerpt:
      "What 18–22% bioavailability means and how molecular encapsulation improves cannabinoid absorption.",
    image: "/placeholder.svg",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    category: "Education",
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Felt it in under 10 minutes. Perfect for going out with friends without waiting an hour.",
    product: "TiME Social Gummy",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Finally, a consistent product. Every piece delivers the same experience. No more guessing.",
    product: "TiME Unwind Gummy",
  },
  {
    name: "Jenna K.",
    rating: 5,
    text: "The seltzer is a game changer for parties. Feels like having a cocktail but better.",
    product: "TiME Infused Seltzer",
  },
  {
    name: "David R.",
    rating: 4,
    text: "No bitter aftertaste at all. These taste incredible compared to every other edible I've tried.",
    product: "TiME Elevate Gummy",
  },
];
