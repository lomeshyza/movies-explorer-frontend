import "../Movies/Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { SHORT } from "../../utils/constants";

function Movies({ loggedIn, onCardDelete, savedMovies, onCardSave }) {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );
  const [short, setShort] = useState(
    JSON.parse(localStorage.getItem("short")) || false
  );
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [requestError, setRequestError] = useState(false);
  const [noQuery, setNoQuery] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [submit, setSubmit] = useState(false);
  // Чекбокс
  function handleCheckboxChange(short) {
    setShort(short);
    handleFiltering(allMovies, query, short);
  }
  // Запрос
  function handleSearch(query) {
    setQuery(query);
  }
  //фильтр
  function handleFiltering(movies, query, short) {
    const moviesToShow = movies.filter((movie) => {
      const searchedName =
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase());
      return short ? searchedName && movie.duration <= SHORT : searchedName;
    });
    console.log(moviesToShow);
    setFilteredMovies(moviesToShow);
    
  }
  // submit поиска
  function handleSearchMovies(query) {
    localStorage.setItem("query", query);
    

    if (allMovies.length === 0 && query.length !== 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((cardsData) => {
          setAllMovies(cardsData);
          localStorage.setItem("allMovies", JSON.stringify(cardsData));
          handleFiltering(cardsData, query, short);
          setRequestError(false);
          setIsLoading(false);
        })
        .catch((err) => {
          setRequestError(true);
          console.log(err);
          setIsLoading(false);
        });
    } else {
      handleFiltering(allMovies, query, short);
      setRequestError(false);
    }
  }
  
  // отрисовка до поиска
  useEffect(() => {
   
    const prevSearchedMovies = localStorage.getItem("filteredMovies");
    const prevQuery = localStorage.getItem("query");
    if (JSON.parse(prevSearchedMovies) > 0 && prevQuery) {
      setFilteredMovies(JSON.parse(prevSearchedMovies));
    } else {
      handleSearchMovies(query);
    }
    setNoQuery(false);
    setNotFound(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    if (!query) {
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
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
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
        {filteredMovies && !requestError ? (
          <MoviesCardList
            movies={filteredMovies}
            onCardDelete={onCardDelete}
            onCardSave={onCardSave}
            isLoading={isLoading}
            savedMovies={savedMovies}
            isSaved={false}
            notFound={notFound}
            requestError={requestError}
            
            noQuery={noQuery}
            submit={submit}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
