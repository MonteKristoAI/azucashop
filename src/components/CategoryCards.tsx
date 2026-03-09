import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  gummies: "/images/tropical-gummies.jpg",
  beverages: "/images/lemon-seltzer.jpg",
  chocolates: "/images/dark-chocolate.jpg",
};

const CategoryCards = () => (
  <section className="section-container py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-3">
        Shop by Category
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Premium cannabis products powered by TiME INFUSION® technology.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            to={`/shop?category=${cat.id}`}
            className="block rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover-lift text-center group overflow-hidden"
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={categoryImages[cat.id]}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{cat.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategoryCards;
