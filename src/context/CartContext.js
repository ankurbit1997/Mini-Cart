import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./CartReducer";
import { filterReducer } from "./filterReducer";

const Cart = createContext();

const initialState = {
  products: [],
  cart: [],
};

const filtersInitialState = {
  byRating: 0,
  searchQuery: "",
  mensClothing: false,
  womensClothing: false,
  electronics: false,
  jewelery: false,
  sort: "",
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filtersInitialState
  );

  return (
    <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartContext;
