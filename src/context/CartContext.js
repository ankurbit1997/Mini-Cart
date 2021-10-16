import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./CartReducer";

const Cart = createContext();

const initialState = {
  products: [],
  cart: [],
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartContext;
