import { motion } from "framer-motion";
import { Clock, Users, PartyPopper, Repeat } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    icon: Clock,
    title: "Predictable Onset & Offset",
    description:
      "As consumption lounges are being written into state laws, ingestibles need to meet the demand for a social experience with predictable onset and offset times.",
  },
  {
    icon: Users,
    title: "Social & Euphoric",
    description:
      "The greater Delta-9-THC absorption allows for a more euphoric and social high akin to smoking instead of the heavier 11-Hydroxy-THC effect aka \"couch lock\".",
  },
  {
    icon: PartyPopper,
    title: "Event Friendly",
    description:
      "Smoking and vaping were prohibited at most venues before 2020. In the wake of Covid-19, the idea of sharing a joint at an event is practically extinct.",
  },
  {
    icon: Repeat,
    title: "Sessionable Consumption",
    description:
      "Traditional edibles are a poor alternative for social smoking and drinking. For social environments, consumers want timing and dosage they can trust.",
  },
];

const SocialConsumption = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--azuca-teal) / 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4 block">
            Social Experience
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            Unlocking <span className="text-primary">Social Consumption</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Welcome to the new era of Happy Hour Edibles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-pink flex items-center justify-center shrink-0">
                  <pillar.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-2 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialConsumption;
