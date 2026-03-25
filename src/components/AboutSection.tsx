import { Zap, Sun, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Zap, title: "Fast-Acting", desc: "Feel effects in 5–15 minutes, not an hour and a half. Enhanced with TiME INFUSION® for rapid, reliable onset." },
  { icon: Sun, title: "Uplifting, Not Sedating", desc: "A lighter, euphoric experience — no couch-lock. Our formulation preserves the feel-good Delta-9 effects." },
  { icon: Leaf, title: "Full-Spectrum Formulation", desc: "THC + CBD + terpenes working together for the entourage effect — a balanced, complete experience." },
  { icon: Users, title: "Social Ready", desc: "Perfect for parties, dinners, and good times with friends. Predictable timing you can count on." },
];

const AboutSection = () => (
  <section className="section-container py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
          What Makes AZUCA Different
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We craft premium cannabis gummies designed for a social, enjoyable experience — not the heavy, unpredictable edibles you're used to. Our entourage formulation combines THC, CBD, and terpenes for a balanced effect, enhanced with TiME INFUSION® so you feel it in minutes.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            ["5–15", "Min Onset"],
            ["THC+CBD", "Full Spectrum"],
            ["Delta-9", "Preserved"],
          ].map(([num, label]) => (
            <div key={label}>
              <span className="font-display font-extrabold text-2xl text-primary">{num}</span>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-5 rounded-xl border border-border bg-card"
          >
            <v.icon className="w-5 h-5 text-primary mb-3" />
            <h4 className="font-display font-bold text-sm text-foreground mb-1">{v.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
