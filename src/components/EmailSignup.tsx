import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-border/10">
      <div className="max-w-[600px] mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="font-display font-extrabold uppercase text-foreground leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "0.06em" }}
          >
            Join the <span className="text-neon-pink">Community</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
            Get early access to new products, exclusive deals, and wellness tips delivered to your inbox.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-neon-teal text-sm font-medium tracking-[0.05em]"
            >
              Welcome to the community! 🎉
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-secondary border border-border/30 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-pink/50 transition-colors duration-300"
                required
                maxLength={255}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-neon-pink text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.3)] transition-all duration-300"
              >
                Join
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
