import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const accentColors = [
  { bg: "hsl(var(--neon-teal) / 0.08)", border: "hsl(var(--neon-teal) / 0.2)", text: "text-neon-teal" },
  { bg: "hsl(var(--neon-pink) / 0.08)", border: "hsl(var(--neon-pink) / 0.2)", text: "text-neon-pink" },
  { bg: "hsl(var(--neon-gold) / 0.08)", border: "hsl(var(--neon-gold) / 0.2)", text: "text-neon-gold" },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 md:mb-14"
        >
          <div className="hr-accent mb-5" />
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const color = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="group block relative border border-border/30 bg-card/50 p-8 md:p-10 hover:border-border/60 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 100%, ${color.bg} 0%, transparent 70%)` }}
                  />

                  {/* Placeholder image area */}
                  <div
                    className="relative w-full aspect-[4/3] mb-6 flex items-center justify-center overflow-hidden"
                    style={{ background: color.bg }}
                  >
                    <span className={`font-display text-lg font-bold uppercase tracking-[0.2em] ${color.text} opacity-40`}>
                      {cat.name}
                    </span>
                  </div>

                  <h3 className="font-display font-bold uppercase text-foreground text-base tracking-[0.1em] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <span className={`inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase ${color.text} group-hover:gap-3 transition-all duration-300`}>
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
