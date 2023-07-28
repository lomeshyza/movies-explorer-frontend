import "./FormElement.css";
import headerLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function FormElement({formTitle, children, buttonTitle, formText, formLink, formLinkText, onSubmit}) {
  return (
<div className="form">
<div className="form__container">
    <img className="form__logo" src={headerLogo} alt="Логотип" />
    <h2 className="form__header">{formTitle}</h2>
    <form type="submit" className="form__form" onSubmit={onSubmit}>
        {children}
        <button className="form__button" type='submit'>{buttonTitle}</button>
        
    </form>
    <p className="form__text">{formText}
    <Link className='form__link link' to={formLink}>{formLinkText}</Link>
    </p>
    </div>
</div>

  );
}

export default FormElement;