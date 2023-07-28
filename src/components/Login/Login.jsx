import "./Login.css";
import FormElement from "../FormElement/FormElement";

function Login({formTitle, buttonTitle,formText, formLink, formLinkText, onLogin}) {
  
  return (
    <FormElement formTitle={formTitle} buttonTitle={buttonTitle} formText={formText} formLink={formLink} formLinkText={formLinkText} onSubmit={onLogin}>

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

export default Login;