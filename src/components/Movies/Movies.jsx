import '../Movies/Movies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';

function Movies({loggedIn}) {
  return (
        <div className="movies">
          <Header loggedIn={loggedIn}/>
          <SearchForm/>
          <MoviesCardList/>
          <Footer/>
        </div>
  );
}

export default Movies;