import "./Register.css";
import FormElement from "../FormElement/FormElement";

function Register({formTitle, buttonTitle,formText, formLink, formLinkText}) {
  return (
    <FormElement formTitle={formTitle} buttonTitle={buttonTitle} formText={formText} formLink={formLink} formLinkText={formLinkText}>

        <label className="form__field-name">Имя
            <input className="form__input" placeholder="Имя"></input>
            <span className="form__input-error">err</span>
        </label>
        <label className="form__field-name">E-mail
            <input className="form__input" placeholder="E-mail"></input>
            <span className="form__input-error">err</span>
        </label>
        <label className="form__field-name">Пароль
            <input className="form__input" placeholder="Пароль"></input>
            <span className="form__input-error">err</span>
        </label>
        
    </FormElement>

  );
}

export default Register;