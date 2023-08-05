import React, { useState } from "react";
import '../App/App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import url from "../../images/бег_это_свобода.svg";

const cards = [
  {
    name: "33 слова о дизайне",
    url: url,
    saved: true,
  },
  {
    name: "Киноальманах «100 лет дизайна»",
    url: url,
    saved: true,
  },
  {
    name: "В погоне за Бенкси",
    url: url,
    saved: false,
  },
  {
    name: "Баския: Взрыв реальности",
    url: url,
    saved: false,
  },
  {
    name: "Бег это свобода",
    url: url,
    saved: false,
  },
  {
    name: "Книготорговцы",
    url: url,
    saved: true,
  },
  {
    name: "Когда я думаю о Германии ночью",
    url: url,
    saved: false,
  },
  {
    name: "Gimme Danger: История Игги и The Stooges",
    url: url,
    saved: false,
  },
  {
    name: "Дженис: Маленькая девочка грустит",
    url: url,
    saved: false,
  },
  {
    name: "Соберись перед прыжком",
    url: url,
    saved: false,
  },
  {
    name: "Пи Джей Харви: A dog called money",
    url: url,
    saved: false,
  },
  {
    name: "По волнам: Искусство звука в кино",
    url: url,
    saved: false,
  },
];
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  function handleLogin(){
    console.log(loggedIn);
    setLoggedIn(true);
    navigate("/");
  }
  function handleLogout(){
    console.log(loggedIn);
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Register formTitle='Добро пожаловать!' buttonTitle='Зарегистрироваться' 
          formText='Уже зарегистрированы?' formLink="/signin" formLinkText='Войти'  />}/>
        <Route path="/signin" element={<Login formTitle='Рады видеть!' buttonTitle='Войти' 
          formText='Ещё не зарегистрированы?' formLink="/signup" formLinkText='Регистрация' onLogin={handleLogin}/>}/>
        <Route path="/profile" element={<Profile loggedIn={loggedIn} formTitle='Привет, Виталий!' buttonTitle='Редактировать' 
         formLink="/signin" formLinkText='Выйти из аккаунта' onLogout={handleLogout}/>}/>
        <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
        <Route path="/movies" element={<Movies loggedIn={loggedIn} cards={cards}/>}/>
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} cards={cards}/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="*" element={loggedIn ? (<Navigate to="/notfound"/>
                ) : (<Navigate to="/signup" />)}/>
      </Routes>
    </div>
  );
}

export default App;