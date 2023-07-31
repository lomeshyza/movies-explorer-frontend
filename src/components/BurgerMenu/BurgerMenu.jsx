import React from "react";
import "./BurgerMenu.css";
import accountIcon from "../../images/account_icon.svg";
import Navigation from "../Navigation/Navigation";

import { Link, NavLink } from "react-router-dom";

function BurgerMenu({handleClose}) {
  return (
    <div className="menu">
      <div className="blur"/>
      <div className="menu__content">
        
        <Navigation handleClose={handleClose} />
      </div>
    </div>
  );
}
export default BurgerMenu;
