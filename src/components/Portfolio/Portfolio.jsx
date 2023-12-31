import "./Portfolio.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";
import AboutMe from "../AboutMe/AboutMe";

import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="landing" id="me">
      <LandingHeader LandingHeaderText={"Студент"} />
      <div className="portfolio">
        <AboutMe />
        <h2 className="portfolio__links-header">Портфолио</h2>
        <div className="portfolio__links">
          <Link
            to="https://lomeshyza.github.io/how-to-learn/"
            target="_blank"
            className="portfolio__link link"
          >
            Статичный сайт
            <div className="portfolio__link-button">↗</div>
          </Link>

          <Link
            to="https://lomeshyza.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link link"
          >
            Адаптивный сайт
            <div className="portfolio__link-button">↗</div>
          </Link>

          <Link
            to="https://starts.mesto.nomoreparties.sbs"
            target="_blank"
            className="portfolio__link link"
          >
            Одностраничное приложение
            <div className="portfolio__link-button">↗</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
