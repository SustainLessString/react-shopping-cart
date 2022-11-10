import { CartItemType } from "@app/types/CartItem.types";

export const calculateTotal = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
