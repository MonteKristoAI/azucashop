import { motion } from "framer-motion";

const points = [
  {
    headline: "5–15 Minutes",
    text: "Fast-acting effects that let you feel it when it matters.",
  },
  {
    headline: "Water-Friendly",
    text: "Cannabinoids designed for better absorption, faster onset.",
  },
  {
    headline: "Social By Design",
    text: "A more uplifting, social experience — predictable every time.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-spacing border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-section text-foreground text-center mb-6"
        >
          Why Entourage
          <br />
          <span className="text-accent">Hits Different</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-20"
        >
          TiME Infusion® Technology
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-20">
          {points.map((point, i) => (
            <motion.div
              key={point.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-wider uppercase text-foreground mb-4">
                {point.headline}
              </h3>
              <p className="body-large max-w-lg mx-auto">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
