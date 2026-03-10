import { useState, useRef, useEffect } from "react";
import { Star, MessageSquarePlus, X, ChevronLeft, ChevronRight, MapPin, ThumbsUp, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { customerReviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-pink-500",
];

const CustomerReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [helpfulSet, setHelpfulSet] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const toggleHelpful = (i: number) => {
    setHelpfulSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setName("");
    setProduct("");
    setText("");
    setRating(5);
    setShowForm(false);
  };

  const avgRating = (customerReviews.reduce((s, r) => s + r.rating, 0) / customerReviews.length).toFixed(1);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-border"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-secondary/40" />
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className={`section-container py-20 relative z-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Customer Reviews</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-5">What our customers say</h2>

            {/* Google-style rating badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shadow-sm">
              {/* Google G */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.94 10.94 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xl text-foreground">{avgRating}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Based on 183+ reviews</span>
              </div>
            </div>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden lg:flex items-center gap-2 pb-1">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {customerReviews.map((review, i) => (
            <div
              key={review.name + i}
              className="snap-start flex-shrink-0 w-[340px] sm:w-[360px] rounded-xl bg-card border border-border p-5 flex flex-col gap-4"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Profile row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-foreground">{review.name}</span>
                      <BadgeCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>
                {/* Faded Google G */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-20 shrink-0" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.94 10.94 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Rating + time */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20"}`} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">{review.text}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">{review.service}</span>
                <button
                  onClick={() => toggleHelpful(i)}
                  className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md transition-all ${
                    helpfulSet.has(i)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Helpful
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <MessageSquarePlus className="w-4 h-4" /> Leave a Review
          </Button>
        </div>

        {/* Form modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-10">
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 rounded-xl bg-card border border-border space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-foreground">Write Your Review</h3>
                  <button type="button" onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button key={i} type="button" onMouseEnter={() => setHoverRating(i + 1)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(i + 1)}>
                      <Star className={`w-6 h-6 transition-colors ${i < (hoverRating || rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20"}`} />
                    </button>
                  ))}
                </div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full px-4 py-2 text-sm rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product (optional)" className="w-full px-4 py-2 text-sm rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Share your experience..." required rows={3} className="w-full px-4 py-2 text-sm rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                <Button type="submit" className="w-full">Submit Review</Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hide scrollbar */}
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default CustomerReviews;
