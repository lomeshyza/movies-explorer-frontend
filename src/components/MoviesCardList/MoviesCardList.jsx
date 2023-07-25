import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

/* import cardUrl from '../../images/pic__COLOR_pic.svg';
const cardName='33 слова о дизайне'; */


function MoviesCardList() {
  return (
    <div className="moviesCardList">
        <ul className="moviesCardList__list">
          {cards.map((card) => (
           <MoviesCard cardName={card.name} cardUrl={card.url} key={card._id}/> 
          ))}
        {/* <MoviesCard cardName={cardName} cardUrl={cardUrl}/> */}
    </ul>
    <div className="moviesCardList__button-container">
    <button className="moviesCardList__button">Ещё</button>
    {/* {cards.length > shownMovies ? (<button className="cards__button">Ещё</button>) : ('')} */}
  </div>
 
    </div>
  );  
}

const cards = [
    {
        name:'33 слова о дизайне',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Киноальманах «100 лет дизайна»',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'В погоне за Бенкси',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },{
        name:'Баския: Взрыв реальности',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Бег это свобода',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Книготорговцы',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },{
        name:'Когда я думаю о Германии ночью',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Gimme Danger: История Игги и The Stooges',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Дженис: Маленькая девочка грустит',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },{
        name:'Соберись перед прыжком',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'Пи Джей Харви: A dog called money',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },
    {
        name:'По волнам: Искусство звука в кино',
        url:'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80'
    },

]
console.log(cards);
export default MoviesCardList;