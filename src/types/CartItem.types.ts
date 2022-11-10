export type CartItemType = {
  /* Types Fetched from API */
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;

  /* Custom Type */
  quantity: number;
  // length: number;
};

export type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
