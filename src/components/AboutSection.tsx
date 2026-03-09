import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl"
        >
          <p className="label-text mb-8">About</p>
          <h2 className="heading-section text-foreground mb-12">
            The Social
            <br />
            <span className="text-neon-gold">Gummy</span>
          </h2>
          <p className="body-large max-w-lg">
            Fast, predictable, and designed for social moments.
            Effects in minutes, not hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
