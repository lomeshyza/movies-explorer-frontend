import '../Profile/Profile.css';
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile({formTitle,buttonTitle,formText,formLink,formLinkText,onLogout}) {
  
  return (
    <><Header/>
    <div className="profile">
          
          <div className="form">
<div className="form__container">
    <h2 className="form__header">{formTitle}</h2>
    <form type="submit" className="form__form">
    <label className="form__field-name">Имя
            <input className="form__input" placeholder="Имя"></input>
            <span className="form__input-error">err</span>
        </label>
        <label className="form__field-name">E-mail
            <input className="form__input" placeholder="E-mail"></input>
            <span className="form__input-error">err</span>
        </label>
        <button className="form__button form__button-profile" type='submit' onClick={onLogout}>{buttonTitle}</button>
        
    </form>
    <p className="form__text">{formText}
    <Link className='form__link' to={formLink}>{formLinkText}</Link>
    </p>
    </div>
</div>

        </div>
    </>
        
  );
}

export default Profile;