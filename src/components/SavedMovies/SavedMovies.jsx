import "../SavedMovies/SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
//import { mainApi } from "../../utils/MainApi";
import {SHORT} from '../../utils/constants';

function SavedMovies({
  loggedIn, onCardDelete,  onCardSave, savedMovies, isLoading, requestError
}) {
  //console.log(`savedMovies: ${JSON.stringify(savedMovies)}`);
  //const [allMoviesSaved, setAllMoviesSaved] = useState(savedMovies);
  //const [isLoadingSaved, setisLoadingSaved] = useState(false);
  const [notFound, setNotFound] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [short, setShort] = useState(false);
  const [query, setQuery] = useState("");
  const [noQuery, setNoQuery] = useState(false)
  const [errorMessage, setErrorMessage]=useState('');
  const [submit, setSubmit] = useState(false);
// Чекбокс
function handleCheckboxChange(short) {
  setShort(short);
}
// Запрос
function handleSearch(query) {
  setQuery(query);
  if(query.length===0){setNoQuery(true);
    console.log(noQuery);
    } else{
      setNoQuery(false);
    }
}
// submit
function handleSearchMovies(query){
  setQuery(query);
  handleFiltering(savedMovies,query,short);
  }

//фильтр
function handleFiltering(movies,query,short) {
  setFilteredMovies(movies.filter((movie) => {
     const searchedName =
       movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
       movie.nameEN.toLowerCase().includes(query.toLowerCase());
     console.log(`short: ${short}`);
     return short ? searchedName && movie.duration <= SHORT : searchedName;
   }))
}
useEffect(() => {
  localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
  if (!query&&submit) {
    setNoQuery(true);
    setNotFound(false);
  } else{
    if (filteredMovies.length === 0) {
      setNoQuery(false);
      setNotFound(true);
    } else {
      setNoQuery(false);
      setNotFound(false);
    }
  } 
}, [filteredMovies]);

useEffect(() =>{
  handleFiltering(savedMovies,query,short);
  
},[savedMovies, query,short])

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
         short={short}
         query={query}
         onSearch={handleSearch}
         onCheck={handleCheckboxChange}
         onSearchMovies={handleSearchMovies}
         requestError={requestError}
         errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setSubmit={setSubmit}
        />
        { !requestError
        ? ( 
          <MoviesCardList
          movies={filteredMovies}
          onCardDelete={onCardDelete}
          onCardSave={onCardSave}
          isLoading={isLoading}
          savedMovies={savedMovies}
          isSaved={true}
          notFound={notFound}
          requestError={requestError}
          
          noQuery={noQuery}
          submit={submit}
          />
       ) : ''}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
