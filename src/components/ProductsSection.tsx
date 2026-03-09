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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12, ease }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative border bg-card overflow-hidden flex flex-col items-center justify-between text-center transition-all duration-700 cursor-pointer group p-10 md:p-12 lg:p-14 aspect-[3/4] ${product.glowClass}`}
            >
              {/* Radial glow background on hover */}
              <div className={`absolute inset-0 ${product.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Top: label */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={`w-1 h-1 rounded-full ${product.dotBg} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <span className="text-[10px] tracking-[0.4em] uppercase text-foreground/25 group-hover:text-foreground/40 transition-colors duration-500">
                  {product.label}
                </span>
              </div>

              {/* Center: product name */}
              <h3
                className={`relative z-10 font-display font-extrabold uppercase ${product.colorClass} ${product.textGlow} leading-none`}
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                  letterSpacing: "0.15em",
                }}
              >
                {product.name}
              </h3>

              {/* Bottom: details */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <p className="text-[11px] tracking-[0.2em] text-foreground/40 group-hover:text-foreground/60 transition-colors duration-500">
                  {product.dosage}
                </p>
                <p className="text-[10px] tracking-[0.15em] text-foreground/20 group-hover:text-foreground/35 transition-colors duration-500">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
