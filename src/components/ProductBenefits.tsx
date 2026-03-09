import { motion } from "framer-motion";
import { Zap, Sparkles, Droplets, CookingPot, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: Zap,
    title: "Fast-Acting",
    subtitle: "5–15 minute onset",
    description:
      "Experience effects within 5–15 minutes, akin to the immediacy of alcohol or smoking, for a predictable and manageable experience that caters to your timing and social needs.",
  },
  {
    icon: Sparkles,
    title: "Premium Effects",
    subtitle: "Smoker's high",
    description:
      "Our edibles don't just work faster; they redefine the experience. With soft tissue absorption of Delta-9-THC, you get a lighter, more euphoric sensation, reminiscent of smoking – perfect for sociable settings.",
  },
  {
    icon: Droplets,
    title: "Water-Soluble",
    subtitle: "Hydrophilic",
    description:
      "TiME INFUSION® creates a hydrophilic coating around each oil molecule so that products absorb through soft tissues of the body via buccal absorption, preempting first-pass metabolism.",
  },
  {
    icon: CookingPot,
    title: "Great Tasting",
    subtitle: "No bitter distillate",
    description:
      "No more unpleasant taste of cannabis concentrates. Our unique encapsulation process crafts edibles that are genuinely enjoyable, encouraging repeat consumption – essential for micro-dosing and daily wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Shelf & Supply Chain Stable",
    subtitle: "No seepage or crystallization",
    description:
      "TiME INFUSION® products are shelf, temperature, supply chain, and pH stable with no seepage or crystallization – ensuring consistent quality throughout the product lifecycle.",
  },
];

const ProductBenefits = () => {
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
            Product Attributes
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            Why TiME INFUSION® <span className="text-primary">Hits Different</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`group glass-card rounded-2xl p-7 hover:border-primary/30 transition-all duration-500 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl gradient-pink flex items-center justify-center mb-5">
                <benefit.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-base mb-1 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-xs text-primary font-medium mb-3">{benefit.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
