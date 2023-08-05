import "../NotFound/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section div className="notFound">
      <h2 className="notFound__header">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      <Link className="notFound__link link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
