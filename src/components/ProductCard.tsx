import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  gummies: "from-pink-900/30 to-rose-900/10",
  beverages: "from-cyan-900/30 to-teal-900/10",
  chocolates: "from-amber-900/30 to-orange-900/10",
};

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="rounded-xl border border-border bg-card overflow-hidden hover-lift">
        <Link to={`/product/${product.id}`}>
          <div className={`relative aspect-[4/3] bg-gradient-to-br ${categoryColors[product.category] || categoryColors.gummies} flex items-center justify-center overflow-hidden`}>
            {product.image && (
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            )}
            {!product.image && (
              <span className="font-display text-2xl font-extrabold uppercase tracking-wider text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 text-center px-4">
                {product.name}
              </span>
            )}
          </div>
        </Link>

        <div className="p-5">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {product.shortDescription}
            </p>
          </Link>


          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-lg text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
