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
    q: "How quickly will I feel the effects?",
    a: "AZUCA gummies typically kick in within 5–15 minutes — way faster than traditional edibles that can take 60–90 minutes. Our TiME INFUSION® delivery system helps your body absorb cannabinoids quickly so you're not left guessing.",
  },
  {
    q: "How strong will the effect be? How long will it last?",
    a: "Each gummy delivers a precise, consistent dose so you know exactly what to expect. Effects are clear and controllable with a smooth comedown — perfect for social settings where you want to feel good without overdoing it.",
  },
  {
    q: "Why don't these make me sleepy like other edibles?",
    a: "Most edibles get processed through your liver, which converts THC into a compound that causes heavy, sedating effects. AZUCA gummies are designed to preserve the original Delta-9-THC — giving you a lighter, more uplifting experience similar to smoking, without the couch-lock.",
  },
  {
    q: "Do these taste like cannabis?",
    a: "Not at all. AZUCA gummies have no bitter cannabis flavor — just great-tasting fruit flavors. Our formulation process eliminates the harsh 'green' taste that plagues most edibles.",
  },
  {
    q: "What's the entourage effect?",
    a: "It's the idea that THC, CBD, and terpenes work better together than alone — creating a more balanced, full-body experience. AZUCA gummies are formulated with all three to mimic the complete cannabis experience, similar to smoking but without inhaling.",
  },
  {
    q: "What product formats are available?",
    a: "AZUCA offers fast-acting gummies, cannabis beverages, and premium chocolates — all crafted for a social, sessionable experience with effects you can feel in minutes.",
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
            Common questions about AZUCA gummies.
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
