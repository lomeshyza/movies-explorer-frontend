import "./AboutMe.css";
import portfolioPic from "../../images/portfolio_pic.svg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    
      <section className="about">
        <div className="about__column">
          <h2 className="about__name">Виталий</h2>
          <h3 className="about__job">Фронтенд-разработчик, 30 лет</h3>
          <p className="about__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            to="https://github.com/lomeshyza?tab=repositories"
            target="_blank"
            className="about__git link"
          >
            Github
          </Link>
        </div>
        <img
          className="about__picture"
          src={portfolioPic}
          alt="Портрет студента"
        ></img>
      </section>

  );
}
export default AboutMe;
