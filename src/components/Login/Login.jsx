import "./Login.css";
import FormElement from "../FormElement/FormElement";
import React from "react";
import {REGEX_EMAIL} from '../../utils/constants';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';

function Login({onLogin,errorMessage}) {
  const{values, handleChange,errors, isValid, resetForm} = useFormAndValidation();
   
const handleSubmit=(evt)=>{
  evt.preventDefault();
  console.log(isValid)
  if(isValid){
    const {email, password}=values;
    onLogin(email, password);
    }
    resetForm();
  }
  return (
    <FormElement
      formTitle="Рады видеть!"
      buttonTitle="Войти"
      formText="Ещё не зарегистрированы?"
      formLink="/signup"
      formLinkText="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
      errorMessage={errorMessage}
    >
      <label className="form__field-name">
        E-mail
        <input
          name='email'
          className="form__input"
          placeholder="E-mail"
          type="email"
          required
          value={values.email}
          pattern={REGEX_EMAIL}
          onChange={handleChange}
        ></input>
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__field-name">
        Пароль
        <input
        name= 'password'
          className={errorMessage? "form__input form__input-invalid": 'form__input'}
          placeholder="Пароль"
          type="password"
          minLength="6"
          maxLength="30"
          required
          value={values.password}
          onChange={handleChange}
        ></input>
        <span className="form__input-error">{errors.password}</span>
      </label>
    </FormElement>
  );
}

export default Login;
