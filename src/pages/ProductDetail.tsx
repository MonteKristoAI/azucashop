import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FlaskConical, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-neon-pink text-sm">← Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            className="aspect-square bg-secondary/50 flex items-center justify-center border border-border/20"
          >
            <span className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-foreground/10">
              {product.name.split(" ")[0]}
            </span>
          </motion.div>

          {/* Details */}
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

            <p className="font-display text-2xl font-bold text-neon-pink mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-base text-muted-foreground leading-[1.8] mb-8">
              {product.description}
            </p>

            <button className="w-full sm:w-auto px-10 py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)] transition-all duration-300 mb-10">
              Add to Cart
            </button>

            {/* Info sections */}
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
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
