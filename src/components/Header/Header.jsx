import React, { useState }  from "react";
import headerLogo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import "./Header.css";
import { NavLink , Link} from "react-router-dom";
import accountIcon from "../../images/account_icon.svg";

function Header({loggedIn}) {
  const headerColorClass = (`header ${loggedIn ? 'header_loggedIn' : 'header'}`);
  const activeLinkClass = ({ isActive }) =>
    `link header__link ${isActive ? "header__link_active" : ""}`;

    const [isClicked, setIsClicked] = useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }
  return (
    <section className={headerColorClass}>
      <NavLink to='/'>
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </NavLink>
      <>
      {loggedIn ? (
        <>
          <nav className="header__links-container">
            
            <NavLink to="/movies" className={activeLinkClass}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={activeLinkClass}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <nav className="header__button-container">
            <Link to="/profile" className="header__button link">
              Аккаунт
            </Link>
            <img
              className="header__account-icon"
              src={accountIcon}
              alt="иконка аккаунта"
            ></img>
          </nav>
          <button className="menu__button" onClick={handleOpen}></button>
        </>
      ) : (
        <nav className="header__container">
          <Link to="/signup" className="header__button link">
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="header__button header__button-active link"
          >
            Войти
          </Link>
        </nav>
      )}
    </>
      {/* <BurgerMenu loggedIn={loggedIn}/>
      <Navigation loggedIn={loggedIn} /> */}
{isClicked ? <BurgerMenu handleClose={handleClose} /> : ''}
    </section>
  );
}

export default Header;
