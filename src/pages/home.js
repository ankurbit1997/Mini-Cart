import React, { useEffect, useState } from "react";
import Loader from "../components/loader";

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
      });
  }, [dispatch]);

  console.log(loading, state);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Hom-Page</h1>
    </div>
  );
};

export default Home;
