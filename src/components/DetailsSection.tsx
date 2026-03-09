import { motion } from "framer-motion";

const statements = [
  "Fast-Acting",
  "Predictable Effects",
  "Great Taste",
  "Social Experience",
];

const DetailsSection = () => {
  return (
    <section className="section-spacing border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {statements.map((statement, i) => (
            <motion.div
              key={statement}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-6"
            >
              <span className="text-muted-foreground/30 font-display text-lg tracking-widest">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-foreground">
                {statement}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
