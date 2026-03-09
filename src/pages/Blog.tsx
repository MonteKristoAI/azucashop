import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <h1
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.06em" }}
          >
            Blog
          </h1>
          <p className="text-sm text-muted-foreground">
            Education, transparency, and wellness insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group block border border-border/20 bg-card/40 hover:border-border/40 transition-all duration-500"
              >
                <div className="aspect-[16/10] bg-secondary/50 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/15">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.1em] uppercase text-neon-teal">{post.category}</span>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-foreground text-base leading-snug mb-3 group-hover:text-neon-pink transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-foreground/40 group-hover:text-neon-pink transition-all duration-300">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
