import React, { useState } from "react";

import { BsCartDash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import { CartState } from "../context/CartContext";

import "./header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { cart },
  } = CartState();

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
            <p>{cart.length}</p>
          </span>

          {isOpen && (
            <div className="header__cart__preview">
              No Items in Cart
              <div className="cart-link">
                <Link onClick={() => setIsOpen(false)} to="/cart">
                  Go to Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
