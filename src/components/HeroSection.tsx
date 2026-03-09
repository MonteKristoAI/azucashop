import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Droplets, Atom } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  { icon: Clock, label: "5–15 min onset" },
  { icon: Droplets, label: "Hydrophilic cannabinoids" },
  { icon: Atom, label: "Molecular encapsulation" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, filter: "brightness(0.5) contrast(1.1)" }}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 2%) 100%)" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[50vh] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 35% 50%, hsl(var(--neon-teal) / 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 65% 50%, hsl(var(--neon-pink) / 0.03) 0%, transparent 60%)
          `,
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 w-full pt-28 pb-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="label-text mb-6"
          >
            Powered by Azuca
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease }}
            className="font-display font-extrabold uppercase text-foreground leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)", letterSpacing: "0.06em" }}
          >
            TiME
            <br />
            <span className="text-neon-pink">INFUSION</span>®
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-md mb-10"
          >
            The breakthrough molecular encapsulation technology that makes cannabis edibles fast‑acting, great‑tasting, and predictable. Feel it in 5–15 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              to="/about"
              className="group relative px-8 py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)]"
            >
              Discover the Science
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-foreground/15 text-foreground/50 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-500 hover:border-foreground/40 hover:text-foreground/80"
            >
              Partner With Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <p.icon className="w-3.5 h-3.5 text-accent" />
                <span className="text-[10px] tracking-[0.1em] uppercase text-foreground/35">
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
