import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 2%) 100%)" }} />

      {/* Cinematic glow behind headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(170 80% 50% / 0.07) 0%, hsl(330 90% 60% / 0.04) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 text-center w-full px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="label-text mb-8 md:mb-10"
        >
          Fast-Acting Cannabis Gummies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="font-display font-extrabold uppercase text-foreground leading-[0.82] mx-auto"
          style={{
            fontSize: "clamp(5rem, 15vw, 14rem)",
            letterSpacing: "0.08em",
          }}
        >
          Entourage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
          className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground mt-6 md:mt-8"
        >
          The Social Gummy
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="text-muted-foreground/50 text-xs md:text-sm tracking-[0.15em] mt-6 max-w-xs mx-auto leading-relaxed"
        >
          Feel it in minutes. Share the moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="mt-12 md:mt-16 flex gap-3 justify-center"
        >
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
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
