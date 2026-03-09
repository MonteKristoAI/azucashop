import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const CTASection = () => {
  return (
    <section className="py-44 md:py-60 lg:py-80">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="heading-display text-foreground mb-20"
        >
          Join The
          <br />
          Entourage
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#"
            className="px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-700"
          >
            Find a Retailer
          </a>
          <a
            href="#technology"
            className="px-10 py-4 border border-foreground/15 text-foreground/40 text-[10px] tracking-[0.3em] uppercase hover:border-foreground/60 hover:text-foreground transition-all duration-700"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
