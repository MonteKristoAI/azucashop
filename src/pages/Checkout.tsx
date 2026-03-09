import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore, selectSubtotal, selectTotalItems } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Checkout = () => {
  const { items, clearCart } = useCartStore();
  const subtotal = useCartStore(selectSubtotal);
  const totalItems = useCartStore(selectTotalItems);
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    toast.success("Order placed successfully! (Demo)");
  };

  if (placed) {
    return (
      <div className="pt-24 pb-16">
        <div className="section-container text-center py-20">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display font-extrabold text-3xl text-foreground mb-3">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              This is a demo store — no real order was placed. Thanks for exploring AZUCA!
            </p>
            <Button asChild><Link to="/shop">Continue Shopping</Link></Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (totalItems === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="section-container text-center py-20">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Button variant="outline" asChild><Link to="/shop">Browse Products</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <h1 className="font-display font-extrabold text-3xl text-foreground mb-10">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-10">
          {/* Form fields */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["First Name", "text"],
                  ["Last Name", "text"],
                  ["Email", "email"],
                  ["Phone", "tel"],
                ].map(([label, type]) => (
                  <div key={label}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
                    <input type={type} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Address</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {["City", "State", "ZIP"].map((label) => (
                  <div key={label}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-4">Payment (Demo)</h2>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm text-muted-foreground mb-4">
                This is a demo — no real payment will be processed.
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">CVC</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="sticky top-24 rounded-xl bg-card border border-border p-6">
              <h2 className="font-display font-bold text-lg text-foreground mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-foreground">
                      {item.product.name} <span className="text-muted-foreground">×{item.quantity}</span>
                    </span>
                    <span className="text-foreground font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full mt-6 rounded-lg">
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
