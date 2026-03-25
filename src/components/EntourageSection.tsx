import { Leaf, Wind, Zap } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Leaf,
    title: "Full-Spectrum Formulation",
    desc: "THC + CBD + terpenes working together for a balanced, full-body experience — the way cannabis was meant to be enjoyed.",
  },
  {
    icon: Wind,
    title: "Mimics Smoking, Without Smoke",
    desc: "The entourage effect delivers a clear, uplifting feeling — similar to smoking but without inhaling. Light, euphoric, never heavy.",
  },
  {
    icon: Zap,
    title: "Enhanced with TiME INFUSION®",
    desc: "Faster onset (5–15 min) and consistent effects, every time. No more guessing when it'll kick in.",
  },
];

const EntourageSection = () => (
  <section className="section-container py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-3">
        Why These Gummies Feel Different
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        It's not just what's inside — it's how everything works together to create a better experience.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="p-8 rounded-xl border border-border bg-card text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <card.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-foreground mb-2">{card.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EntourageSection;
