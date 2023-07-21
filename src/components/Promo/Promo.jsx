import './Promo.css';
import promoPicture from "../../images/planet.png"; 
import NavTab from '../NavTab/NavTab';

function Promo({}) {
    return (
      <div className="promo">
        <div className='promo__group'>
          <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя..</h2>
          <NavTab/>
        </div>
        
        <img className="promo__picture" src={promoPicture} alt="Планета" />
      </div>
    );
  }
  
  export default Promo;