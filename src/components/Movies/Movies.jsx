import "../Movies/Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ loggedIn, cards }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
