import "./Portfolio.css";
import "../Landing/Landing.css";
import LandingHeader from "../LandingHeader/LandingHeader";
import portfolioPic from "../../images/portfolio_pic.svg"

function Portfolio({}) {
  return (
    <div className="landing__container">
      
        <LandingHeader LandingHeaderText={"Студент"} />
        <div className="portfolio__container">
          <div className="portfolio__about">
           <div className="portfolio__column">
            <h2 className="portfolio__name">Виталий</h2>
            <h3 className="portfolio__job">Фронтенд-разработчик, 30 лет</h3>
            <p className="portfolio__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». 
            После того, как прошёл курс по веб-разработке, начал заниматься 
            фриланс-заказами и ушёл с постоянной работы.
            </p>
            <p className="portfolio__git">Github</p>
            </div>
            <img className="portfolio__picture" src={portfolioPic} alt="Портрет студента"></img>
           </div>
           <h2 className="portfolio__links-header">Портфолио</h2>
           <div className="portfolio__links">
            <h3 className="portfolio__link">Статичный сайт</h3>
            <div className="portfolio__link-button">↗</div>
            <h3 className="portfolio__link">Адаптивный сайт</h3>
            <div className="portfolio__link-button">↗</div>
            <h3 className="portfolio__link">Одностраничное приложение</h3>
            
            
            <div className="portfolio__link-button">↗</div>
           </div>
      </div>
    </div>
  );
}

export default Portfolio;
