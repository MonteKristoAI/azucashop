import { motion } from "framer-motion";
import { Shield, FlaskConical, Landmark, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  { icon: FlaskConical, title: "Lab Tested", description: "Every batch is third-party tested with full COA reports available." },
  { icon: Shield, title: "Compliant", description: "All products comply with the 2018 Farm Bill and federal regulations." },
  { icon: Landmark, title: "Transparent", description: "From seed to shelf, we share every step of our process." },
  { icon: Truck, title: "Accessible", description: "Shipped to all 50 states where hemp products are permitted." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mb-16"
        >
          <h1
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.06em" }}
          >
            About <span className="text-neon-pink">AZUCA</span>
          </h1>
          <p className="text-lg text-primary font-medium mb-5">A better kind of gummy experience.</p>
          <p className="text-base text-muted-foreground leading-[1.8] mb-5">
            We started AZUCA with a simple belief: cannabis edibles should be enjoyable, social, and predictable. No more guessing when it'll kick in, no more couch-lock, no more bitter taste. Just a consistently great experience you can share with friends.
          </p>
          <p className="text-base text-muted-foreground leading-[1.8]">
            Our gummies combine a full-spectrum entourage formulation — THC, CBD, and terpenes working together — with TiME INFUSION® for fast, reliable effects in 5–15 minutes. The result is an uplifting, clear-headed experience that's closer to smoking than any traditional edible, without inhaling a thing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {values.map((v, i) => (
            <div key={v.title} className="border border-border/20 bg-card/40 p-7 text-center">
              <div className="w-11 h-11 mx-auto flex items-center justify-center mb-4" style={{ background: "hsl(var(--neon-teal) / 0.1)" }}>
                <v.icon className="w-5 h-5 text-neon-teal" />
              </div>
              <h3 className="font-display font-bold uppercase text-foreground text-sm tracking-[0.08em] mb-2">
                {v.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl"
        >
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "0.06em" }}
          >
            Our Commitment
          </h2>
          <p className="text-base text-muted-foreground leading-[1.8]">
            We are committed to creating gummies that meet the highest standards of quality and taste. Our hemp is sourced from trusted farms, crafted with care, and tested at every stage. Every AZUCA product delivers the same great experience — because consistency is what makes a brand worth trusting.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
