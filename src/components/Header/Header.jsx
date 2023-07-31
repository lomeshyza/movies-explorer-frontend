import React, { useState }  from "react";
import headerLogo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import "./Header.css";
import Navigation from "../Navigation/Navigation";
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
      <button className="menu__button" onClick={handleOpen}></button>

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
              alt="#"
            ></img>
          </nav>
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