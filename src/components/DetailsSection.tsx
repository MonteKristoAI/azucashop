import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const statements = ["Fast-Acting", "Predictable", "Social", "Elevated"];

const DetailsSection = () => {
  return (
    <section className="py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {statements.map((statement, i) => (
          <motion.div
            key={statement}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, delay: i * 0.06, ease }}
            className="border-b border-border/10 py-8 md:py-10 group cursor-default"
          >
            <h3
              className="font-display font-extrabold uppercase text-foreground/[0.06] group-hover:text-foreground/90 transition-all duration-1000 leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "0.06em" }}
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
