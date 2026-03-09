import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const PartnerCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[700px] mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "0.06em" }}
          >
            Ready to <span className="text-neon-pink">Innovate?</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
            Whether you're building the next great cannabis edible, beverage, or culinary product — TiME INFUSION® gives your brand the competitive edge. Let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)] transition-all duration-500"
            >
              Partner With Azuca
            </Link>
            <a
              href="mailto:partnerships@azucatime.com"
              className="px-8 py-3.5 border border-foreground/15 text-foreground/50 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-500 hover:border-foreground/40 hover:text-foreground/80"
            >
              partnerships@azucatime.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerCTA;
