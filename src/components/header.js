import React from "react";

import { BsCartDash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <span className="header__logo">Mini Cart</span>

        <div className="header__search">
          <FiSearch className="header__search__icon" />
          <input
            type="text"
            placeholder="Search a Product"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className="header__cart">
          <BsCartDash />
          <span>
            <p>2</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
