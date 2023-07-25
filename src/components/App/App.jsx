//import logo from './logo.svg';
import '../App/App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/saved-movies" element={<SavedMovies/>}/>

      </Routes>
           
      <Footer/>
    </div>
  );
}

export default App;