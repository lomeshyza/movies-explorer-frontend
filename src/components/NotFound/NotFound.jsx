import "../NotFound/NotFound.css";
import { useNavigate} from "react-router-dom";

function NotFound() {
  const navigate=useNavigate();
  return (
    <section div className="notFound">
      <h2 className="notFound__header">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      <button className="notFound__button button" onClick={()=>{navigate(-1)}}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
