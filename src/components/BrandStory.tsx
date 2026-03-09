import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { value: "35+", label: "Products" },
  { value: "100%", label: "Lab Tested" },
  { value: "50", label: "States Shipped" },
  { value: "2018", label: "Farm Bill Compliant" },
];

const BrandStory = () => {
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
            <p className="label-text mb-6">Our Story</p>
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Transparency
              <br />
              <span className="text-neon-gold">Is Our Standard</span>
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mb-4 max-w-lg">
              We believe you deserve to know exactly what's in every product. From seed to shelf, every batch is third-party lab tested and comes with a full Certificate of Analysis.
            </p>
            <p className="text-base text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              Built on the 2018 Farm Bill, our hemp-derived products meet the highest standards of compliance, quality, and consistency.
            </p>
            <Link
              to="/about"
              className="inline-block px-7 py-3 border border-foreground/15 text-foreground/50 text-xs tracking-[0.2em] uppercase font-medium hover:border-foreground/40 hover:text-foreground/80 transition-all duration-500"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Metrics grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="grid grid-cols-2 gap-5"
          >
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className="border border-border/20 bg-card/40 p-7 md:p-8 text-center"
              >
                <span
                  className={`font-display text-3xl md:text-4xl font-extrabold leading-none ${
                    i % 2 === 0 ? "text-neon-teal" : "text-neon-pink"
                  }`}
                >
                  {metric.value}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-3">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
