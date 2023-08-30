import "./MoviesCard.css";
import { useLocation, Link } from "react-router-dom";

function MoviesCard({
  card,
  onCardDelete,
  savedMovies,
  onCardSave,
  saved,
  isSaved,
}) {
  const location = useLocation();

  const cardSaveButtonClass = `${
    saved ? "moviesCard__saved button" : "moviesCard__save button"
  }`;
  function timeConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
  }
  function onDelete() {
    onCardDelete(card);
  }

  function onClick() {
    console.log(saved);
    saved
      ? onCardDelete(
          savedMovies.filter((movie) => movie.movieId === card.id)[0]
        )
      : onCardSave(card);
  }

  return (
    <li className="moviesCard">
      <Link to={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="moviesCard__image"
          alt="обложка"
          src={
            isSaved
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </Link>

      {location.pathname === "/movies" && (
        <button
          className={cardSaveButtonClass}
          type="button"
          onClick={onClick}
        ></button>
      )}
      {location.pathname === "/saved-movies" && (
        <button
          className="moviesCard__delete button"
          type="button"
          onClick={onDelete}
        ></button>
      )}
      <div className="moviesCard__container">
        <h2 className="moviesCard__name">{card.nameRU}</h2>
        <p className="moviesCard__duration">{timeConverter(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
