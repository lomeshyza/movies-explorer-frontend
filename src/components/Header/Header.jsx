import React from "react";
import headerLogo from "../../images/logo.svg";

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, Routes, Route } from "react-router-dom";

function Header({loggedIn}) {
  const headerColorClass = (`header ${loggedIn ? 'header_loggedIn' : 'header'}`);
  return (
    <header className={headerColorClass}>
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <Navigation loggedIn={loggedIn} />
      {/* <Routes>
        <Route path="/" element={
            <div className="header__container">
              <Link to="/signup" className="header__button link">Регистрация</Link>
              <Link to="/signin" className="header__button header__button-active link">Войти</Link>
            </div>
          }
        ></Route>
        <Route path="/movies" element={
          <div className='header__container'>
            <Navigation/>
            <div className="header__button-container">
              <Link to="/profile" className="header__button link">Аккаунт</Link>
              <img className="header__account-icon" src={accountIcon} alt="#"></img>
            </div>
          </div>
          
          }
        ></Route>
        <Route path="/profile" element={
          <div className='header__container'>
            <Navigation/>
            <div className="header__button-container">
              <Link to="/profile" className="header__button">Аккаунт</Link>
              <img className="header__account-icon" src={accountIcon} alt="#"></img>
            </div>
          </div>
          
          }
        ></Route>
      </Routes> */}
    </header>
  );
}

export default Header;
