import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header class="header" id="header">
        <div class="sale-nav">
          <p>
            30% Off storewide - Limited time!
            <span>
              Shop Now <i class="ri-arrow-right-line"></i>
            </span>
          </p>
        </div>
        <div
          class="main-header"
          style={{
            backgroundColor:
              location.pathname === "/product" ? "while" : "#ecbc52",
          }}
        >
          <a href="/" class="logo">
            3legent
          </a>

          <ul class="navlist">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="#shop-collection">Shop</a>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/product">Contact Us</NavLink>
            </li>
          </ul>

          <div class="right-header">
            <a href="/">
              <i class="ri-search-line"></i>
            </a>
            <a href="/">
              <i class="ri-account-circle-line"></i>
            </a>
            <a href="/">
              <i class="ri-shopping-cart-fill"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
