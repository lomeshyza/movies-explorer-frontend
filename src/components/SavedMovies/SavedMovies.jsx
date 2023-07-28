import '../SavedMovies/SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({loggedIn}) {
  return (
        <div className="savedMovies">
          <Header loggedIn={loggedIn}/>
          <SearchForm/>
          <MoviesCardList/>
        </div>
  );
}

export default SavedMovies;