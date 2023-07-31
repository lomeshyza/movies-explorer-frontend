import '../Profile/Profile.css';
import Header from "../Header/Header";

import { Link } from "react-router-dom";

function Profile({formTitle,buttonTitle,formLink,formLinkText,onLogout, loggedIn}) {
  
  return (
    <>
    <Header loggedIn={loggedIn}/>
    <div className="profile">
          
<div className="profile__container">
    <h2 className="profile__header">{formTitle}</h2>
    <form type="submit" className="profile__form">
      <fieldset className='profile__fieldset'>
      <div className='profile__form-container'>
        <label className="profile__field-name">Имя</label>
        <input className="profile__input" placeholder="Имя" value="Виталий" type="text" minLength="2" maxLength="30" required></input>
      </div>
      
      <div className='profile__form-container'>
        <label className="profile__field-name">E-mail</label>
        <input className="profile__input" placeholder="E-mail" value="mail@yandex.ru" type="email" minLength="2" maxLength="30" required></input>
        
      </div>
      </fieldset>
           
      <button className="button profile__button" type='submit' onClick={onLogout}>{buttonTitle}</button>
        
    </form>
    <Link className='form__link link' to={formLink}>{formLinkText}</Link>
    </div>
</div>

      
    </>
        
  );
}

export default Profile;