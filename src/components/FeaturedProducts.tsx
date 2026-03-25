import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="section-container py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-2">Featured Products</h2>
          <p className="text-muted-foreground"><p className="text-muted-foreground">Our most-loved gummies and treats.</p></p>
        </div>
        <Button variant="ghost" className="text-primary hover:text-primary" asChild><Link to="/shop">View All <ArrowRight className="ml-1 w-4 h-4" /></Link></Button>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product, i) => (<ProductCard key={product.id} product={product} index={i} />))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
