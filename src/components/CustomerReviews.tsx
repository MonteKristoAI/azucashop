import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "@/data/products";

const CustomerReviews = () => (
  <section className="bg-card border-y border-border">
    <div className="section-container py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-3">What People Are Saying</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Join thousands of happy EMBER customers worldwide.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div key={review.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-6 rounded-xl bg-background border border-border">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className={`w-4 h-4 ${j < review.rating ? "fill-primary text-primary" : "text-muted-foreground/20"}`} />))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
            <p className="text-sm font-medium text-foreground">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.product}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerReviews;
