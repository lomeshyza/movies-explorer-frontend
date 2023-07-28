import "./Portfolio.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";
import portfolioPic from "../../images/portfolio_pic.svg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="landing__container" id="me">
      <LandingHeader LandingHeaderText={"Студент"} />
      <div className="portfolio__container">
        <div className="portfolio__about">
          <div className="portfolio__column">
            <h2 className="portfolio__name">Виталий</h2>
            <h3 className="portfolio__job">Фронтенд-разработчик, 30 лет</h3>
            <p className="portfolio__paragraph">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              to="https://github.com/lomeshyza?tab=repositories"
              className="portfolio__git link"
            >
              Github
            </Link>
          </div>
          <img
            className="portfolio__picture"
            src={portfolioPic}
            alt="Портрет студента"
          ></img>
        </div>
        <h2 className="portfolio__links-header">Портфолио</h2>
        <div className="portfolio__links">
          <Link
            to="https://lomeshyza.github.io/how-to-learn/"
            className="portfolio__link link"
          >
            Статичный сайт
            <div className="portfolio__link-button">↗</div>
          </Link>
          
          <Link
            to="https://lomeshyza.github.io/russian-travel/"
            className="portfolio__link link"
          >
            Адаптивный сайт
            <div className="portfolio__link-button">↗</div>
          </Link>
        
          <Link
            to="https://starts.mesto.nomoreparties.sbs"
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
