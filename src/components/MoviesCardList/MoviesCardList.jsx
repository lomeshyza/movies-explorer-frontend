import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import { SHOW_MORE_S, SHOW_MORE_M } from "../../utils/constants";

function MoviesCardList({
  movies,
  isLoading,
  onCardDelete,
  onCardSave,
  savedMovies,
  isSaved,
  notFound,
  requestError,
  searchOk,
  noQuery,
  submit,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const location = useLocation();

  function getSavedCard(savedMovies, movie) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  }

  function handleLoadMore() {
    const screen = window.innerWidth;
    if (screen < 768) {
      setShownMovies(shownMovies + SHOW_MORE_S);
    } else if (screen > 768) {
      setShownMovies(shownMovies + SHOW_MORE_M);
    }
  }

  function shownCount() {
    const screen = window.innerWidth;
    if (screen < 400) {
      setShownMovies(5);
    } else if (screen < 768) {
      setShownMovies(8);
    } else if (screen > 768) {
      setShownMovies(12);
    }
  }
  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCount);
    }, 300);
  });

  return (
    <div className="moviesCardList">
      {isLoading && <Preloader />}
      {!notFound && !isLoading && noQuery && submit && (
        <p className="moviesCardList__notFound">Нужно ввести ключевое слово</p>
      )}
      {notFound && !isLoading && !noQuery && (
        <p className="moviesCardList__notFound">Ничего не найдено</p>
      )}
      {requestError && (
        <p className="moviesCardList__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      {!requestError && !isLoading && !notFound && !noQuery && (
        <ul className="moviesCardList__list">
          {movies.slice(0, shownMovies).map((movie) => (
            <MoviesCard
              onCardDelete={onCardDelete}
              onCardSave={onCardSave}
              key={isSaved ? movie._id : movie.id}
              card={movie}
              saved={getSavedCard(savedMovies, movie)}
              isSaved={isSaved}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
      )}

      {location.pathname === "/movies" &&
        !requestError &&
        !isLoading &&
        !notFound &&
        !noQuery && (
          <div className="moviesCardList__button-container">
            {movies.length > shownMovies ? (
              <button
                className="moviesCardList__button button"
                onClick={handleLoadMore}
              >
                Ещё
              </button>
            ) : (
              ""
            )}
          </div>
        )}
    </div>
  );
}

export default MoviesCardList;
