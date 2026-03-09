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
    id: "what-is-time-infusion",
    title: "What Is TiME INFUSION® and How Does It Work?",
    excerpt: "Thermodynamic Individual Molecular Encapsulation® creates hydrophilic cannabinoids that absorb through soft tissues in 5–15 minutes instead of up to 90 minutes with traditional edibles.",
    category: "Science",
    date: "2026-03-01",
    readTime: "5 min",
    author: "Azuca Team",
  },
  {
    id: "delta-9-vs-11-hydroxy",
    title: "Delta-9-THC vs 11-Hydroxy-THC: Why It Matters",
    excerpt: "Traditional edibles convert Delta-9-THC into 11-Hydroxy-THC through liver metabolism, creating heavier sedative effects. TiME INFUSION® preserves Delta-9 for a lighter, euphoric experience.",
    category: "Education",
    date: "2026-02-22",
    readTime: "6 min",
    author: "Azuca Team",
  },
  {
    id: "social-consumption-revolution",
    title: "The Social Consumption Revolution",
    excerpt: "As consumption lounges enter state laws, ingestibles need predictable onset and offset times. Welcome to the new era of Happy Hour Edibles powered by TiME INFUSION®.",
    category: "Industry",
    date: "2026-02-15",
    readTime: "4 min",
    author: "Azuca Team",
  },
  {
    id: "edibles-problem-solved",
    title: "The Edibles Problem — And How We Solved It",
    excerpt: "From unpredictable timing to bitter taste and inconsistent dosing, traditional edibles have long frustrated consumers. TiME INFUSION® addresses every pain point.",
    category: "Education",
    date: "2026-02-08",
    readTime: "5 min",
    author: "Azuca Team",
  },
  {
    id: "bioavailability-explained",
    title: "18–22% Bioavailability: What That Means For You",
    excerpt: "Traditional edibles deliver just 2–6% of active ingredients. TiME INFUSION® achieves 18–22% bioavailability through hydrophilic encapsulation and soft tissue absorption.",
    category: "Science",
    date: "2026-01-28",
    readTime: "4 min",
    author: "Azuca Team",
  },
  {
    id: "fast-acting-edibles-guide",
    title: "A Beginner's Guide to Fast-Acting Edibles",
    excerpt: "New to cannabis edibles? Learn how TiME INFUSION® technology delivers predictable, manageable experiences with effects in 5–15 minutes — perfect for newcomers seeking a positive outcome.",
    category: "Guide",
    date: "2026-01-20",
    readTime: "7 min",
    author: "Azuca Team",
  },
];
