import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="heading-display text-foreground mb-2"
          style={{ letterSpacing: "0.25em" }}
        >
          Entourage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="heading-sub text-muted-foreground mb-8"
        >
          The Social Gummy
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-3 mb-12"
        >
          <p className="text-sm md:text-base tracking-[0.15em] uppercase text-muted-foreground">
            Fast-Acting Cannabis Gummies
          </p>
          <p className="text-sm md:text-base tracking-[0.15em] text-accent">
            Powered by TiME Infusion®
          </p>
          <p className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/70 mt-4">
            Feel it in minutes. Share the moment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="px-8 py-3 border border-foreground text-foreground text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Explore Gummies
          </a>
          <a
            href="#technology"
            className="px-8 py-3 border border-muted-foreground/30 text-muted-foreground text-sm tracking-[0.2em] uppercase hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
