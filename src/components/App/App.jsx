import React, { useState, useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "../App/App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import * as Auth from "../../utils/Auth";
import { mainApi } from "../../utils/MainApi";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
      .then(([profileInfo, savedMovies]) => {
        setCurrentUser(profileInfo);
        setSavedMovies(savedMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [loggedIn]);

  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      Auth.checkToken(jwt)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }
  useEffect(() => {
    handleTokenCheck();
    navigate(path);
  }, []);

  useEffect(() => {
    setErrorMessage("");
    setSuccessMessage("");
    handleTokenCheck();
    console.log(path);
  }, [path]);

  function handleRegister(name, email, password) {
    setErrorMessage("");
    setIsLoading(true);
    Auth.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        navigate("/movies");
      })
      .catch((err) => {
        if (err.includes("409")) {
          setErrorMessage("Пользователь с таким email уже существует.");
        } else {
          console.log(err);
          setErrorMessage("При регистрации пользователя произошла ошибка.");
        }
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleLogin(email, password) {
    setErrorMessage("");
    Auth.login(email, password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", data.token);
          console.log(data.token);
          setCurrentUser(data);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.includes("401")) {
          setErrorMessage("Вы ввели неправильный логин или пароль.");
        } else if (err.includes("400")) {
          setErrorMessage(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        } else if (err.includes("403")) {
          setErrorMessage(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        } else {
          setErrorMessage("На сервере произошла ошибка.");
        }
        console.log(err);
      });
  }
  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }
  function handleUpdateUser(data) {
    setErrorMessage("");
    setSuccessMessage("");
    mainApi
      .updateUserInfo(data)
      .then((value) => {
        setErrorMessage("Изменения сохранены.");
        setCurrentUser(value);
      })
      .catch((err) => {
        if (err.includes("409")) {
          setErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setErrorMessage("При обновлении профиля произошла ошибка.");
        }
        console.log(err);
      })
      .finally(() => {});
  }
  function handleCardDelete(card) {
    console.log(card);
    setIsLoading(true);
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        const newCards = savedMovies.filter((movie) => movie._id !== card._id);
        setSavedMovies(newCards);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("На сервере произошла ошибка.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleCardSave(movie) {
    setIsLoading(true);
    console.log(movie);
    mainApi
      .saveCard(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login onLogin={handleLogin} errorMessage={errorMessage} />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                buttonTitle="Редактировать"
                onSubmit={handleUpdateUser}
                formLinkText="Выйти из аккаунта"
                onLogout={handleLogout}
                onUpdateUser={handleUpdateUser}
                errorMessage={errorMessage}
                successMessage={successMessage}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                onCardSave={handleCardSave}
                onCardDelete={handleCardDelete}
                isLoading={isLoading}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                onCardDelete={handleCardDelete}
                onCardSave={handleCardSave}
                savedMovies={savedMovies}
                isLoading={isLoading}
                requestError={errorMessage}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
