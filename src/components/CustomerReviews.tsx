import { useState, useRef, useCallback } from "react";
import { Star, MessageSquarePlus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews as initialReviews } from "@/data/products";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const CustomerReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [extraReviews, setExtraReviews] = useState<typeof initialReviews>([]);

  const allReviews = [...initialReviews, ...extraReviews];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setExtraReviews((prev) => [...prev, { name, product: product || "Azuca Product", rating, text }]);
    setName("");
    setProduct("");
    setText("");
    setRating(5);
    setShowForm(false);
  };

  return (
    <section className="bg-card border-y border-border">
      <div className="section-container py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-3">What People Are Saying</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Real experiences from consumers who made the switch to TiME INFUSION®.</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mb-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {allReviews.map((review, i) => (
                <div
                  key={review.name + i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="p-6 rounded-xl bg-background border border-border h-full flex flex-col">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < review.rating ? "fill-primary text-primary" : "text-muted-foreground/20"}`} />
                      ))}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-4 flex-1">"{review.text}"</p>
                    <div>
                      <p className="text-sm font-medium text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.product}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Leave a Review button at bottom */}
        <div className="text-center">
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <MessageSquarePlus className="w-4 h-4" /> Leave a Review
          </Button>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-10">
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 rounded-xl bg-background border border-border space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-foreground">Write Your Review</h3>
                  <button type="button" onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button key={i} type="button" onMouseEnter={() => setHoverRating(i + 1)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(i + 1)}>
                      <Star className={`w-6 h-6 transition-colors ${i < (hoverRating || rating) ? "fill-primary text-primary" : "text-muted-foreground/20"}`} />
                    </button>
                  ))}
                </div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full px-4 py-2 text-sm rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product (optional)" className="w-full px-4 py-2 text-sm rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Share your experience..." required rows={3} className="w-full px-4 py-2 text-sm rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                <Button type="submit" className="w-full">Submit Review</Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomerReviews;
