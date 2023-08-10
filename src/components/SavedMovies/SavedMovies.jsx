import "../SavedMovies/SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

function SavedMovies({ loggedIn, cards }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="savedMovies">
        <SearchForm />
        <div className="moviesCardList">
          <ul className="moviesCardList__list">
            {cards.map((card) =>
              card.saved ? (
                <MoviesCard
                  cardName={card.name}
                  cardUrl={card.url}
                  key={card._id}
                  saved={card.saved}
                />
              ) : (
                ""
              )
            )}
          </ul>
          <div className="moviesCardList__button-container"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
