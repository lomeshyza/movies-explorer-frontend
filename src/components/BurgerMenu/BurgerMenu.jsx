import React from "react";
import "./BurgerMenu.css";
import Navigation from "../Navigation/Navigation";

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
