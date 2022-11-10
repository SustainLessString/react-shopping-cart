import { CartItemType } from "./CartItem.types";

export type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
