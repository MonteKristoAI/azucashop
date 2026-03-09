import { motion } from "framer-motion";
import { Atom, Droplets, Timer } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    icon: Atom,
    title: "Molecular Encapsulation",
    description:
      "Thermodynamic individual Molecular Encapsulation® (TiME) creates a hydrophilic coating around each cannabinoid molecule, making them water-friendly.",
  },
  {
    icon: Droplets,
    title: "Hydrophilic Cannabinoids",
    description:
      "Our process creates hydrophilic (water-friendly) cannabinoid molecules that absorb through soft tissues of the body via buccal absorption.",
  },
  {
    icon: Timer,
    title: "Faster Onset",
    description:
      "Cannabinoids preempt first-pass metabolism in the liver, allowing effects to be felt in 5–15 minutes instead of up to 90 minutes.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-spacing relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4 block">
            The Technology
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            Thermodynamic individual
            <br />
            <span className="text-primary">Molecular Encapsulation®</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            TiME INFUSION® is not nano. Traditional edibles use big globs of oil. "Nano" uses small globs of oil.
            TiME INFUSION® encapsulates each individual molecule with a water-friendly coating.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl gradient-pink flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display font-bold text-xl text-center mb-10 text-foreground">
            Traditional Edibles <span className="text-primary">vs.</span> TiME INFUSION®
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-muted/50 text-muted-foreground rounded-full">
                  Traditional Edibles
                </span>
              </div>
              {[
                { label: "Onset", value: "30 min – 2+ hours" },
                { label: "Metabolism", value: "First-pass liver metabolism" },
                { label: "Active compound", value: "11-Hydroxy-THC (heavy, sedative)" },
                { label: "Bioavailability", value: "2–6%" },
                { label: "Taste", value: 'Acrid "green" flavor' },
                { label: "Stability", value: "Inconsistent / Limited" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-border/30">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground/70">{item.value}</span>
                </div>
              ))}
            </div>
            {/* TiME INFUSION */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase gradient-pink text-primary-foreground rounded-full">
                  TiME INFUSION®
                </span>
              </div>
              {[
                { label: "Onset", value: "5–15 minutes" },
                { label: "Absorption", value: "Soft tissue absorption" },
                { label: "Active compound", value: "Delta-9-THC (euphoric, uplifting)" },
                { label: "Bioavailability", value: "18–22%" },
                { label: "Taste", value: "Neutral taste profile" },
                { label: "Stability", value: "Shelf, temperature, pH stable" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-primary/20">
                  <span className="text-sm text-primary/80">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
