import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "What is TiME INFUSION®?",
    a: "TiME INFUSION® stands for Thermodynamic individual Molecular Encapsulation. It is a proprietary process that coats individual cannabinoid molecules with a hydrophilic (water-friendly) shell, enabling rapid absorption through soft tissues instead of the digestive system.",
  },
  {
    q: "How is this different from nano-emulsion?",
    a: "Nano-emulsion uses small globs of oil suspended in liquid. TiME INFUSION® individually encapsulates each cannabinoid molecule at the molecular level, creating truly hydrophilic compounds — not smaller oil droplets. This results in better absorption, taste, and stability.",
  },
  {
    q: "How fast do TiME INFUSION® products take effect?",
    a: "Products made with TiME INFUSION® typically deliver first effects within 5–15 minutes, compared to 30–90+ minutes for traditional edibles. This is because hydrophilic cannabinoids absorb through soft tissues, bypassing the slow digestive pathway.",
  },
  {
    q: "What is the difference between Delta-9-THC and 11-Hydroxy-THC?",
    a: "Delta-9-THC is the primary psychoactive compound in cannabis that creates an uplifting, euphoric effect similar to smoking. Traditional edibles convert Delta-9-THC into 11-Hydroxy-THC through liver metabolism, which produces a heavier, more sedative 'couch lock' experience. TiME INFUSION® preserves Delta-9-THC by bypassing liver metabolism.",
  },
  {
    q: "What product formats does TiME INFUSION® support?",
    a: "TiME INFUSION® powers fast-acting edibles (gummies, chocolates, confections), cannabis beverages, and culinary cannabis ingredients. The technology is shelf-stable, temperature-stable, and pH-stable, making it suitable for a wide range of product formulations.",
  },
  {
    q: "How can brands partner with Azuca?",
    a: "Azuca provides TiME INFUSION® as a premium ingredient platform for cannabis brands. Partners receive co-branding assets, marketing support, budtender training, and quarterly strategy sessions. Contact our partnerships team to learn more.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/10">
      <div className="max-w-[800px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}
          >
            Questions?
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Everything you need to know about TiME INFUSION® technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/20">
                <AccordionTrigger className="font-display text-sm font-semibold text-foreground tracking-[0.03em] hover:text-neon-pink transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
