import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { itemsCountSelector } from './../../../redux/selectors/cart-selectors';

export const HeaderNav = () => {
  const itemsCount = useSelector(itemsCountSelector);
  return (
    <nav className="header-nav">
      <NavLink to="/cart">
        <div className="cartIcon">
          <img src="assets/img/header/cart.png" />
          <div className="itemsInCart">{itemsCount}</div>
        </div>
      </NavLink>
    </nav>
  );
};
