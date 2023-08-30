import React from "react";
import "./Navigation.css";
import accountIcon from "../../images/account_icon.svg";

import { Link, NavLink } from "react-router-dom";

function Navigation({ handleClose }) {
  const activeLinkClass = ({ isActive }) =>
    `link navigation__link ${isActive ? "navigation__link_active" : ""}`;
  return (
    <>
      <nav className="navigation__links-container">
        <button className="navigation__close-button" onClick={handleClose} />
        <NavLink to="/" className={activeLinkClass}>
          Главная
        </NavLink>
        <NavLink to="/movies" replace className={activeLinkClass}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={activeLinkClass}>
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link to="/profile" className="navigation__link link">
        <nav className="navigation__button-container">
          <p className="navigation__button">Аккаунт</p>
          <img
            className="navigation__account-icon"
            src={accountIcon}
            alt="иконка аккаунта"
          ></img>
        </nav>
      </Link>
    </>
  );
}

export default Navigation;
