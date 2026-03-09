import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  {
    label: "01",
    name: "Relaxed",
    dosage: "10mg THC | 5mg CBD",
    description: "Calming terpene blend",
    glowClass: "glow-border-teal",
    glowBg: "glow-bg-teal",
    textGlow: "text-glow-teal",
    colorClass: "text-neon-teal",
    dotBg: "bg-neon-teal",
  },
  {
    label: "02",
    name: "Uplifted",
    dosage: "10mg THC | 5mg CBD",
    description: "Energetic terpene blend",
    glowClass: "glow-border-pink",
    glowBg: "glow-bg-pink",
    textGlow: "text-glow-pink",
    colorClass: "text-neon-pink",
    dotBg: "bg-neon-pink",
  },
  {
    label: "03",
    name: "Balanced",
    dosage: "25mg THC | 5mg CBD",
    description: "Balanced terpene experience",
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
          className="mb-20 md:mb-28"
        >
          <div className="hr-accent mb-6" />
          <p className="label-text">Choose Your Experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.1, ease }}
              whileHover={{ y: -3, scale: 1.015 }}
              className={`relative border bg-card overflow-hidden cursor-pointer group transition-all duration-700 ${product.glowClass}`}
            >
              {/* Radial glow on hover */}
              <div className={`absolute inset-0 ${product.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Card inner — using padding for safe area, grid for vertical distribution */}
              <div className="relative z-10 flex flex-col items-center text-center h-full px-8 md:px-10 py-14 md:py-20" style={{ minHeight: "480px" }}>
                
                {/* Top: subtle label */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-1 h-1 rounded-full ${product.dotBg} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                  <span className="text-[9px] tracking-[0.5em] uppercase text-foreground/20 group-hover:text-foreground/35 transition-colors duration-500">
                    {product.label}
                  </span>
                </div>

                {/* Center: product name — flex-1 to vertically center */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <h3
                    className={`font-display font-extrabold uppercase ${product.colorClass} ${product.textGlow} leading-none w-full`}
                    style={{
                      fontSize: "clamp(1.75rem, 2.8vw, 2.8rem)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Bottom: product details */}
                <div className="flex flex-col items-center gap-3">
                  <p className="text-[11px] tracking-[0.18em] text-foreground/35 group-hover:text-foreground/55 transition-colors duration-500">
                    {product.dosage}
                  </p>
                  <p className="text-[10px] tracking-[0.12em] text-foreground/18 group-hover:text-foreground/30 transition-colors duration-500">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
