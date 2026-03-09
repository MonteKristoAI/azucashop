import { Link } from "react-router-dom";
import { Candy, Wine, Cookie } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const icons = { gummies: Candy, beverages: Wine, chocolates: Cookie };

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
      {categories.map((cat, i) => {
        const Icon = icons[cat.id as keyof typeof icons];
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={`/shop?category=${cat.id}`}
              className="block p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover-lift text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{cat.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default CategoryCards;
