import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroGummies from "@/assets/hero-gummies.jpg";


const HeroSection = () => (
  <section className="relative min-h-[75vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
    <div className="section-container relative z-10 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
        {/* Left — text */}
        <div className="w-full lg:w-[47%] shrink-0">
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-6">
            Social · Sessionable · Fast-Acting
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display font-extrabold text-foreground leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}>
            A Better Kind of<br /><span className="text-primary">Gummy Experience</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-xl text-foreground/90 font-medium leading-snug mb-3 max-w-lg">
            Designed to feel social, clear, and consistent — not heavy or unpredictable.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base text-muted-foreground leading-relaxed mb-3 max-w-lg">
            Our entourage formulation (THC + CBD + terpenes) enhanced with TiME INFUSION® delivers a balanced, uplifting experience every time.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-base font-medium mb-8 max-w-lg">
            Feel the effects in <span className="text-primary">5–15 minutes</span>, not 90.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-lg font-medium" asChild><Link to="/shop">Shop Gummies <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            <Button size="lg" variant="outline" className="rounded-lg font-medium" asChild><Link to="/about">Explore the Experience</Link></Button>
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-[53%] relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] scale-75" />
          <img
            src={heroGummies}
            alt="AZUCA premium cannabis gummies close-up"
            className="relative z-10 w-full max-w-[520px] rounded-2xl"
            width={1024}
            height={1024}
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
