import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const ArticlePage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-neon-pink text-sm">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-24 pb-16 max-w-[720px] mx-auto px-8 md:px-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] tracking-[0.1em] uppercase text-neon-teal">{post.category}</span>
            <span className="text-[10px] text-muted-foreground">{post.date}</span>
            <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
          </div>

          <h1
            className="font-display font-extrabold text-foreground leading-[1.15] mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}
          >
            {post.title}
          </h1>

          {/* Placeholder content */}
          <div className="aspect-[16/9] bg-secondary/50 mb-10 flex items-center justify-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/15">Article Image</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-base text-foreground/60 leading-[1.9] mb-6">
              {post.excerpt}
            </p>
            <p className="text-base text-foreground/60 leading-[1.9] mb-6">
              This is a placeholder for the full article content. In a production environment, this would be populated with rich content from a CMS or database, including detailed explanations, images, and references.
            </p>
            <p className="text-base text-foreground/60 leading-[1.9] mb-6">
              Our commitment to transparency means providing accurate, research-backed information to help you make informed decisions about hemp wellness products.
            </p>
          </div>
        </motion.div>
      </article>
      <Footer />
    </div>
  );
};

export default ArticlePage;
