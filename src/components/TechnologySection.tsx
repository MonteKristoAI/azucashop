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
        {/* Header block — fully stacked vertical */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="hr-accent mb-8" />
          <p className="label-text mb-12">Technology</p>

          <h2
            className="font-display font-bold uppercase text-foreground leading-[0.88]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "0.1em" }}
          >
            Hits<br />
            <span className="text-accent">Different</span>
          </h2>

          <p className="body-large max-w-md mt-10 md:mt-14">
            TiME Infusion® delivers cannabinoids faster than traditional edibles. No&nbsp;waiting.
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="h-28 md:h-40 lg:h-52" />

        {/* Stats rows */}
        <div>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease }}
              className="border-t border-border/15 py-12 md:py-16 lg:py-20 grid grid-cols-[1fr] md:grid-cols-[180px_160px_1fr] gap-3 md:gap-10 items-baseline"
            >
              <span className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-none tracking-wide uppercase">
                {stat.number}
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/25">
                {stat.unit}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed md:text-right">
                {stat.text}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border/15" />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
