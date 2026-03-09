import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { number: "5–15", unit: "Minutes", text: "Feel it when the moment calls." },
  { number: "3×", unit: "Absorption", text: "Water-friendly cannabinoids." },
  { number: "100%", unit: "Predictable", text: "Consistent. Every time." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="hr-accent mb-8" />
          <p className="label-text mb-14 md:mb-16">Technology</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 mb-32 md:mb-44 lg:mb-56">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          >
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

        {/* Stats rows */}
        <div>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease }}
              className="border-t border-border/15 py-14 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-4 md:gap-12 items-baseline"
            >
              <span className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-none tracking-wide">
                {stat.number}
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/30">
                {stat.unit}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed md:text-right">
                {stat.text}
              </p>
            </motion.div>
          ))}
          {/* Bottom border for last row */}
          <div className="border-t border-border/15" />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
