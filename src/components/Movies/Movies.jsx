import '../Movies/Movies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';

function Movies({loggedIn, cards}) {
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <div className="movies">
          
          <SearchForm/>
          <MoviesCardList cards={cards}/>
          <Footer/>
        </div>
        
    </>
        
  );
}

export default Movies;