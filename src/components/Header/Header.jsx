import React from "react";
import headerLogo from "../../images/logo.svg";
import accountIcon from "../../images/account_icon.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, Routes, Route } from "react-router-dom";

function Header({ email, onLogout }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <Routes>
        <Route path="/" element={
            <div className="header__button-container">
              <Link to="/signup" className="header__button">Регистрация</Link>
              <Link to="/signin" className="header__button header__button-active">Войти</Link>
            </div>
          }
        ></Route>
        <Route path="/movies" element={
          <div className='header__container'>
            <Navigation/>
            <div className="header__button-container">
              <Link to="/profile" className="header__button">Аккаунт</Link>
              <img className="header__account-icon" src={accountIcon} alt="#"></img>
            </div>
          </div>
          
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
