import "./Register.css";
import FormElement from "../FormElement/FormElement";

function Register({formTitle, buttonTitle,formText, formLink, formLinkText}) {
  return (
    <FormElement formTitle={formTitle} buttonTitle={buttonTitle} formText={formText} formLink={formLink} formLinkText={formLinkText}>

        <label className="form__field-name">Имя
            <input className="form__input" placeholder="Имя" type="text"
          minLength="2"
          maxLength="40"
          required></input>
            <span className="form__input-error"></span>
        </label>
        <label className="form__field-name">E-mail
            <input className="form__input" placeholder="E-mail" type="email"
        required></input>
            <span className="form__input-error"></span>
        </label>
        <label className="form__field-name">Пароль
            <input className="form__input" placeholder="Пароль" type="text"
          minLength="6"
          maxLength="30"
          required></input>
            <span className="form__input-error"></span>
        </label>
        
    </FormElement>

  );
}

export default Register;