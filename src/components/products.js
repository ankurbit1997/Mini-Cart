import React from "react";

import { AiFillStar } from "react-icons/ai";

import "./products.scss";

const SingleProduct = ({ product, dispatch, cart }) => {
  return (
    <div className="single-product">
      <div
        className="single-product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="single-product__details">
        <p>{product.title.split(" ").slice(0, 4).join(" ")}</p>
        <div>
          <span>${product.price}</span>
          <span>
            {Math.round(product.rating.rate)} <AiFillStar />
          </span>
        </div>

        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
            className="remove-from-cart"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

const Products = ({ products, dispatch, cart }) => {
  return (
    <div className="products">
      {products.length === 0 && <h2>No Products</h2>}
      {products.map((product, i) => (
        <SingleProduct
          cart={cart}
          product={product}
          key={i}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Products;
