//import logo from './logo.svg';
import '../App/App.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;