import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';


function MoviesCard({cardName, cardUrl, key, saved}) {
  const location = useLocation();

  const cardSaveButtonClass = `${
    saved ? 'moviesCard__saved button' : 'moviesCard__save'
  }`;

  return (
    <div className="moviesCard">
        <img className="moviesCard__image" alt="обложка" src={cardUrl}/>
        {/* <button className="moviesCard__save"></button> */}
        {/* <button className="moviesCard__saved button" type="button"></button>
        <button className="moviesCard__delete button" type="button"></button> */}
        {(location.pathname === '/movies') && <button className={cardSaveButtonClass} type="button"></button>}
        {(location.pathname === '/saved-movies') && <button className="moviesCard__delete button" type="button"></button>}
        <div className="moviesCard__container">
          <h2 className="moviesCard__name">{cardName}</h2>
          <p className='moviesCard__duration'>1ч 17м</p>
        </div>  
    </div>
  );
}

export default MoviesCard;
