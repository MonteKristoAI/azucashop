import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const effects = ["sleep", "calm", "focus", "recovery"];
const ease = [0.16, 1, 0.3, 1] as const;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [activeEffect, setActiveEffect] = useState<string>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (activeEffect !== "all" && !p.effects.includes(activeEffect)) return false;
      return true;
    });
  }, [activeCategory, activeEffect]);

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
            Shop
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Browse our full range of premium hemp wellness products.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-border/10 pb-6">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
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
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Effects</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveEffect("all")}
                className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase border transition-all duration-300 ${
                  activeEffect === "all"
                    ? "border-neon-teal text-neon-teal"
                    : "border-border/30 text-muted-foreground hover:border-border/60"
                }`}
              >
                All
              </button>
              {effects.map((effect) => (
                <button
                  key={effect}
                  onClick={() => setActiveEffect(effect)}
                  className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase border transition-all duration-300 ${
                    activeEffect === effect
                      ? "border-neon-teal text-neon-teal"
                      : "border-border/30 text-muted-foreground hover:border-border/60"
                  }`}
                >
                  {effect}
                </button>
              ))}
            </div>
          </div>
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
              <Link
                to={`/product/${product.id}`}
                className="group block border border-border/30 bg-card/40 hover:border-border/50 transition-all duration-500"
              >
                <div className="relative aspect-square bg-secondary/50 flex items-center justify-center">
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-neon-pink text-primary-foreground text-[9px] tracking-[0.15em] uppercase font-medium z-10">
                      {product.badge}
                    </span>
                  )}
                  <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground/15">
                    {product.name.split(" ")[0]}
                  </span>
                </div>
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

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No products match your filters. Try adjusting your selection.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
