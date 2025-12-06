"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  productId: string;
  productName: string;
  productQuantity: number;
  productVariant: string | null;
  productImage: string;
  productPrice: number;
  salePrice: number;
  productUrl: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: any,
    quantity: number,
    variant: string | null
  ) => void;
  removeFromCart: (id: string, variant: string | null) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  /** Load cart on first page load */
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  /** Save cart whenever it changes */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /** Add item (or update qty if exists) */
  function addToCart(product: any, quantity: number, variant: string | null) {
    // pick correct image based on variant
    let picture = product.img[0];
    product.img.forEach((img: string) => {
      if (variant && img.toLowerCase().includes(variant.toLowerCase())) {
        picture = img;
      }
    });

    setCart((prev) => {
      let found = false;

      const updated = prev.map((item) => {
        if (
          item.productId === product.id &&
          item.productVariant === (variant ?? "null")
        ) {
          found = true;
          return {
            ...item,
            productQuantity: quantity, // replace quantity like old system
          };
        }
        return item;
      });

      if (!found) {
        updated.push({
          productId: product.id,
          productName: product.title,
          productQuantity: quantity,
          productVariant: variant ?? "null",
          productImage: picture,
          productPrice: product.price,
          salePrice: product.sale_price,
          productUrl: product.url,
        });
      }

      return updated;
    });
  }

  /** Remove an item */
  function removeFromCart(id: string, variant: string | null) {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === id &&
            item.productVariant === (variant ?? "null")
          )
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
