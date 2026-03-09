import { motion } from "framer-motion";
import { Megaphone, PenTool, GraduationCap, Rocket } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const supports = [
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Quarterly sales, marketing, budtender training and Q&A available on request. We're always happy to help you sell.",
  },
  {
    icon: PenTool,
    title: "Packaging Design Assistance",
    description:
      "Our design team is available to help with any unique packaging needs. Send all packaging drafts to partnerships@azucatime.com.",
  },
  {
    icon: GraduationCap,
    title: "Budtender Training",
    description:
      "Budtender and wholesale training (virtual) provided as requested or quarterly to ensure your team communicates the value of TiME INFUSION®.",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description:
      "Press release and product launch support via cannabis specialty press, go-to-market consulting, and 1-hour GTM consultation with cannabis marketing agency.",
  },
];

const PartnerSupport = () => {
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
            Partner Support
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            We Help You <span className="text-primary">Succeed</span>
          </h2>
          <p className="body-large max-w-xl mx-auto">
            Complimentary, optional, and encouraged support for all TiME INFUSION® partners.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {supports.map((support, i) => (
            <motion.div
              key={support.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl gradient-pink flex items-center justify-center mb-5">
                <support.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-base mb-2 text-foreground">
                {support.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {support.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSupport;
