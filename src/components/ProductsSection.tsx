import { motion } from "framer-motion";

const products = [
  {
    name: "Relaxed",
    thc: "10mg THC",
    cbd: "5mg CBD",
    terpenes: "Myrcene, Linalool",
    glowClass: "glow-border-teal",
    textGlow: "text-glow-teal",
    color: "neon-teal",
  },
  {
    name: "Uplifted",
    thc: "10mg THC",
    cbd: "5mg CBD",
    terpenes: "Limonene, Alpha Pinene",
    glowClass: "glow-border-pink",
    textGlow: "text-glow-pink",
    color: "neon-pink",
  },
  {
    name: "Balanced",
    thc: "25mg THC",
    cbd: "5mg CBD",
    terpenes: "Limonene, Linalool",
    glowClass: "glow-border-gold",
    textGlow: "text-glow-gold",
    color: "neon-gold",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16"
        >
          Choose Your Experience
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className={`relative border bg-card p-10 md:p-12 flex flex-col items-center text-center transition-all duration-500 cursor-pointer ${product.glowClass}`}
            >
              {/* Glow dot */}
              <div className={`w-2 h-2 rounded-full bg-${product.color} animate-glow-pulse mb-8`} />

              <h3
                className={`font-display text-4xl md:text-5xl font-extrabold tracking-[0.2em] uppercase mb-6 text-${product.color} ${product.textGlow}`}
              >
                {product.name}
              </h3>

              <div className="space-y-2 text-sm tracking-[0.15em] text-muted-foreground">
                <p>{product.thc} | {product.cbd}</p>
                <p className="text-xs tracking-[0.1em]">Terpenes: {product.terpenes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
