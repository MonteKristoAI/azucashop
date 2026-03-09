import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with subtle zoom — brighter to show silhouettes */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "brightness(1.15) contrast(1.1)",
        }}
      />
      {/* Overlay — slightly less opaque to let the image breathe */}
      <div className="absolute inset-0 bg-background/60" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, hsl(0 0% 2%) 100%)" }}
      />

      {/* Cinematic tri-color glow behind headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 0.4, ease }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[90vw] max-w-[1200px] h-[40vh] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, hsl(170 80% 50% / 0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, hsl(330 90% 60% / 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 60%, hsl(45 100% 55% / 0.03) 0%, transparent 50%)
          `,
          filter: "blur(100px)",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 text-center w-full px-12 md:px-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-foreground/50 mb-12 md:mb-16"
        >
          Fast-Acting Cannabis Gummies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="font-display font-extrabold uppercase text-foreground leading-[0.82] mx-auto"
          style={{
            fontSize: "clamp(3rem, 9.5vw, 8.5rem)",
            letterSpacing: "0.22em",
          }}
        >
          Entourage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease }}
          className="font-display text-xs md:text-sm tracking-[0.45em] uppercase text-muted-foreground/70 mt-8 md:mt-10"
        >
          The Social Gummy
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease }}
          className="text-muted-foreground/35 text-[11px] md:text-xs tracking-[0.2em] mt-5 max-w-[260px] mx-auto leading-[2]"
          style={{ fontStyle: "italic" }}
        >
          Feel it in minutes. Share the moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="mt-14 md:mt-20 flex gap-5 justify-center"
        >
          <a
            href="#products"
            className="group relative px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-700 hover:shadow-[0_0_30px_hsl(170_80%_50%/0.15)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-accent-foreground">Explore</span>
            <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          </a>
          <a
            href="#technology"
            className="px-10 py-4 border border-foreground/12 text-foreground/35 text-[10px] tracking-[0.3em] uppercase transition-all duration-700 hover:border-foreground/40 hover:text-foreground/80 hover:shadow-[0_0_20px_hsl(0_0%_100%/0.03)]"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
