import { motion } from "framer-motion";
import { Wine, PartyPopper, Clock, Gauge } from "lucide-react";
import socialImg from "@/assets/social-moment.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    icon: PartyPopper,
    title: "Event-Friendly",
    description: "Smoking and vaping are prohibited at most venues. TiME INFUSION® edibles offer a discreet, fast-acting alternative.",
  },
  {
    icon: Wine,
    title: "Happy Hour Edibles",
    description: "Welcome to the new era of sessionable cannabis. Predictable timing makes edibles as social as a cocktail.",
  },
  {
    icon: Clock,
    title: "Predictable Onset & Offset",
    description: "Consumption lounges require products with reliable timing. TiME INFUSION® delivers onset in 5–15 minutes with a clear offset.",
  },
  {
    icon: Gauge,
    title: "Sessionable Dosing",
    description: "Traditional edibles are unreliable for social settings. Precise dosing lets consumers manage their experience with confidence.",
  },
];

const SocialExperience = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={socialImg}
              alt="Social consumption moment"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7) contrast(1.1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display font-extrabold uppercase text-foreground text-lg tracking-[0.1em]">
                Unlocking Social
                <span className="text-neon-pink"> Consumption</span>
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            <div className="hr-accent mb-5" />
            <p className="label-text mb-6">The Social Experience</p>
            <h2
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
            >
              Cannabis for
              <br />
              <span className="text-neon-teal">Social Moments</span>
            </h2>
            <p className="text-base text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              As consumption lounges are being written into state laws, ingestibles need to meet the demand for a social experience with predictable onset and offset. TiME INFUSION® makes that possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="border border-border/20 bg-card/40 p-5">
                  <p.icon className="w-4 h-4 text-neon-teal mb-3" />
                  <h4 className="font-display font-bold uppercase text-foreground text-xs tracking-[0.08em] mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialExperience;
