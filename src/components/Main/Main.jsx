import '../Main/Main.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from '../Footer/Footer';

function Main({loggedIn}) {
  console.log(loggedIn);
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <main className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <Portfolio/>
    </main>
    <Footer/>
    </>
  );
}

export default Main;