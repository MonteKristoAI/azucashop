import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.email.trim() && form.message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <h1
              className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.06em" }}
            >
              Get In Touch
            </h1>
            <p className="text-base text-muted-foreground leading-[1.8] mb-10 max-w-md">
              Have questions about our products, compliance, or wholesale inquiries? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-neon-teal mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-foreground text-xs tracking-[0.1em] uppercase mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@entourage.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-neon-teal mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-foreground text-xs tracking-[0.1em] uppercase mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Austin, TX</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {submitted ? (
              <div className="border border-border/20 bg-card/40 p-10 text-center">
                <p className="text-neon-teal font-display font-bold text-lg mb-2">Message Sent!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border/30 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-neon-pink/50 transition-colors"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border/30 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-neon-pink/50 transition-colors"
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border/30 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-neon-pink/50 transition-colors resize-none"
                    required
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.3)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
