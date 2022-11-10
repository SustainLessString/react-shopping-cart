import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Types
import { CartItemType } from "@app/types/CartItem.types";

const useApp = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const handleCartOpen = (open: boolean) => setCartOpen(open);

  const getProducts = async (): Promise<CartItemType[]> =>
    await /* for JSON */ (
      await /* for API calling */
      fetch("https://fakestoreapi.com/products")
    ).json();

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    // move items into set of id (set does not have duplicate value) then get the size of that set
    new Set(items.map((item) => item.id)).size;

  const getTotalQuantity = (items: CartItemType[]) =>
    items.reduce((n: number, item) => n + item.quantity, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // add the quantity by 1 if the item is already in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // add the item with quantity of 1 if not yet added to cart
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          // remove item if the quantity is 1
          if (item.quantity === 1) return ack;
          // reduce quantity by 1 if the quantity is higher than 1
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  return {
    data,
    isLoading,
    error,
    cartOpen,
    cartItems,
    getTotalQuantity,
    getTotalItems,
    handleCartOpen,
    handleAddToCart,
    handleRemoveFromCart,
  };
};

export default useApp;
