export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "pour-over-guide",
    title: "The Complete Pour-Over Brewing Guide",
    excerpt: "Master the art of pour-over coffee with our step-by-step technique guide. From water temperature to pour patterns, elevate your morning ritual.",
    category: "Brewing",
    date: "2026-03-01",
    readTime: "5 min",
    author: "Alex Chen",
  },
  {
    id: "single-origin-vs-blend",
    title: "Single Origin vs. Blend: What's the Difference?",
    excerpt: "Understanding the distinction between single-origin coffees and blends helps you choose the right bean for your palate and brewing method.",
    category: "Education",
    date: "2026-02-22",
    readTime: "4 min",
    author: "Maria Santos",
  },
  {
    id: "matcha-ceremony",
    title: "The Japanese Matcha Ceremony Explained",
    excerpt: "Discover the centuries-old tradition of chanoyu and how ceremonial matcha preparation can bring mindfulness to your daily routine.",
    category: "Culture",
    date: "2026-02-15",
    readTime: "6 min",
    author: "Yuki Tanaka",
  },
  {
    id: "water-quality",
    title: "Why Water Quality Makes or Breaks Your Coffee",
    excerpt: "Your cup is 98% water. Learn how mineral content, pH, and temperature affect extraction and how to optimize your water for better coffee.",
    category: "Brewing",
    date: "2026-02-08",
    readTime: "4 min",
    author: "Alex Chen",
  },
  {
    id: "ethical-sourcing",
    title: "From Farm to Cup: Our Ethical Sourcing Journey",
    excerpt: "Follow our team to the highlands of Ethiopia and Colombia to see how direct trade relationships create better coffee and stronger communities.",
    category: "Sustainability",
    date: "2026-01-28",
    readTime: "7 min",
    author: "Maria Santos",
  },
  {
    id: "oolong-oxidation",
    title: "Understanding Oolong: The Spectrum of Oxidation",
    excerpt: "Oolong teas range from light and floral to dark and roasted. Explore how oxidation levels create dramatically different flavors from the same leaf.",
    category: "Education",
    date: "2026-01-20",
    readTime: "5 min",
    author: "Yuki Tanaka",
  },
];
