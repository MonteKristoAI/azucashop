import { motion } from "framer-motion";

const products = [
  {
    name: "Relaxed",
    dosage: "10mg THC · 5mg CBD",
    terpenes: "Myrcene · Linalool",
    glowClass: "glow-border-teal",
    textGlow: "text-glow-teal",
    colorClass: "text-neon-teal",
  },
  {
    name: "Uplifted",
    dosage: "10mg THC · 5mg CBD",
    terpenes: "Limonene · Alpha Pinene",
    glowClass: "glow-border-pink",
    textGlow: "text-glow-pink",
    colorClass: "text-neon-pink",
  },
  {
    name: "Balanced",
    dosage: "25mg THC · 5mg CBD",
    terpenes: "Limonene · Linalool",
    glowClass: "glow-border-gold",
    textGlow: "text-glow-gold",
    colorClass: "text-neon-gold",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="label-text mb-20 md:mb-28"
        >
          Choose Your Experience
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
              whileHover={{ y: -8 }}
              className={`relative border bg-card p-12 md:p-16 flex flex-col items-start transition-all duration-700 cursor-pointer group ${product.glowClass}`}
            >
              <h3
                className={`font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase mb-10 ${product.colorClass} ${product.textGlow} leading-[0.9]`}
                style={{ letterSpacing: "0.1em" }}
              >
                {product.name}
              </h3>

              <div className="mt-auto space-y-3">
                <p className="text-sm tracking-[0.15em] text-foreground/60">{product.dosage}</p>
                <p className="text-xs tracking-[0.12em] text-foreground/30">{product.terpenes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
