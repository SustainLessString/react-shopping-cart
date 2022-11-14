// Components
import { Badge, Drawer, Grid, LinearProgress } from "@mui/material";
import { ShoppingCart as CartIcon } from "@mui/icons-material";

// Components Local
import Shimmer from "@app/components/ShimmerLoading";
import Cart from "@app/components/Cart";
import Item from "@app/components/Item";

// Hooks
import useApp from "@app/hooks/App";

// Styles
import { Wrapper, StyledButton } from "@app/styles/App.styles";

const App = () => {
  // prettier-ignore
  const { 
    data, isLoading, error, cartOpen, cartItems, 
    getTotalQuantity, getTotalItems, handleCartOpen, handleAddToCart, handleRemoveFromCart,
  } = useApp();

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went Wrong</div>;

  return (
    // prettier-ignore
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => handleCartOpen(false)} transitionDuration={500}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <Wrapper>
        <StyledButton onClick={() => handleCartOpen(true)}> {/* First Badge is for total quantity */} {/* Second Badge is for number of different item */}
          <Badge overlap="rectangular" badgeContent={getTotalQuantity(cartItems)} color="error" anchorOrigin={{ horizontal: "right", vertical: "bottom" }} >
            <Badge overlap="rectangular" badgeContent={getTotalItems(cartItems)} color="primary" anchorOrigin={{ horizontal: "right", vertical: "top" }} >
              <CartIcon fontSize="large" />
            </Badge>
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};
export default App;
