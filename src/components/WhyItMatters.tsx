import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  { text: "30–90 minute onset rules out social consumption" },
  { text: "Unpredictable effects due to liver first-pass metabolism" },
  { text: "Bitter, acrid taste that worsens with potency" },
  { text: "Heavy 11-Hydroxy-THC sedation aka 'couch lock'" },
  { text: "Low bioavailability of just 2–6% active ingredient" },
  { text: "Inconsistent dosing from batch to batch" },
];

const solutions = [
  { text: "Fast-acting onset in 5–15 minutes" },
  { text: "Predictable effects via soft tissue absorption" },
  { text: "Neutral taste profile — no bitter distillate flavor" },
  { text: "Uplifting Delta-9-THC euphoria, not sedation" },
  { text: "18–22% bioavailability through hydrophilic delivery" },
  { text: "Precise, easy-to-measure dosing every time" },
];

const WhyItMatters = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="label-text mb-4">The Edibles Problem</p>
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            Traditional Ingredients Have Problems.
            <br />
            <span className="text-neon-teal">TiME INFUSION® Solves Them.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="border border-border/20 bg-card/40 p-7 md:p-9"
          >
            <h3 className="font-display font-bold uppercase text-sm tracking-[0.12em] text-foreground/60 mb-6">
              Traditional Edibles
            </h3>
            <div className="flex flex-col gap-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center shrink-0" style={{ background: "hsl(var(--destructive) / 0.12)" }}>
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="border border-border/20 bg-card/40 p-7 md:p-9 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(var(--neon-teal) / 0.04) 0%, transparent 70%)" }}
            />
            <h3 className="relative font-display font-bold uppercase text-sm tracking-[0.12em] text-neon-teal mb-6">
              Powered by TiME INFUSION®
            </h3>
            <div className="relative flex flex-col gap-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center shrink-0" style={{ background: "hsl(var(--neon-teal) / 0.12)" }}>
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
