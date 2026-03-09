import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-card border-l border-border/20 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/15">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-foreground" />
                <span className="font-display font-bold text-sm tracking-[0.1em] uppercase text-foreground">
                  Cart
                </span>
                <span className="text-xs text-muted-foreground">
                  ({items.length} {items.length === 1 ? "item" : "items"})
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <ShoppingBag className="w-10 h-10 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground">
                    Your cart is empty
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 border border-border/15 bg-secondary/30 p-4"
                    >
                      {/* Thumb */}
                      <div className="w-16 h-16 flex-shrink-0 bg-secondary/60 flex items-center justify-center border border-border/10">
                        <span className="font-display text-[8px] font-bold uppercase tracking-[0.15em] text-foreground/15">
                          {item.product.name.split(" ")[0]}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-xs tracking-[0.05em] text-foreground truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          ${item.product.price.toFixed(2)}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center border border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-medium text-foreground w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center border border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground hover:text-neon-pink transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-border/15 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-display font-bold text-lg text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-3.5 bg-neon-pink text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.3)] transition-all duration-300">
                  Checkout
                </button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
