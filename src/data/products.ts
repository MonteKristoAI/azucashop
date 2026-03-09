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
}

export const products: Product[] = [
  {
    id: "relaxed-gummies",
    name: "Relaxed Gummies",
    category: "gummies",
    price: 34.99,
    description: "Unwind with our calming blend of THC and CBD, infused with a soothing terpene profile designed for deep relaxation. Perfect for winding down after a long day.",
    shortDescription: "Calming THC + CBD blend for deep relaxation",
    effects: ["calm", "sleep", "recovery"],
    dosage: "10mg THC | 5mg CBD per piece",
    ingredients: "Hemp-derived THC, CBD, natural flavors, pectin, citric acid, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
    badge: "Best Seller",
  },
  {
    id: "uplifted-gummies",
    name: "Uplifted Gummies",
    category: "gummies",
    price: 34.99,
    description: "Elevate your mood with an energetic terpene blend crafted for social moments. Fast-acting formula lets you feel the effects in minutes, not hours.",
    shortDescription: "Energetic blend for social moments",
    effects: ["focus", "calm"],
    dosage: "10mg THC | 5mg CBD per piece",
    ingredients: "Hemp-derived THC, CBD, natural flavors, pectin, citric acid, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
  },
  {
    id: "balanced-gummies",
    name: "Balanced Gummies",
    category: "gummies",
    price: 39.99,
    description: "The perfect equilibrium of THC and CBD for those who want a well-rounded experience. Higher potency for experienced users seeking balanced effects.",
    shortDescription: "Higher potency balanced experience",
    effects: ["calm", "focus", "recovery"],
    dosage: "25mg THC | 5mg CBD per piece",
    ingredients: "Hemp-derived THC, CBD, natural flavors, pectin, citric acid, organic cane sugar",
    labTested: true,
    image: "/placeholder.svg",
    badge: "High Potency",
  },
  {
    id: "sleep-gummies",
    name: "Sleep Gummies",
    category: "gummies",
    price: 36.99,
    description: "Drift off naturally with our sleep-focused formula featuring CBN and calming terpenes. Wake up refreshed without the grogginess.",
    shortDescription: "CBN-infused formula for restful sleep",
    effects: ["sleep", "calm"],
    dosage: "10mg THC | 5mg CBN per piece",
    ingredients: "Hemp-derived THC, CBN, melatonin, natural flavors, pectin, citric acid",
    labTested: true,
    image: "/placeholder.svg",
    badge: "New",
  },
  {
    id: "full-spectrum-tincture",
    name: "Full Spectrum Tincture",
    category: "tinctures",
    price: 49.99,
    description: "Premium full-spectrum hemp extract in MCT oil. Sublingual delivery for fast, precise dosing. Third-party lab tested for purity and potency.",
    shortDescription: "Premium full-spectrum hemp oil",
    effects: ["calm", "recovery"],
    dosage: "30mg CBD per dropper",
    ingredients: "Full-spectrum hemp extract, organic MCT oil",
    labTested: true,
    image: "/placeholder.svg",
  },
  {
    id: "pet-cbd-drops",
    name: "Pet CBD Drops",
    category: "pet",
    price: 29.99,
    description: "Veterinarian-formulated CBD drops for your furry friends. Supports calm behavior, joint health, and overall wellness. Bacon-flavored for easy administration.",
    shortDescription: "Vet-formulated CBD for pets",
    effects: ["calm", "recovery"],
    dosage: "5mg CBD per dropper",
    ingredients: "Broad-spectrum hemp extract, organic MCT oil, natural bacon flavor",
    labTested: true,
    image: "/placeholder.svg",
  },
];

export const categories = [
  {
    id: "gummies",
    name: "Gummies",
    description: "Fast-acting, precisely dosed hemp gummies for every mood.",
    image: "/placeholder.svg",
    count: products.filter((p) => p.category === "gummies").length,
  },
  {
    id: "tinctures",
    name: "Tinctures & Oils",
    description: "Full-spectrum hemp extracts for sublingual or topical use.",
    image: "/placeholder.svg",
    count: products.filter((p) => p.category === "tinctures").length,
  },
  {
    id: "pet",
    name: "Pet CBD",
    description: "Vet-formulated wellness drops for your furry companions.",
    image: "/placeholder.svg",
    count: products.filter((p) => p.category === "pet").length,
  },
];

export const blogPosts = [
  {
    id: "delta-8-vs-delta-9",
    title: "Delta-8 vs Delta-9: What's the Difference?",
    excerpt: "Understanding the key differences between these two popular cannabinoids and how they affect your experience.",
    image: "/placeholder.svg",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    category: "Education",
  },
  {
    id: "cbd-for-pets",
    title: "How CBD Helps Pets with Anxiety",
    excerpt: "Discover how veterinarian-approved CBD can help calm anxious pets and support their overall wellness.",
    image: "/placeholder.svg",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    category: "Pet Wellness",
  },
  {
    id: "understanding-coa",
    title: "Understanding COA Lab Reports",
    excerpt: "Learn how to read Certificates of Analysis and why third-party lab testing matters for your safety.",
    image: "/placeholder.svg",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    category: "Transparency",
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "These gummies hit in under 10 minutes. Perfect for going out with friends without waiting an hour to feel anything.",
    product: "Uplifted Gummies",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Finally, a consistent product. Every piece is the same. No more guessing games with dosing.",
    product: "Relaxed Gummies",
  },
  {
    name: "Jenna K.",
    rating: 5,
    text: "The sleep gummies are a game changer. I fall asleep faster and wake up actually refreshed.",
    product: "Sleep Gummies",
  },
  {
    name: "David R.",
    rating: 4,
    text: "My dog gets anxious during storms and these CBD drops calm her down within 20 minutes. Lifesaver.",
    product: "Pet CBD Drops",
  },
];
