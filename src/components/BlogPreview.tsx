import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";

const BlogPreview = () => {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="section-container py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-2">From the Blog</h2>
          <p className="text-muted-foreground">Brewing tips, origin stories, and coffee culture.</p>
        </div>
        <Link to="/blog" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">All Posts <ArrowRight className="w-4 h-4" /></Link>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latest.map((post, i) => (
          <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
            <Link to="/blog" className="block rounded-xl border border-border bg-card overflow-hidden hover-lift">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <span className="text-xs font-display font-bold text-muted-foreground/30 uppercase tracking-widest">{post.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-medium text-primary uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
