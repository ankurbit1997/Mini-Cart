import React, { createContext, useEffect, useState } from "react";

const Cart = createContext();

const CartContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  console.log(products);
  return <Cart.Provider>{children}</Cart.Provider>;
};

export default CartContext;
