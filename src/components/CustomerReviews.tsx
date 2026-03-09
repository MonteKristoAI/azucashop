import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
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
            What Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="border border-border/20 bg-card/40 p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-3.5 h-3.5 ${si < review.rating ? "fill-neon-gold text-neon-gold" : "text-border"}`}
                  />
                ))}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                "{review.text}"
              </p>

              <div>
                <p className="font-display font-bold text-foreground text-xs tracking-[0.05em]">
                  {review.name}
                </p>
                <p className="text-[10px] text-muted-foreground tracking-[0.1em] uppercase mt-0.5">
                  {review.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
