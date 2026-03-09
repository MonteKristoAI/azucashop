import { motion } from "framer-motion";
import socialImg from "@/assets/social-moment.jpg";

const SocialSection = () => {
  return (
    <section id="experience" className="section-spacing border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-section text-foreground text-center mb-8"
        >
          Made For
          <br />
          <span className="text-neon-pink">The Moment</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="body-large text-center max-w-2xl mx-auto mb-16"
        >
          Entourage gummies are designed for shared moments —
          nights out, celebrations, and experiences where timing matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto overflow-hidden"
        >
          <img
            src={socialImg}
            alt="Friends celebrating together at night"
            className="w-full h-[400px] md:h-[550px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
