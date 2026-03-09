import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const ease = [0.16, 1, 0.3, 1] as const;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent", description: "We'll be in touch soon." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4 block">
              Get in Touch
            </span>
            <h2 className="heading-section text-3xl md:text-4xl mb-6">
              Let's Make <span className="text-primary">Beautiful Products</span>
            </h2>
            <p className="body-large mb-8">
              We look forward to making beautiful and delicious products with you.
              Please reach out with any questions or to set materials review meetings.
            </p>

            <div className="flex items-center gap-3 glass-card rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg gradient-pink flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <a
                  href="mailto:partnerships@azucatime.com"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  partnerships@azucatime.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Name *</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-secondary/50 border-border/50 rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email *</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary/50 border-border/50 rounded-lg"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Company</label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="bg-secondary/50 border-border/50 rounded-lg"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="flex w-full rounded-lg border border-border/50 bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[120px] resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button
              type="submit"
              className="w-full gradient-pink text-primary-foreground rounded-full py-6 font-semibold glow-pink hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
