import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ease = [0.16, 1, 0.3, 1] as const;

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.featured).slice(0, 3);
  const { addToCart } = useCart();

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
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              letterSpacing: "0.06em",
            }}
          >
            Featured Products
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl">
            Powered by TiME INFUSION® — fast-acting, predictable, and designed
            for modern cannabis consumers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <div className="group block border border-border/30 bg-card/40 hover:border-border/50 transition-all duration-500">
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-neon-pink text-primary-foreground text-[9px] tracking-[0.15em] uppercase font-medium z-10">
                        {product.badge}
                      </span>
                    )}
                    <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground/15 group-hover:text-foreground/25 transition-colors duration-500">
                      {product.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                </Link>

                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display font-bold text-foreground text-sm tracking-[0.05em] mb-1.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {product.shortDescription}
                    </p>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-foreground text-base">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-[10px] tracking-[0.15em] uppercase text-neon-teal hover:text-foreground transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-border/40 text-xs tracking-[0.2em] uppercase text-foreground hover:border-neon-pink hover:text-neon-pink transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
