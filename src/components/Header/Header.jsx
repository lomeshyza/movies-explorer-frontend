import React from 'react';
import headerLogo from "../../images/logo.svg";  
import './Header.css';
//import { Link, Routes, Route } from 'react-router-dom';

function Header({email, onLogout}) {
    return (
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
        <div className='header__button-container'>
          <button className="header__button">Регистрация</button>
          <button className="header__button header__button-active">Войти</button>
        </div>
             
        {/* <Route path="/signin" element={
          <Link to='/signup' className="header__sign-link">Регистрация</Link>
        }>
        </Route>
        <Routes>
        <Route path="/signup" element={
          <Link to='/signin' className="header__sign-link">Войти</Link>
        }>
        </Route>
        
      </Routes> */}
      </header>
    );
  }
  
  export default Header;