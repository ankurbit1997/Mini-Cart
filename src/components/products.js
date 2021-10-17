import React from "react";

import { AiFillStar } from "react-icons/ai";

import "./products.scss";

const SingleProduct = ({ product, dispatch }) => {
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
        <button
          onClick={() => dispatch({ type: "ADD_PRODUCT", payload: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = ({ products, dispatch }) => {
  return (
    <div className="products">
      {products.map((product, i) => (
        <SingleProduct product={product} key={i} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Products;
