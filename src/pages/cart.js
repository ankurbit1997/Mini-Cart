import React from "react";

import { CartState } from "../context/CartContext";

import "./cart.scss";

const Cart = () => {
  const { state } = CartState();

  const { cart } = state;

  return (
    <div className="cart">
      <div className="cart__list">
        <div className="cart__list__label">
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Qty</h3>
          <h3>Total</h3>
        </div>

        {cart.map((product, i) => (
          <div className="cart__list__products" key={i}>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <p>{product.qty || 1}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <div className="cart__total">total</div>
    </div>
  );
};

export default Cart;
