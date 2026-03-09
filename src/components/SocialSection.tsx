import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import socialImg from "@/assets/social-moment.jpg";

const SocialSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section id="experience" className="section-spacing overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          >
            <p className="label-text mb-8">Experience</p>
            <h2 className="heading-section text-foreground mb-10">
              Made For
              <br />
              <span className="text-neon-pink">The Moment</span>
            </h2>
            <p className="body-large max-w-sm">
              Designed for shared moments — nights out, celebrations, and experiences where timing matters.
            </p>
          </motion.div>

          <motion.div
            style={{ y, scale }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={socialImg}
              alt="Friends celebrating together at night"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
