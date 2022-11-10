import { CartItemType } from "./CartItem.types";

export type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
