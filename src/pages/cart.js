import React from "react";
import { Link } from "react-router-dom";

import { CartState } from "../context/CartContext";
import { BsFillBagCheckFill } from "react-icons/bs";

import "./cart.scss";

const Cart = () => {
  const { state } = CartState();

  const { cart } = state;

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "4rem", flex: "3" }}>
          No products <Link to="/">Go Home</Link>
        </p>
      ) : (
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
      )}

      <div className="cart__total">
        <h2>cart total</h2>
        {cart.length !== 0 ? (
          <span>{cart.reduce((acc, cur) => acc + Number(cur.price), 0)}$</span>
        ) : (
          <span>0$</span>
        )}
        <p>Shipping excluded</p>

        {cart.length && (
          <button>
            checkout <BsFillBagCheckFill />
          </button>
        )}

        <Link className="go-home-cart" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Cart;
