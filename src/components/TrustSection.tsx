import { Zap, Smile, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Zap, label: "Fast-Acting", desc: "Feel it fast, not 90 minutes later", value: "5–15", unit: "min" },
  { icon: Smile, label: "Great Taste", desc: "No bitter cannabis flavor", value: "100", unit: "%" },
  { icon: TrendingUp, label: "More From Every Dose", desc: "Get more effect per gummy", value: "3–4", unit: "×" },
  { icon: ShieldCheck, label: "Always Consistent", desc: "Same great experience every time", value: "24", unit: "mo" },
];

const TrustSection = () => (
  <section className="relative overflow-hidden">
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
        The AZUCA Difference
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
            <div className="mb-4">
              <span className="font-display font-black text-4xl md:text-5xl text-foreground">
                {stat.value}
              </span>
              <span className="text-primary font-bold text-lg ml-1">{stat.unit}</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">{stat.label}</h3>
            </div>

            <p className="text-xs text-muted-foreground">{stat.desc}</p>

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
