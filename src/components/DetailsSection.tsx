import { motion } from "framer-motion";

const statements = ["Fast-Acting", "Predictable", "Social", "Elevated"];

const DetailsSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {statements.map((statement, i) => (
          <motion.div
            key={statement}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.25, 0.1, 0, 1] }}
            className="border-b border-border/20 py-6 md:py-8 group cursor-default"
          >
            <h3 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-extrabold uppercase text-foreground/10 group-hover:text-foreground transition-colors duration-700 leading-none"
              style={{ letterSpacing: "0.08em" }}
            >
              {statement}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
