import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import socialImg from "@/assets/social-moment.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const SocialSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          >
            <div className="hr-accent mb-6" />
            <p className="label-text mb-10">Experience</p>
            <h2 className="heading-section text-foreground mb-8" style={{ letterSpacing: "0.06em" }}>
              Made For
              <br />
              <span className="text-neon-pink">The Moment</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/50 leading-[1.8] max-w-sm">
              Designed for shared moments — nights&nbsp;out, celebrations, and&nbsp;experiences where timing matters.
            </p>
          </motion.div>

          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease }}
              src={socialImg}
              alt="Friends celebrating together at night"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
