import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="hr-accent mb-5" />
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Featured Products
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs tracking-[0.15em] uppercase text-neon-pink hover:text-foreground transition-colors duration-300"
          >
            View All →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <Link
                to={`/product/${product.id}`}
                className="group block border border-border/30 bg-card/40 hover:border-border/50 transition-all duration-500"
              >
                {/* Product image placeholder */}
                <div className="relative aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-neon-pink text-primary-foreground text-[9px] tracking-[0.15em] uppercase font-medium z-10">
                      {product.badge}
                    </span>
                  )}
                  <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground/15 group-hover:text-foreground/25 transition-colors duration-500">
                    {product.name.split(" ")[0]}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground text-sm tracking-[0.05em] mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-foreground text-base">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-neon-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Product
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/shop"
          className="md:hidden block text-center mt-8 text-xs tracking-[0.15em] uppercase text-neon-pink"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
