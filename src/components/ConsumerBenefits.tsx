import { motion } from "framer-motion";
import { Zap, Sparkles, Timer, Users, Wind, Beaker } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: Zap,
    title: "Fast-Acting",
    description: "Experience effects within 5–15 minutes, akin to the immediacy of smoking, for a predictable and manageable experience.",
    accentVar: "--neon-teal",
  },
  {
    icon: Sparkles,
    title: "Premium Effects",
    description: "Soft tissue absorption preserves Delta-9-THC for a lighter, more euphoric sensation — without the heavy sedation of 11-Hydroxy-THC.",
    accentVar: "--neon-pink",
  },
  {
    icon: Wind,
    title: "Great Tasting",
    description: "No bitter distillate taste or oily texture. Our encapsulation process creates edibles that are genuinely enjoyable.",
    accentVar: "--neon-gold",
  },
  {
    icon: Timer,
    title: "Predictable Timing",
    description: "Consistent onset and offset let consumers trust their experience — essential for social settings and microdosing routines.",
    accentVar: "--neon-teal",
  },
  {
    icon: Users,
    title: "Built for Social",
    description: "Fast onset and predictable dosing make TiME INFUSION® products ideal for events, lounges, and shared experiences.",
    accentVar: "--neon-pink",
  },
  {
    icon: Beaker,
    title: "High Bioavailability",
    description: "18–22% bioavailability compared to just 2–6% with traditional edibles. More of what you consume actually works.",
    accentVar: "--neon-gold",
  },
];

const ConsumerBenefits = () => {
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
          <p className="label-text mb-4">Consumer Benefits</p>
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            This Is So Much More Than
            <br />
            <span className="text-neon-pink">A Faster Edible</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease }}
              className="group relative border border-border/20 bg-card/40 backdrop-blur-sm p-7 hover:border-border/40 transition-all duration-500"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, hsl(var(${b.accentVar}) / 0.06) 0%, transparent 70%)` }}
              />

              <div
                className="relative w-11 h-11 flex items-center justify-center mb-5"
                style={{ background: `hsl(var(${b.accentVar}) / 0.1)` }}
              >
                <b.icon className="w-5 h-5" style={{ color: `hsl(var(${b.accentVar}))` }} />
              </div>

              <h3 className="relative font-display font-bold uppercase text-foreground text-sm mb-2.5" style={{ letterSpacing: "0.08em" }}>
                {b.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsumerBenefits;
