import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FlaskConical, ArrowLeft, Zap, Clock, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ease = [0.16, 1, 0.3, 1] as const;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const related = products.filter((p) => p.id !== id).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-neon-pink text-sm">← Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <div className="pt-24 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            className="aspect-square bg-secondary/50 flex items-center justify-center border border-border/20"
          >
            <span className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-foreground/10">
              {product.name.split(" ").slice(0, 2).join(" ")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-neon-pink text-primary-foreground text-[9px] tracking-[0.15em] uppercase font-medium mb-4">
                {product.badge}
              </span>
            )}

            <h1
              className="font-display font-extrabold uppercase text-foreground leading-[1.1] mb-3"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "0.04em" }}
            >
              {product.name}
            </h1>

            <p className="text-xs text-muted-foreground mb-2">{product.shortDescription}</p>

            <p className="font-display text-2xl font-bold text-neon-pink mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-sm text-muted-foreground leading-[1.8] mb-8">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto px-10 py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)] transition-all duration-300 mb-10"
            >
              Add to Cart
            </button>

            {/* Info */}
            <div className="space-y-6 border-t border-border/15 pt-8">
              <div>
                <h3 className="font-display font-semibold text-foreground text-xs tracking-[0.1em] uppercase mb-2">Dosage</h3>
                <p className="text-sm text-muted-foreground">{product.dosage}</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-xs tracking-[0.1em] uppercase mb-2">Ingredients</h3>
                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-neon-teal" />
                  <span className="text-xs text-muted-foreground">Lab Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-neon-teal" />
                  <span className="text-xs text-muted-foreground">COA Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology benefits */}
        <div className="mt-20 border-t border-border/10 pt-16">
          <div className="hr-accent mb-5" />
          <h2 className="font-display font-bold text-foreground text-lg tracking-[0.06em] uppercase mb-8">
            TiME INFUSION® Technology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "5–15 Min Onset", desc: "Molecular encapsulation enables rapid sublingual absorption." },
              { icon: Clock, title: "Predictable Timing", desc: "Consistent onset and offset for a controllable experience." },
              { icon: Droplets, title: "Better Absorption", desc: "Hydrophilic cannabinoids with 18–22% bioavailability." },
            ].map((b, i) => (
              <div key={i} className="border border-border/20 bg-card/30 p-6">
                <b.icon className="w-5 h-5 text-neon-teal mb-3" />
                <h3 className="font-display font-bold text-foreground text-xs tracking-[0.08em] uppercase mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-border/10 pt-16">
            <div className="hr-accent mb-5" />
            <h2 className="font-display font-bold text-foreground text-lg tracking-[0.06em] uppercase mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group border border-border/30 bg-card/40 hover:border-border/50 transition-all duration-500"
                >
                  <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground/15">
                      {p.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground text-sm tracking-[0.05em] mb-1">{p.name}</h3>
                    <span className="font-display font-bold text-foreground text-sm">${p.price.toFixed(2)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
