import { useState } from "react";
import { Send, MapPin, Mail as MailIcon, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Message sent! We'll get back to you soon."); setForm({ name: "", email: "", subject: "", message: "" }); };
  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-3">Get in Touch</h1>
          <p className="text-muted-foreground max-w-lg">Questions about an order, wholesale inquiries, or just want to say hi?</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-sm font-medium text-foreground mb-1.5 block">Name</label><input type="text" value={form.name} onChange={update("name")} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" /></div>
              <div><label className="text-sm font-medium text-foreground mb-1.5 block">Email</label><input type="email" value={form.email} onChange={update("email")} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" /></div>
            </div>
            <div><label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label><select value={form.subject} onChange={update("subject")} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"><option value="">Select a topic</option><option value="order">Order Inquiry</option><option value="wholesale">Wholesale</option><option value="feedback">Feedback</option><option value="other">Other</option></select></div>
            <div><label className="text-sm font-medium text-foreground mb-1.5 block">Message</label><textarea value={form.message} onChange={update("message")} required rows={5} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" /></div>
            <Button type="submit" size="lg" className="rounded-lg">Send Message <Send className="ml-2 w-4 h-4" /></Button>
          </motion.form>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="aspect-[4/3] rounded-xl bg-card border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149413541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Azuca Location - New York"
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-card border border-border"><MailIcon className="w-5 h-5 text-primary mb-2" /><p className="text-sm font-medium text-foreground">Email</p><p className="text-xs text-muted-foreground mt-1">partnerships@azucatime.com</p></div>
              <div className="p-5 rounded-xl bg-card border border-border"><Phone className="w-5 h-5 text-primary mb-2" /><p className="text-sm font-medium text-foreground">Phone</p><p className="text-xs text-muted-foreground mt-1">(555) 123-4567</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
