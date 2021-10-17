import React from "react";

import { GrFormClose } from "react-icons/gr";

import "./filters.scss";

const Filters = () => {
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
        <div>
          <input type="checkbox" label="men's Clothing" />
          <label>Men's Clothing</label>
        </div>
        <div>
          <input type="checkbox" label="women's Clothing" />
          <label>Women's Clothing</label>
        </div>
        <div>
          <input type="checkbox" label="electronics" />
          <label>Electronics</label>
        </div>
        <div>
          <input type="checkbox" label="jewelery" />
          <label>Jewelery</label>
        </div>
        <button>
          Clear All <GrFormClose />
        </button>
      </div>
    </div>
  );
};

export default Filters;
