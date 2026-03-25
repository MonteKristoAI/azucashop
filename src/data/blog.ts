export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "what-is-time-infusion",
    title: "Why AZUCA Gummies Work Faster",
    excerpt: "Most edibles take 60–90 minutes. AZUCA gummies deliver effects in 5–15 minutes thanks to TiME INFUSION® — a delivery system that helps your body absorb cannabinoids quickly through soft tissues.",
    category: "Science",
    date: "2026-03-01",
    readTime: "5 min",
    author: "Azuca Team",
    image: "/images/blog-time-infusion.jpg",
  },
  {
    id: "delta-9-vs-11-hydroxy",
    title: "Why AZUCA Feels Uplifting, Not Sedating",
    excerpt: "Traditional edibles get processed through your liver, creating a heavy, sleepy effect. AZUCA gummies preserve the original Delta-9-THC for a lighter, more euphoric experience — closer to smoking without the smoke.",
    category: "Education",
    date: "2026-02-22",
    readTime: "6 min",
    author: "Azuca Team",
    image: "/images/blog-delta9.jpg",
  },
  {
    id: "social-consumption-revolution",
    title: "The Social Consumption Revolution",
    excerpt: "Cannabis is becoming social again. With fast-acting, predictable gummies, you can enjoy cannabis at dinner parties, happy hours, and social events — just like a cocktail, but better.",
    category: "Industry",
    date: "2026-02-15",
    readTime: "4 min",
    author: "Azuca Team",
    image: "/images/blog-social.jpg",
  },
  {
    id: "edibles-problem-solved",
    title: "The Edibles Problem — And How We Solved It",
    excerpt: "Unpredictable timing, bitter taste, inconsistent dosing — traditional edibles have long frustrated consumers. AZUCA gummies address every pain point with a better formulation and faster delivery.",
    category: "Education",
    date: "2026-02-08",
    readTime: "5 min",
    author: "Azuca Team",
    image: "/images/blog-edibles-problem.jpg",
  },
  {
    id: "bioavailability-explained",
    title: "Why You Feel More With Less",
    excerpt: "Traditional edibles waste most of what you consume. AZUCA gummies deliver significantly more of the active ingredients to your body — meaning better effects from a smaller dose.",
    category: "Science",
    date: "2026-01-28",
    readTime: "4 min",
    author: "Azuca Team",
    image: "/images/blog-bioavailability.jpg",
  },
  {
    id: "fast-acting-edibles-guide",
    title: "A Beginner's Guide to Fast-Acting Gummies",
    excerpt: "New to cannabis? AZUCA gummies deliver predictable, manageable experiences with effects in 5–15 minutes — perfect for newcomers who want to feel confident about what they're trying.",
    category: "Guide",
    date: "2026-01-20",
    readTime: "7 min",
    author: "Azuca Team",
    image: "/images/blog-beginners-guide.jpg",
  },
];
