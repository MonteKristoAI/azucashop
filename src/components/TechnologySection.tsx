import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  { number: "5–15", unit: "Minutes", text: "Feel it when the moment calls." },
  { number: "3×", unit: "Absorption", text: "Water-friendly cannabinoids." },
  { number: "100%", unit: "Predictable", text: "Consistent. Every time." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-36 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          >
            <div className="hr-accent mb-6" />
            <p className="label-text mb-12">Technology</p>
            <h2 className="heading-section text-foreground">
              Hits
              <br />
              <span className="text-accent">Different</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15, ease }}
            className="flex items-end"
          >
            <p className="body-large max-w-sm">
              TiME Infusion® delivers cannabinoids faster than traditional edibles. No waiting.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border/40">
          {points.map((point, i) => (
            <motion.div
              key={point.unit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              className="border-b border-border/20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 items-baseline"
            >
              <span className="font-display text-5xl md:text-6xl font-extrabold text-foreground leading-none">
                {point.number}
              </span>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                <span className="label-text">{point.unit}</span>
                <p className="text-sm text-muted-foreground max-w-xs">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
