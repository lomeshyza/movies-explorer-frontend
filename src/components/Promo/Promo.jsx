import './Promo.css';
import promoPicture from "../../images/planet.svg"; 
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
      <section className="promo" >
        <div className='promo__group'>
          <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя..</p>
          <NavTab/>
        </div>
        <img className="promo__picture" src={promoPicture} alt="Планета" />
      </section>
    );
  }
  
  export default Promo;