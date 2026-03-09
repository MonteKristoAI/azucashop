import { Zap, Droplets, FlaskConical, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Zap, label: "5–15 Min Onset", desc: "Fast-acting effects", value: "5–15", unit: "min" },
  { icon: Droplets, label: "Water-Soluble", desc: "Hydrophilic cannabinoids", value: "100", unit: "%" },
  { icon: FlaskConical, label: "Bioavailability", desc: "vs 2–6% traditional", value: "18–22", unit: "%" },
  { icon: ShieldCheck, label: "Shelf Stable", desc: "No seepage or crystallization", value: "24", unit: "mo" },
];

const TrustSection = () => (
  <section className="relative overflow-hidden">
    {/* Subtle top/bottom glow lines */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="section-container py-20 md:py-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-14"
      >
        The TiME INFUSION® Advantage
      </motion.p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative text-center group"
          >
            {/* Large value */}
            <div className="mb-4">
              <span className="font-display font-black text-4xl md:text-5xl text-foreground">
                {stat.value}
              </span>
              <span className="text-primary font-bold text-lg ml-1">{stat.unit}</span>
            </div>

            {/* Icon + label */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">{stat.label}</h3>
            </div>

            <p className="text-xs text-muted-foreground">{stat.desc}</p>

            {/* Divider between items on desktop */}
            {i < stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border/40" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
