import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden pb-20 md:pb-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="label-text mb-8 md:mb-12"
          >
            Fast-Acting Cannabis Gummies — Powered by TiME Infusion®
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
            className="heading-display text-foreground"
          >
            Entourage
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="text-muted-foreground text-sm md:text-base max-w-xs leading-relaxed tracking-wide">
              Feel it in minutes.<br />Share the moment.
            </p>

            <div className="flex gap-4">
              <a
                href="#products"
                className="px-8 py-3.5 bg-foreground text-background text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                Explore
              </a>
              <a
                href="#technology"
                className="px-8 py-3.5 border border-foreground/20 text-foreground/60 text-xs tracking-[0.25em] uppercase hover:border-foreground hover:text-foreground transition-all duration-500"
              >
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
