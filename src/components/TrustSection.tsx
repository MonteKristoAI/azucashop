import { Package, Truck, FlaskConical, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Package, label: "500+ Products", desc: "Curated selection" },
  { icon: Truck, label: "Free Shipping", desc: "On orders over $50" },
  { icon: FlaskConical, label: "Lab Tested", desc: "Quality guaranteed" },
  { icon: Headphones, label: "24/7 Support", desc: "Always here to help" },
];

const TrustSection = () => (
  <section className="bg-card border-y border-border">
    <div className="section-container py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-1">{stat.label}</h3>
            <p className="text-xs text-muted-foreground">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
