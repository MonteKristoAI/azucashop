import { motion } from "framer-motion";
import { Zap, Target, Droplets, Users } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: Zap,
    title: "Fast Acting",
    description: "Feel effects in 5–15 minutes thanks to TiME Infusion technology.",
    accentVar: "--neon-teal",
  },
  {
    icon: Target,
    title: "Consistent Dosing",
    description: "Every piece delivers precise and predictable effects.",
    accentVar: "--neon-pink",
  },
  {
    icon: Droplets,
    title: "Better Absorption",
    description: "Water-friendly cannabinoids for faster uptake.",
    accentVar: "--neon-teal",
  },
  {
    icon: Users,
    title: "Made for Social Moments",
    description: "Designed for nights out, celebrations, and shared experiences.",
    accentVar: "--neon-pink",
  },
];

const DetailsSection = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-12 md:mb-16"
        >
          <div className="hr-accent mb-6" />
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "0.06em" }}
          >
            Why Entourage
            <br />
            <span className="text-neon-pink">Hits Different</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease }}
              className="group relative rounded-sm border border-border/30 bg-card/60 backdrop-blur-sm p-7 md:p-8 hover:border-border/60 transition-all duration-700"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, hsl(var(${benefit.accentVar}) / 0.08) 0%, transparent 70%)`,
                }}
              />

              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                style={{ background: `hsl(var(${benefit.accentVar}) / 0.12)` }}
              >
                <benefit.icon
                  className="w-5 h-5"
                  style={{ color: `hsl(var(${benefit.accentVar}))` }}
                />
              </div>

              <h3
                className="font-display font-bold uppercase text-foreground text-sm md:text-base mb-3"
                style={{ letterSpacing: "0.08em" }}
              >
                {benefit.title}
              </h3>

              <p className="text-sm md:text-[0.94rem] text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
