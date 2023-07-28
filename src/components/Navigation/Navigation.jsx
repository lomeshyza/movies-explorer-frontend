import React from "react";
import "./Navigation.css";
import accountIcon from "../../images/account_icon.svg";

import { Link } from "react-router-dom";

function Navigation({loggedIn}) {
  return (<>
  {loggedIn ? (
      <>
      <nav className="navigation__links-container">
        <Link to="/movies" className="navigation__link navigation__link-active">Фильмы</Link>
        <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
      </nav>
      <nav className="header__button-container">
              <Link to="/profile" className="header__button link">Аккаунт</Link>
              <img className="header__account-icon" src={accountIcon} alt="#"></img>
      </nav>
            </>
    ) : (
      <nav className="header__container">
        <Link to="/signup" className="header__button link">Регистрация</Link>
        <Link to="/signin" className="header__button header__button-active link">Войти</Link>
      </nav>
)
    }
  </>
    
    
  );
}

export default Navigation;