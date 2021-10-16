import React, { useState } from "react";

import { BsCartDash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

import "./header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <span className="header__logo">Mini Cart</span>

        <div className="header__search">
          <FiSearch className="header__search__icon" />
          <input
            type="text"
            placeholder="Search a Product"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search.length > 0 && (
            <GrFormClose
              onClick={() => setSearch("")}
              className="header__search__empty"
            />
          )}
        </div>

        <div className="header__cart">
          <BsCartDash
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          />
          <span>
            <p>0</p>
          </span>

          {isOpen && (
            <div className="header__cart__preview">No Items in Cart</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
