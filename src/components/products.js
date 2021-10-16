import React from "react";

import "./products.scss";

const SingleProduct = ({ product, dispatch }) => {
  return (
    <div className="single-product">
      <div
        className="single-product__image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="single-product__detalils">
        <div>
          <p>${product.price}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, i) => (
        <SingleProduct product={product} key={i} />
      ))}
    </div>
  );
};

export default Products;
