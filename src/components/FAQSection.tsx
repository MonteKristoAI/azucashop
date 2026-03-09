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
    q: "How long will these take to work?",
    a: "Products made with TiME INFUSION® typically deliver first effects within 5–15 minutes, compared to 30–90+ minutes for traditional edibles. Hydrophilic cannabinoids absorb through soft tissues, bypassing the slow digestive pathway.",
  },
  {
    q: "How strong will the effect be? How long will it last?",
    a: "TiME INFUSION® delivers precise, easy-to-measure dosing with 18–22% bioavailability (vs 2–6% for traditional edibles). Effects are predictable with a clear onset and offset — ideal for social and sessionable consumption.",
  },
  {
    q: "Why do edibles make me so sleepy?",
    a: "Traditional edibles convert Delta-9-THC into 11-Hydroxy-THC through liver metabolism, which produces a heavier, more sedative 'couch lock' experience. TiME INFUSION® preserves Delta-9-THC through soft tissue absorption, delivering a lighter, more euphoric sensation similar to smoking.",
  },
  {
    q: "Why do edibles taste so bad?",
    a: "Traditional edibles contain cannabinoid oils that add an acrid, bitter 'green' flavor that gets worse with higher potency. TiME INFUSION®'s unique encapsulation process creates a neutral taste profile — no unpleasant flavor from cannabis concentrates or surfactants.",
  },
  {
    q: "How is TiME INFUSION® different from nano-emulsion?",
    a: "Nano-emulsion uses small globs of oil suspended in liquid. TiME INFUSION® (Thermodynamic individual Molecular Encapsulation®) individually encapsulates each cannabinoid molecule with a hydrophilic coating — not smaller oil droplets. This results in better absorption, taste, and shelf stability.",
  },
  {
    q: "What product formats does TiME INFUSION® support?",
    a: "TiME INFUSION® powers fast-acting gummies, cannabis beverages, chocolates, and culinary cannabis ingredients. The technology is shelf-stable, temperature-stable, and pH-stable with no seepage or crystallization, making it suitable for a wide range of product formulations.",
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
