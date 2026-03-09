import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Molecular Encapsulation",
    description:
      "Individual cannabinoid molecules are coated with a hydrophilic (water-friendly) shell through our proprietary Thermodynamic individual Molecular Encapsulation® process. This is not nano-emulsion — it's a fundamentally different approach.",
  },
  {
    number: "02",
    title: "Soft Tissue Absorption",
    description:
      "Hydrophilic cannabinoids absorb rapidly through the soft tissues of the mouth and body, bypassing the digestive system and liver first-pass metabolism that makes traditional edibles slow and unpredictable.",
  },
  {
    number: "03",
    title: "Delta-9-THC Preserved",
    description:
      "By preempting liver metabolism, TiME INFUSION® preserves Delta-9-THC instead of converting it to 11-Hydroxy-THC. The result is a lighter, more euphoric experience akin to smoking — not the heavy sedation of traditional edibles.",
  },
];

const ScienceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="hr-accent mb-5" />
            <p className="label-text mb-6">The Science</p>
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Thermodynamic Individual
              <br />
              <span className="text-neon-gold">Molecular Encapsulation</span>®
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] max-w-lg">
              Traditional edibles use fat-soluble cannabinoid oils that must pass through the digestive system and liver. TiME INFUSION® transforms cannabinoids into water-friendly molecules that absorb through soft tissues — delivering faster, more predictable, and more enjoyable effects.
            </p>

            {/* Comparison callout */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-border/20 bg-card/40 p-5 text-center">
                <span className="font-display text-2xl font-extrabold text-destructive">2–6%</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">Traditional Bioavailability</p>
              </div>
              <div className="border border-border/20 bg-card/40 p-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(var(--neon-teal) / 0.06) 0%, transparent 70%)" }} />
                <span className="relative font-display text-2xl font-extrabold text-neon-teal">18–22%</span>
                <p className="relative text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">TiME INFUSION® Bioavailability</p>
              </div>
            </div>
          </motion.div>

          {/* Right — steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="flex flex-col gap-6"
          >
            {steps.map((step, i) => (
              <div key={step.number} className="border border-border/20 bg-card/40 p-7 relative overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 0% 50%, hsl(var(--neon-gold) / 0.04) 0%, transparent 60%)" }}
                />
                <div className="relative flex gap-5">
                  <span className="font-display text-3xl font-extrabold text-foreground/8 leading-none shrink-0">{step.number}</span>
                  <div>
                    <h3 className="font-display font-bold uppercase text-foreground text-sm tracking-[0.08em] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
