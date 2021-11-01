import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import Products from "../components/products";
import Header from "../components/header";

import { CartState } from "../context/CartContext";
import Filters from "../components/filters";

const Home = () => {
  const { state, filterState, dispatch } = CartState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home";
  }, []);

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
  const {
    byRating,
    electronics,
    jewelery,
    mensClothing,
    searchQuery,
    sort,
    womensClothing,
  } = filterState;

  if (loading) {
    return <Loader />;
  }

  const filterdProd = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowtohigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (mensClothing) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === "men's clothing"
      );
    }
    if (womensClothing) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === "women's clothing"
      );
    }
    if (electronics) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === "electronics"
      );
    }
    if (jewelery) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === "jewelery"
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate <= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  let transformedProducts = filterdProd();

  return (
    <div>
      <Header />
      <div className="home-page">
        <Filters />

        <Products
          products={transformedProducts}
          cart={cart}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default Home;
