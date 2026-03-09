import { Sprout, Globe, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Sprout, title: "Ethically Sourced", desc: "Direct trade partnerships with farmers in 12+ countries, ensuring fair wages and sustainable practices." },
  { icon: Globe, title: "Sustainably Packaged", desc: "Compostable bags, recyclable tins, and carbon-neutral shipping on every order." },
  { icon: Award, title: "Expert Roasted", desc: "Small-batch roasting by certified Q-graders who taste every lot for quality and consistency." },
  { icon: Heart, title: "Community First", desc: "1% of every purchase funds clean water projects in coffee-growing communities." },
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
          More Than Just Coffee
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          EMBER started in a tiny garage roastery with one mission: make exceptional coffee accessible to everyone. Today, we work directly with farmers across Ethiopia, Colombia, Indonesia, and Japan to source the world's finest beans and leaves.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            ["12+", "Countries"],
            ["50K+", "Happy Customers"],
            ["8", "Years Roasting"],
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
