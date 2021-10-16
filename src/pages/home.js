import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import Products from "../components/products";

import { CartState } from "../context/CartContext";

const Home = () => {
  const { state, dispatch } = CartState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const { products } = state;

  return (
    <div className="home-page">
      <Products products={products} dispatch={dispatch} />
    </div>
  );
};

export default Home;
