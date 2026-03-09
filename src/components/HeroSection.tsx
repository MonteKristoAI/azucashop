import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="section-container relative z-10 pt-24">
      <div className="max-w-2xl">
        <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-6">
          Fast-Acting · Water-Friendly · Precision Dosing
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display font-extrabold text-foreground leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          It's About<br /><span className="text-primary">TiME INFUSION®</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
          The molecular encapsulation technology that makes cannabis products fast-acting, predictable, and better tasting.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-base text-primary font-medium mb-8 max-w-lg">
          Feel the effects in 5–15 minutes instead of 90.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
          <Button size="lg" className="rounded-lg font-medium" asChild><Link to="/blog">Explore the Science <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          <Button size="lg" variant="outline" className="rounded-lg font-medium" asChild><Link to="/shop">Shop Products</Link></Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
