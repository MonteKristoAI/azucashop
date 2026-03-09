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
    q: "What is hemp-derived THC?",
    a: "Hemp-derived THC is extracted from legally grown hemp plants containing less than 0.3% Delta-9 THC by dry weight, as defined by the 2018 Farm Bill. Our products comply with all federal regulations.",
  },
  {
    q: "Are these products legal?",
    a: "Yes. All our products are derived from hemp and comply with the 2018 Farm Bill. They contain less than 0.3% Delta-9 THC by dry weight. However, state laws vary — please check your local regulations before purchasing.",
  },
  {
    q: "How long do effects take?",
    a: "Thanks to our advanced infusion technology, most customers feel effects within 5–15 minutes, compared to 45–90 minutes with traditional edibles. Individual results may vary.",
  },
  {
    q: "Are products lab tested?",
    a: "Absolutely. Every batch is third-party lab tested for potency, purity, and safety. Certificates of Analysis (COA) are available for all products on our website.",
  },
  {
    q: "Where do you ship?",
    a: "We ship to all 50 states where hemp-derived products are permitted. Orders typically arrive within 3–5 business days. Free shipping is available on orders over $50.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
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
            Everything you need to know about our products.
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
