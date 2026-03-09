import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! Welcome to EMBER.");
      setEmail("");
    }
  };

  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-border p-10 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-3 relative">
          Stay in the Loop
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto relative">
          New roasts, brewing guides, and exclusive offers — delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button type="submit" className="rounded-lg">
            Subscribe <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsletterCTA;
