import "../SavedMovies/SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
//import { mainApi } from "../../utils/MainApi";
import {SHORT} from '../../utils/constants';

function SavedMovies({
  loggedIn, onCardDelete,  onCardSave, savedMovies, isLoadingSaved, requestErrorSaved
}) {
  //console.log(`savedMovies: ${JSON.stringify(savedMovies)}`);
 //const [allMoviesSaved, setAllMoviesSaved] = useState(savedMovies);
  const [filteredMoviesSaved, setFilteredMoviesSaved] = useState(savedMovies);
  //const [requestErrorSaved, setRequestErrorSaved] = useState(false);
  const [shortSaved, setShortSaved] = useState(false);
  const [querySaved, setQuerySaved] = useState("");
  const [noQuerySaved, setNoQuerySaved] = useState(false)
 // const [isLoadingSaved, setisLoadingSaved] = useState(false);
  const [errorMessage, setErrorMessage]=useState('');

// Чекбокс
function handleCheckboxChange(short) {
  setShortSaved(short);
}
// Запрос
function handleSearch(query) {
  setQuerySaved(query);
  if(querySaved.length===0){setNoQuerySaved(true);
    console.log(noQuerySaved);
    } 
}
// submit
function handleSearchMovies(querySaved){
  setQuerySaved(querySaved);
  handleFiltering(savedMovies,querySaved,shortSaved);
  if(querySaved.length===0){
    setErrorMessage('Нужно ввести ключевое слово');
  }
  }

//фильтр
function handleFiltering(movies,query,short) {
  setFilteredMoviesSaved(movies.filter((movie) => {
     const searchedName =
       movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
       movie.nameEN.toLowerCase().includes(query.toLowerCase());
     console.log(`short: ${short}`);
     return short ? searchedName && movie.duration <= {SHORT} : searchedName;
   }))
}

useEffect(() =>{
  handleFiltering(savedMovies,querySaved,shortSaved);
  
},[savedMovies, querySaved,shortSaved])

/* useEffect(() => {
  setIsLoadingSaved(true);
mainApi
  .getMovies()
    .then((cardsData) => {
    
      setAllMoviesSaved(cardsData);
      //setFilteredMoviesSaved(cardsData)
     handleFiltering(cardsData,querySaved,shortSaved);
      setRequestErrorSaved(false);
    })
    .catch((err) => {
      setRequestErrorSaved(true);
      console.log(err);
    })
    .finally(() => {
      setIsLoadingSaved(false);
    });
}, []); */
/* useEffect(() => {
  const moviesList = handleFiltering(savedMovies, querySaved,shortSaved);
  setFilteredMoviesSaved(moviesList);
}, [savedMovies, shortSaved]); */

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="savedMovies">
        <SearchForm
         short={shortSaved}
         query={querySaved}
         onSearch={handleSearch}
         onCheck={handleCheckboxChange}
         onSearchMovies={handleSearchMovies}
         requestError={requestErrorSaved}
         errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        { filteredMoviesSaved && !requestErrorSaved
        ? ( 
          <MoviesCardList
          movies={filteredMoviesSaved}
          onCardDelete={onCardDelete}
          onCardSave={onCardSave}
          isLoading={isLoadingSaved}
          savedMovies={savedMovies}
          isSaved={true}
          notFound={filteredMoviesSaved.length === 0}
          requestError={requestErrorSaved}
          searchOk={filteredMoviesSaved > 0}
          noQuery={noQuerySaved}
          />
       ) : ''}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
