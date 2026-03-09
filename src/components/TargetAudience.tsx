import { motion } from "framer-motion";
import { Heart, Flame, Shield, Leaf, Briefcase, Dumbbell } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const audiences = [
  {
    icon: Heart,
    title: "Existing Edibles Enthusiasts",
    description:
      "Existing edibles enthusiasts who crave gourmet flavors, controlled experiences, and sociable consumption.",
  },
  {
    icon: Flame,
    title: "Traditional Cannabis Users",
    description:
      "Traditional cannabis users seeking healthier, more discreet alternatives to smoking and vaping, without compromising on the quality of experience and D9 sensory effects of inhalation.",
  },
  {
    icon: Shield,
    title: "Nervous Nellies",
    description:
      "Newcomers and seasoned consumers overcoming apprehensions with negative edibles experiences, eager for a positive, and predictable outcome.",
  },
  {
    icon: Leaf,
    title: "Seeking Natural Alternatives",
    description:
      "Wellness-conscious individuals exploring cannabis as a natural adjunct or replacement for alcohol, tobacco, or supplements.",
  },
  {
    icon: Briefcase,
    title: "Busy Bees",
    description:
      "Professionals and parents in search of swift, inconspicuous cannabis solutions that fit a busy lifestyle.",
  },
  {
    icon: Dumbbell,
    title: "Seeking Wellness Benefits",
    description:
      "Fitness and wellness enthusiasts drawn to cannabis for its potential therapeutic and recovery benefits, who prefer edibles over inhalation for wellness reasons.",
  },
];

const TargetAudience = () => {
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
            Target Audience
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            For Edibles Aficionados <span className="text-primary">& Cannabis Curious</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="glass-card rounded-2xl p-7 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl gradient-pink flex items-center justify-center mb-5">
                <audience.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-sm mb-2 text-foreground">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
