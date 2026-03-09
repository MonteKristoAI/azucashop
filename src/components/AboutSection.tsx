import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="max-w-3xl"
        >
          <div className="hr-accent mb-6" />
          <p className="label-text mb-12">About</p>
          <h2 className="heading-section text-foreground mb-14">
            The Social
            <br />
            <span className="text-neon-gold">Gummy</span>
          </h2>
          <p className="body-large max-w-md">
            Fast, predictable, and designed for social moments. Effects in minutes, not hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
