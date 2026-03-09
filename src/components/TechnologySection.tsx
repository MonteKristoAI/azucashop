import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { number: "5–15", unit: "Minutes", text: "Feel it when the moment calls." },
  { number: "3×", unit: "Absorption", text: "Water-friendly cannabinoids." },
  { number: "100%", unit: "Predictable", text: "Consistent. Every time." },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-16 md:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="hr-accent mb-8" />
          <p className="label-text mb-10">Technology</p>

          <h2
            className="font-display font-bold uppercase text-foreground leading-[0.88]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "0.1em" }}
          >
            Hits<br />
            <span className="text-accent">Different</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/45 leading-[1.8] max-w-lg mt-8">
            TiME Infusion® delivers cannabinoids faster than traditional edibles. No&nbsp;waiting.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-4xl mt-16 md:mt-24 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <span className="font-display text-4xl md:text-5xl font-extrabold text-accent leading-none text-glow-teal">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/50 mt-2">
                {stat.unit}
              </span>
              <p className="text-sm md:text-base text-foreground/35 leading-relaxed mt-1">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
