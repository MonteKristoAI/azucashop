import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden pb-16 md:pb-24">
      {/* Background image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 2%) 100%)" }} />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease }}
            className="mb-10 md:mb-16"
          >
            <div className="hr-accent mb-6" />
            <p className="label-text">
              Fast-Acting Cannabis Gummies
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease }}
            className="heading-display text-foreground"
          >
            Entourage
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease }}
            className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
          >
            <p className="text-muted-foreground text-sm max-w-[240px] leading-[1.8] tracking-wide">
              Feel it in minutes.<br />Share the moment.
            </p>

            <div className="flex gap-3">
              <a
                href="#products"
                className="px-8 py-3.5 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-700"
              >
                Explore
              </a>
              <a
                href="#technology"
                className="px-8 py-3.5 border border-foreground/15 text-foreground/40 text-[10px] tracking-[0.3em] uppercase hover:border-foreground/60 hover:text-foreground transition-all duration-700"
              >
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
