import "../NotFound/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__header">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
        <Link className="notFound__link" to="/">
          Назад
        </Link>
      
    </div>
  );
}

export default NotFound;
