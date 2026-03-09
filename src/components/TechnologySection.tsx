import { motion } from "framer-motion";

const points = [
  { number: "5–15", unit: "Min", text: "Onset time. Feel it when the moment calls." },
  { number: "3×", unit: "Absorption", text: "Water-friendly cannabinoids. Better bioavailability." },
  { number: "100%", unit: "Predictable", text: "Consistent effects. Every single time." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-44">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          >
            <p className="label-text mb-8">Technology</p>
            <h2 className="heading-section text-foreground">
              Hits
              <br />
              <span className="text-accent">Different</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="flex items-end"
          >
            <p className="body-large max-w-md">
              TiME Infusion® delivers cannabinoids faster than traditional edibles.
              No waiting. No guessing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
          {points.map((point, i) => (
            <motion.div
              key={point.unit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0, 1] }}
              className="bg-background p-10 md:p-14"
            >
              <span className="font-display text-5xl md:text-7xl font-extrabold text-foreground leading-none">
                {point.number}
              </span>
              <span className="label-text block mt-3 mb-6">{point.unit}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
