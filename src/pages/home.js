import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import Products from "../components/products";
import Header from "../components/header";

import { CartState } from "../context/CartContext";
import Filters from "../components/filters";

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

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart"));
    console.log(carts);
    dispatch({ type: "FETCH_CART", payload: carts });
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const { products, cart } = state;

  return (
    <div>
      <Header />
      <div className="home-page">
        <Filters />
        <Products products={products} cart={cart} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Home;
