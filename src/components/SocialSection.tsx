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

  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="experience" className="py-14 md:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="flex flex-col justify-center"
          >
            <div className="hr-accent mb-6" />
            <p className="label-text mb-8">Experience</p>
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", letterSpacing: "0.08em" }}
            >
              Made For
              <br />
              <span className="text-neon-pink">The Moment</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground/55 leading-[1.75] max-w-md">
              Designed for shared moments — nights&nbsp;out, celebrations, and&nbsp;experiences where timing matters.
            </p>
          </motion.div>

          {/* Image column — larger proportion */}
          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden lg:-mr-8"
          >
            <motion.img
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease }}
              src={socialImg}
              alt="Friends celebrating together at night"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/15 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
