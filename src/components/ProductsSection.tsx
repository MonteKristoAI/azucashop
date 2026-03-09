import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  {
    name: "Relaxed",
    dosage: "10mg THC · 5mg CBD",
    terpenes: "Myrcene · Linalool",
    glowClass: "glow-border-teal",
    glowBg: "glow-bg-teal",
    textGlow: "text-glow-teal",
    colorClass: "text-neon-teal",
    dotBg: "bg-neon-teal",
  },
  {
    name: "Uplifted",
    dosage: "10mg THC · 5mg CBD",
    terpenes: "Limonene · Alpha Pinene",
    glowClass: "glow-border-pink",
    glowBg: "glow-bg-pink",
    textGlow: "text-glow-pink",
    colorClass: "text-neon-pink",
    dotBg: "bg-neon-pink",
  },
  {
    name: "Balanced",
    dosage: "25mg THC · 5mg CBD",
    terpenes: "Limonene · Linalool",
    glowClass: "glow-border-gold",
    glowBg: "glow-bg-gold",
    textGlow: "text-glow-gold",
    colorClass: "text-neon-gold",
    dotBg: "bg-neon-gold",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-spacing">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-24 md:mb-32"
        >
          <div className="hr-accent mb-6" />
          <p className="label-text">Choose Your Experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease }}
              whileHover={{ y: -6 }}
              className={`relative border bg-card overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-700 cursor-pointer group aspect-[3/4] ${product.glowClass}`}
            >
              {/* Radial glow background */}
              <div className={`absolute inset-0 ${product.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Glow dot */}
              <div className={`w-1.5 h-1.5 rounded-full ${product.dotBg} opacity-40 group-hover:opacity-100 transition-opacity duration-700 mb-10`} />

              <h3
                className={`relative font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase ${product.colorClass} ${product.textGlow} leading-[0.9]`}
                style={{ letterSpacing: "0.12em" }}
              >
                {product.name}
              </h3>

              <div className="relative mt-10 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-xs tracking-[0.2em] text-foreground/50">{product.dosage}</p>
                <p className="text-[10px] tracking-[0.15em] text-foreground/25">{product.terpenes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
