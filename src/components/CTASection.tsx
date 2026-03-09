import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-40 md:py-56 lg:py-72">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
          className="heading-display text-foreground mb-16"
        >
          Join The
          <br />
          Entourage
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="px-10 py-4 bg-foreground text-background text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            Find a Retailer
          </a>
          <a
            href="#technology"
            className="px-10 py-4 border border-foreground/20 text-foreground/60 text-xs tracking-[0.25em] uppercase hover:border-foreground hover:text-foreground transition-all duration-500"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
