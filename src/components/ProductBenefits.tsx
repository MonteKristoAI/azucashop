import { motion } from "framer-motion";
import { Zap, Target, FlaskConical, Droplets } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: Zap,
    title: "Fast Acting",
    description: "Feel effects in 5–15 minutes thanks to advanced infusion technology.",
    accentVar: "--neon-teal",
  },
  {
    icon: Target,
    title: "Consistent Dosing",
    description: "Every piece delivers predictable results.",
    accentVar: "--neon-pink",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Lab Tested",
    description: "All products verified with COA reports.",
    accentVar: "--neon-gold",
  },
  {
    icon: Droplets,
    title: "Better Absorption",
    description: "Water-friendly cannabinoids for improved uptake.",
    accentVar: "--neon-teal",
  },
];

const ProductBenefits = () => {
  return (
    <section className="py-16 md:py-24 border-t border-b border-border/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            Why Entourage{" "}
            <span className="text-neon-pink">Hits Different</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="group relative border border-border/20 bg-card/40 backdrop-blur-sm p-7 text-center hover:border-border/40 transition-all duration-500"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, hsl(var(${benefit.accentVar}) / 0.06) 0%, transparent 70%)`,
                }}
              />

              <div
                className="relative w-11 h-11 mx-auto flex items-center justify-center mb-5"
                style={{ background: `hsl(var(${benefit.accentVar}) / 0.1)` }}
              >
                <benefit.icon
                  className="w-5 h-5"
                  style={{ color: `hsl(var(${benefit.accentVar}))` }}
                />
              </div>

              <h3
                className="relative font-display font-bold uppercase text-foreground text-sm mb-2.5"
                style={{ letterSpacing: "0.08em" }}
              >
                {benefit.title}
              </h3>

              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
