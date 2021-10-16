import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div className="single-product">
      <h1>{product.id}</h1>
    </div>
  );
};

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, i) => (
        <SingleProduct product={product} />
      ))}
    </div>
  );
};

export default Products;
