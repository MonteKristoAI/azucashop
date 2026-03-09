import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.16, 1, 0.3, 1] as const;

const formats = [
  {
    title: "Fast-Acting Edibles",
    description: "Gummies, chocolates, and confections powered by TiME INFUSION® for 5–15 minute onset with uplifting Delta-9-THC effects.",
    accentVar: "--neon-teal",
  },
  {
    title: "Cannabis Beverages",
    description: "Water-soluble cannabinoids for sessionable social drinks with predictable onset and offset — the new happy hour.",
    accentVar: "--neon-pink",
  },
  {
    title: "Culinary Ingredients",
    description: "Premium hydrophilic cannabinoid ingredients for chefs and brands — shelf-stable, great-tasting, and precisely dosed.",
    accentVar: "--neon-gold",
  },
];

const ProductPlatform = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 md:mb-14"
        >
          <div className="hr-accent mb-5" />
          <p className="label-text mb-4">Product Platform</p>
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            Technology-Enabled <span className="text-neon-gold">Product Formats</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-lg">
            TiME INFUSION® powers a new generation of cannabis products across multiple consumption formats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className="group border border-border/30 bg-card/50 p-8 md:p-10 hover:border-border/60 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, hsl(var(${f.accentVar}) / 0.06) 0%, transparent 70%)` }}
              />

              <div
                className="relative w-full aspect-[4/3] mb-6 flex items-center justify-center"
                style={{ background: `hsl(var(${f.accentVar}) / 0.06)` }}
              >
                <span
                  className="font-display text-base font-bold uppercase tracking-[0.2em] opacity-30"
                  style={{ color: `hsl(var(${f.accentVar}))` }}
                >
                  {f.title.split(" ")[0]}
                </span>
              </div>

              <h3 className="relative font-display font-bold uppercase text-foreground text-base tracking-[0.1em] mb-2">
                {f.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">
                {f.description}
              </p>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300"
                style={{ color: `hsl(var(${f.accentVar}))` }}
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPlatform;
