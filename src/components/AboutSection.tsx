import { Atom, Beaker, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Atom, title: "TiME INFUSION®", desc: "Thermodynamic Individual Molecular Encapsulation® creates hydrophilic cannabinoids for rapid soft-tissue absorption." },
  { icon: Beaker, title: "Delta-9-THC Preserved", desc: "Soft tissue absorption preserves Delta-9-THC, minimizing conversion to 11-Hydroxy-THC for a lighter, euphoric experience." },
  { icon: Sparkles, title: "Premium Effects", desc: "A more uplifting sensory experience like smoking cannabis — without the intense sedation known as couch-lock." },
  { icon: Users, title: "Social Ready", desc: "Predictable onset and offset times make TiME INFUSION® products perfect for social consumption and events." },
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
          The Science Behind TiME INFUSION®
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our innovative culinary cannabis ingredients & products taste great and take effect in 5–15 minutes vs. up to 90 minutes for traditional edibles. TiME INFUSION® creates a hydrophilic coating around oil molecules so products absorb through soft tissues, preempting first-pass metabolism.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            ["5–15", "Min Onset"],
            ["18–22%", "Bioavailability"],
            ["Delta-9", "THC Preserved"],
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
