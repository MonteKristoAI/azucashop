import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { value: "5–15", label: "Minute Onset", suffix: "min" },
  { value: "18–22%", label: "Bioavailability" },
  { value: "Δ9-THC", label: "Preserved" },
  { value: "0", label: "Bitter Taste" },
];

const IndustryPartners = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="hr-accent mb-5" />
            <p className="label-text mb-6">For Brands & Partners</p>
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Your Hero
              <br />
              <span className="text-neon-gold">Ingredient</span>
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mb-4 max-w-lg">
              TiME INFUSION® is used by innovative cannabis brands creating next-generation edibles, beverages, and culinary products. Our ingredient platform gives your products a measurable competitive advantage.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              We provide co-branding assets, marketing support, budtender training, and quarterly strategy sessions to help you sell the science behind your products.
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.3)] transition-all duration-300"
            >
              Become a Partner
            </Link>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="grid grid-cols-2 gap-5"
          >
            {metrics.map((m, i) => (
              <div key={m.label} className="border border-border/20 bg-card/40 p-7 md:p-8 text-center">
                <span
                  className={`font-display text-2xl md:text-3xl font-extrabold leading-none ${
                    i % 2 === 0 ? "text-neon-teal" : "text-neon-pink"
                  }`}
                >
                  {m.value}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-3">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartners;
