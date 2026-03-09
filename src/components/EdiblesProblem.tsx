import { motion } from "framer-motion";
import { MessageCircleQuestion, CheckCircle2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const painPoints = [
  "How long will these take to work?",
  "How strong will the effect be? How long will it last?",
  "Why do these make me so sleepy?",
  "Why does this feel so much different than smoking?",
  "Edibles taste awful!",
  "Why do edibles have little to no effect on me?",
  "Are edibles safe? Which brands can I trust?",
];

const solutions = [
  { problem: "Slow, unpredictable onset", solution: "5–15 minute delivery onset" },
  { problem: "Heavy 11-Hydroxy-THC sedation", solution: "Soft tissue absorption preserves Delta-9-THC" },
  { problem: "Inconsistent dosing", solution: "Precise, easy-to-measure dosing" },
  { problem: 'Acrid "green" flavor', solution: "Neutral taste profile" },
  { problem: "Low bioavailability (2–6%)", solution: "High bioavailability (18–22%)" },
  { problem: "Inconsistent stability", solution: "Shelf, temperature, supply chain & pH stable" },
];

const EdiblesProblem = () => {
  return (
    <section className="section-spacing relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4 block">
            The Problem
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            The Edibles <span className="text-primary">Problem</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Traditional cannabinoid ingredients have problems. TiME INFUSION® solves them.
          </p>
        </motion.div>

        {/* Consumer pain points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="glass-card rounded-xl p-5 flex items-start gap-3 hover:border-primary/20 transition-colors duration-300"
            >
              <MessageCircleQuestion className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90 italic">"{point}"</p>
            </motion.div>
          ))}
        </div>

        {/* Solutions grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h3 className="font-display font-bold text-xl text-center mb-8 text-foreground">
            TiME INFUSION® <span className="text-primary">solves them.</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-xs text-muted-foreground line-through mb-2">{item.problem}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EdiblesProblem;
