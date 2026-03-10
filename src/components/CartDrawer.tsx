import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore, selectSubtotal, selectTotalItems } from "@/store/cartStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity } = useCartStore();
  const subtotal = useCartStore(selectSubtotal);
  const totalItems = useCartStore(selectTotalItems);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card border-l border-border flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-foreground flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button variant="outline" onClick={() => setIsOpen(false)} asChild><Link to="/shop">Browse Products</Link></Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 space-y-4 mt-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-3 rounded-lg bg-secondary/50">
                  <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                    {item.product.image ? (
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs font-display font-bold text-muted-foreground uppercase">{item.product.category.slice(0,3)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-medium text-foreground truncate">{item.product.name}</h4>
                      <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground shrink-0"><X className="w-4 h-4" /></button>
                    </div>
                    {item.variant && <p className="text-xs text-muted-foreground">{item.variant}</p>}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="text-sm font-bold text-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 mt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg" asChild onClick={() => setIsOpen(false)}><Link to="/checkout">Checkout</Link></Button>
              <button onClick={() => setIsOpen(false)} className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors">Continue Shopping</button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
