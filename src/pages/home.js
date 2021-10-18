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

  const { products, cart } = state;

  if (loading) {
    return <Loader />;
  }

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
