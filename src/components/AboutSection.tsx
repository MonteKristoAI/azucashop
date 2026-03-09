import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-section text-foreground mb-10"
        >
          The Social
          <br />
          <span className="text-neon-gold">Gummy</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <p className="body-large">
            Entourage was created for people who want a better edible experience —
            fast, predictable, and designed for social moments.
          </p>
          <p className="body-large">
            Powered by <span className="text-accent">TiME Infusion®</span>, these gummies deliver
            effects in minutes, not hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
