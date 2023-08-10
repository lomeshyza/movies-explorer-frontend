import "./FormElement.css";
import headerLogo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

function FormElement({
  formTitle,
  children,
  buttonTitle,
  formText,
  formLink,
  formLinkText,
  onSubmit,
}) {
  return (
    <section className="form">
      <div className="form__container">
      <NavLink to='/'>
        <img className="form__logo link" src={headerLogo} alt="Логотип" />
      </NavLink>
        <h2 className="form__header">{formTitle}</h2>
        <form type="submit" className="form__form" onSubmit={onSubmit}>
          <div className="form__input-container">{children}</div>
          <button className="form__button button" type="submit">
            {buttonTitle}
          </button>
        </form>
        <p className="form__text">
          {formText}
          <Link className="form__link link" to={formLink}>
            {formLinkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default FormElement;
