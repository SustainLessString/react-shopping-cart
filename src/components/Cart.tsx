// Components
import CartItem from "@app/components/CartItem";

// Hooks
import { calculateTotal } from "@app/hooks/Cart";

// Styles
import { Wrapper } from "@app/styles/Cart.styles";

// Types
import { CartProps } from "@app/types/Cart.types";

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in the cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
