import React, { useState } from "react";

import { BsCartDash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import useOnClickOutside from "../hooks/useOnClickOutside";

import { CartState } from "../context/CartContext";

import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  const {
    state: { cart },
    filterState: { searchQuery },
    filterDispatch,
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
            onChange={(e) =>
              filterDispatch({
                type: "SEARCH_PRODUCT",
                payload: e.target.value,
              })
            }
            value={searchQuery}
            id="searchfield"
          />
          {searchQuery.length > 0 && (
            <GrFormClose
              onClick={() =>
                filterDispatch({
                  type: "SEARCH_PRODUCT",
                  payload: "",
                })
              }
              className="header__search__empty"
            />
          )}
        </div>

        <div className="header__cart" ref={ref}>
          <BsCartDash
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          />
          <span>
            <p>{cart.length}</p>
          </span>

          {isOpen && (
            <div className="header__cart__preview">
              <div className="header__cart__preview__label">
                <h4>Picture</h4>
                <h4>Price</h4>
                <h4>Id</h4>
              </div>
              {cart.length === 0
                ? "No items in cart"
                : cart.map((item, i) => (
                    <div className="preview-cart" key={i}>
                      <img src={item.image} alt={item.title} />
                      <p>${item.price}</p>
                      <p>{item.id}</p>
                    </div>
                  ))}
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
