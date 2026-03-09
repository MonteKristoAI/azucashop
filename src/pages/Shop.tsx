import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { products, categories } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ease = [0.16, 1, 0.3, 1] as const;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      return true;
    });
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <div className="pt-28 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <h1
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.06em" }}
          >
            Products
          </h1>
          <p className="text-sm text-muted-foreground mb-10 max-w-lg">
            Fast-acting cannabis products powered by TiME INFUSION® technology.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border/10 pb-6">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase border transition-all duration-300 ${
              activeCategory === "all"
                ? "border-neon-pink text-neon-pink"
                : "border-border/30 text-muted-foreground hover:border-border/60"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-neon-pink text-neon-pink"
                  : "border-border/30 text-muted-foreground hover:border-border/60"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <div className="group block border border-border/30 bg-card/40 hover:border-border/50 transition-all duration-500">
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-square bg-secondary/50 flex items-center justify-center">
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

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No products match your filters.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
