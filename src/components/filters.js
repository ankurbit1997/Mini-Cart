import React, { useEffect } from "react";

import { GrFormClose } from "react-icons/gr";
import { CartState } from "../context/CartContext";

import "./filters.scss";
import Rating from "./rating";

const Filters = () => {
  const {
    filterState: { byRating },
    filterDispatch,
  } = CartState();

  useEffect(() => {
    const selectedRating = JSON.parse(localStorage.getItem("rating"));
    filterDispatch({ type: "RATING", payload: selectedRating });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter__form">
        <div>
          <input
            type="radio"
            label="ascending"
            name="group1"
            onChange={() => filterDispatch({ type: "SORT_LOW_TO_HIGH" })}
          />
          <label>Price Low To High</label>
        </div>
        <div>
          <input
            type="radio"
            label="descending"
            name="group1"
            onChange={() => filterDispatch({ type: "SORT_HIGH_TO_LOW" })}
          />
          <label>Price High To Low</label>
        </div>
        <div className="desktop-filters">
          <input
            type="checkbox"
            label="men's Clothing"
            onChange={() => filterDispatch({ type: "MENS_CLOTHING" })}
          />
          <label>Men's Clothing</label>
        </div>
        <div className="desktop-filters">
          <input
            type="checkbox"
            label="women's Clothing"
            onChange={() => filterDispatch({ type: "WOMENS_CLOTHING" })}
          />
          <label>Women's Clothing</label>
        </div>
        <div className="desktop-filters">
          <input
            type="checkbox"
            label="electronics"
            onChange={() => filterDispatch({ type: "WOMENS_CLOTHING" })}
          />
          <label>Electronics</label>
        </div>
        <div className="desktop-filters">
          <input
            type="checkbox"
            label="jewelery"
            onChange={() => filterDispatch({ type: "WOMENS_CLOTHING" })}
          />
          <label>Jewelery</label>
        </div>
        <div className="desktop-filters rating">
          <label style={{ marginRight: "1rem" }}>Rating</label>
          <Rating
            rating={byRating}
            onClick={(i) => {
              filterDispatch({ type: "RATING", payload: i });
            }}
          />
        </div>
        <button onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}>
          Clear All <GrFormClose />
        </button>
      </div>
    </div>
  );
};

export default Filters;
