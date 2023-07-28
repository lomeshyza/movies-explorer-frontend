//import logo from './logo.svg';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogin(){
    console.log(loggedIn);
    setLoggedIn(true);
    navigate("/");
    
  }
  function handleLogout(){
    console.log(loggedIn);
    setLoggedIn(false);
    /* navigate("/signin"); */
    
  }

  return (
    <div className="App">
    
      <Routes>
        <Route path="/signup" element={<Register formTitle='Добро пожаловать!' buttonTitle='Зарегистрироваться' 
          formText='Уже зарегистрированы?' formLink="/signin" formLinkText='Войти'  />}/>
        <Route path="/signin" element={<Login formTitle='Рады видеть!' buttonTitle='Войти' 
          formText='Ещё не зарегистрированы?' formLink="/signup" formLinkText='Регистрация' onLogin={handleLogin}/>}/>
        <Route path="/profile" element={<Profile loggedIn={loggedIn} formTitle='Привет, Виталий!' buttonTitle='Редактировать' 
          formText='' formLink="/signin" formLinkText='Выйти из аккаунта' onLogout={handleLogout}/>}/>
        <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>}/>
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="*" element={loggedIn ? (<Navigate to="/notfound"/>
                ) : (<Navigate to="/signup" />)}/>
      </Routes>
           
     
    </div>
  );
}

export default App;