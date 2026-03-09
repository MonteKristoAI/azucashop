import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="hr-accent mb-5" />
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Learn & Explore
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-block text-xs tracking-[0.15em] uppercase text-neon-pink hover:text-foreground transition-colors duration-300"
          >
            All Articles →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group block border border-border/20 bg-card/40 hover:border-border/40 transition-all duration-500"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-secondary/50 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/15">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.1em] uppercase text-neon-teal">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-neon-pink transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-foreground/40 group-hover:text-neon-pink group-hover:gap-2.5 transition-all duration-300">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
