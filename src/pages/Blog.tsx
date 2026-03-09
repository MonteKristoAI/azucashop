import { useState } from "react";
import { Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";

const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-3">Blog</h1>
          <p className="text-muted-foreground max-w-lg">Brewing guides, origin stories, and the culture behind every cup.</p>
        </motion.div>
        <div className="flex flex-wrap gap-2 mb-10">
          <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>All</button>
          {allCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="rounded-xl border border-border bg-card overflow-hidden hover-lift group cursor-pointer">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                  <span className="text-xs font-display font-bold text-muted-foreground/30 uppercase tracking-widest">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-[11px] text-muted-foreground">
                    <span className="text-primary font-medium uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-4">{post.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
