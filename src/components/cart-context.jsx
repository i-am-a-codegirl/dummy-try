import { WishlistReducer } from "./wishlistReducer";
const { createContext, useReducer, useContext } = require("react");

const { CartReducer } = require("./cart-reducer");

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, []);
  const [wishlist, wishlistDispatch] = useReducer(WishlistReducer, []);

  return (
    <CartContext.Provider
      value={{ state, dispatch, wishlist, wishlistDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
