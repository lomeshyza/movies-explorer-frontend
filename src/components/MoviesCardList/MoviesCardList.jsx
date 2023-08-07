import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({cards}) {
  return (
    <div className="moviesCardList">
      <ul className="moviesCardList__list">
        {cards.map((card) => (
          <MoviesCard
            cardName={card.name}
            cardUrl={card.url}
            key={card._id}
            saved={card.saved}
          />
        ))}
      </ul>
      <div className="moviesCardList__button-container">
        <button className="moviesCardList__button button">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
