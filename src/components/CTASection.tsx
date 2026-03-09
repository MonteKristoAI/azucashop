import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-spacing border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-display text-foreground mb-12"
        >
          Join The
          <br />
          Entourage
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="px-8 py-3 bg-foreground text-background text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Find a Retailer
          </a>
          <a
            href="#technology"
            className="px-8 py-3 border border-muted-foreground/30 text-muted-foreground text-sm tracking-[0.2em] uppercase hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
