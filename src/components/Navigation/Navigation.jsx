import React from "react";
import "./Navigation.css";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation__links-container">
        <Link to="/movies" className="navigation__link navigation__link-active">Фильмы</Link>
        <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
    </div>
  );
}

export default Navigation;