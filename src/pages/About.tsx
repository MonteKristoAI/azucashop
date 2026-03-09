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
            About <span className="text-neon-pink">Entourage</span>
          </h1>
          <p className="text-base text-muted-foreground leading-[1.8] mb-5">
            We started Entourage with a simple belief: hemp wellness should be accessible, transparent, and enjoyable. Every product we create is designed with precision — from the formulation to the experience.
          </p>
          <p className="text-base text-muted-foreground leading-[1.8]">
            Our team combines expertise in cannabinoid science with a commitment to compliance and quality. We believe that trust is earned through transparency — which is why every batch comes with full lab reports and a Certificate of Analysis.
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
            We are committed to creating products that meet the highest standards of quality and compliance. Our hemp is sourced from trusted farms, processed with advanced extraction methods, and tested at every stage. We don't cut corners — because your wellness matters.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
