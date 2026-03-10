import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const categoryColors: Record<string, string> = {
  coffee: "from-amber-900/20 to-orange-900/5",
  tea: "from-emerald-900/20 to-teal-900/5",
  accessories: "from-slate-700/20 to-indigo-900/5",
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(product?.variants?.[0]);

  if (!product) {
    return (
      <div className="pt-24 section-container text-center py-32">
        <p className="text-muted-foreground mb-4">Product not found.</p>
        <Button variant="outline" asChild><Link to="/shop">Back to Shop</Link></Button>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className={`aspect-square rounded-2xl bg-gradient-to-br ${categoryColors[product.category]} border border-border flex items-center justify-center overflow-hidden`}>
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-display text-4xl font-extrabold uppercase tracking-wider text-foreground/10 text-center px-8">{product.name}</span>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
            <p className="font-display font-extrabold text-3xl text-foreground mb-6">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">Size / Option</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button key={v} onClick={() => setSelectedVariant(v)} className={`px-4 py-2 text-sm rounded-lg border transition-all ${selectedVariant === v ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-foreground/30"}`}>{v}</button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-secondary rounded-lg px-3 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-foreground hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-foreground hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <Button size="lg" className="flex-1 rounded-lg" onClick={handleAddToCart}><ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart</Button>
            </div>
          </motion.div>
        </div>
        {related.length > 0 && (
          <div>
            <h2 className="font-display font-extrabold text-2xl text-foreground mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
