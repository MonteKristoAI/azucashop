import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (product: Product, quantity?: number, variant?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      setIsOpen: (open) => set({ isOpen: open }),
      addItem: (product, quantity = 1, variant) => {
        const items = get().items;
        const existing = items.find(
          (i) => i.product.id === product.id && i.variant === variant
        );
        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id && i.variant === variant
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({ items: [...items, { product, quantity, variant }], isOpen: true });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.product.id !== id) }),
      updateQuantity: (id, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.product.id !== id) });
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.id === id ? { ...i, quantity: qty } : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "ember-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export const selectTotalItems = (state: CartState) =>
  state.items.reduce((sum, i) => sum + i.quantity, 0);

export const selectSubtotal = (state: CartState) =>
  state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
