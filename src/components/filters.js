import React, { useState } from "react";

import { GrFormClose } from "react-icons/gr";

import "./filters.scss";
import Rating from "./rating";

const Filters = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter__form">
        <div>
          <input type="radio" label="ascending" name="group1" />
          <label>Price Low To High</label>
        </div>
        <div>
          <input type="radio" label="descending" name="group1" />
          <label>Price High To Low</label>
        </div>
        <div className="desktop-filters">
          <input type="checkbox" label="men's Clothing" />
          <label>Men's Clothing</label>
        </div>
        <div className="desktop-filters">
          <input type="checkbox" label="women's Clothing" />
          <label>Women's Clothing</label>
        </div>
        <div className="desktop-filters">
          <input type="checkbox" label="electronics" />
          <label>Electronics</label>
        </div>
        <div className="desktop-filters">
          <input type="checkbox" label="jewelery" />
          <label>Jewelery</label>
        </div>
        <div className="desktop-filters rating">
          <label style={{ marginRight: "1rem" }}>Rating</label>
          <Rating rating={rate} onClick={setRate} />
        </div>
        <button>
          Clear All <GrFormClose />
        </button>
      </div>
    </div>
  );
};

export default Filters;
