import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copiright">© 2023</p>
        <div className="footer__links">
          <Link
            to="https://practicum.yandex.ru"
            target="_blank"
            className="footer__link link"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/lomeshyza/movies-explorer-frontend/tree/level-2"
            target="_blank"
            className="footer__link link"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
