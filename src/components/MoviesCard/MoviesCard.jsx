import "./MoviesCard.css";


function MoviesCard({cardName, cardUrl}) {
  return (
    <div className="moviesCard">
        <img className="moviesCard__image" alt="#" src={cardUrl}/>
        <div className="moviesCard__container">
          <h2 className="moviesCard__name">{cardName}</h2>
          <p className='moviesCard__duration'>duration</p>
        </div>  
    </div>
  );
}

export default MoviesCard;
