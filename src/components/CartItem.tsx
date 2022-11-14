// Components
import { Button } from "@mui/material";

// Types
import { CartItemProps } from "@app/types/CartItem.types";

// Styles
import { Wrapper } from "@app/styles/CartItem.styles";

const CartItem: React.FC<CartItemProps> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <div className="button">
        <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
          -
        </Button>
        <p>{item.quantity}</p>
        <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.description}></img>
  </Wrapper>
);

export default CartItem;
