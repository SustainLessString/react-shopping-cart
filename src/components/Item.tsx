// Components
import { Button } from "@mui/material";

// Types
import { ItemProps } from "@app/types/Item.types";
// import { CartItemType } from "@app/types/CartItem.types";

// Styles
import { Wrapper } from "@app/styles/Item.styles";

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
