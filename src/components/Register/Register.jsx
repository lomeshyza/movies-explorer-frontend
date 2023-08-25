import "./Register.css";
import FormElement from "../FormElement/FormElement";
import React from "react";
import {REGEX_EMAIL,REGEX_NAME} from '../../utils/constants'
import {useFormAndValidation} from '../../hooks/useFormAndValidation';


function Register({onRegister, errorMessage}) {
  
  const{values, handleChange, isValid,errors,resetForm} = useFormAndValidation();

  
const handleSubmit=(evt)=>{
  evt.preventDefault();
  evt.stopPropagation()
  if(isValid){
    const {name, email, password}=values;
    onRegister(name, email, password);
    }
    resetForm();
}
  return (
    <FormElement
      formTitle="Добро пожаловать!"
      buttonTitle="Зарегистрироваться"
      formText="Уже зарегистрированы?"
      formLink="/signin"
      formLinkText="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
      errorMessage={errorMessage}
    >
      <label className="form__field-name">
        Имя
        <input
          name='name'
          className="form__input"
          placeholder="Имя"
          type="text"
          minLength="2"
          maxLength="40"
          required
          pattern={REGEX_NAME}
          onChange={handleChange}
        ></input>
        <span className="form__input-error">{errors.name}</span>
      </label>
      <label className="form__field-name">
        E-mail
        <input
        name='email'
          className="form__input"
          placeholder="E-mail"
          type="email"
          required
          pattern={REGEX_EMAIL}
          onChange={handleChange}
          
        ></input>
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__field-name">
        Пароль
        <input
        name='password'
          className={errorMessage? "form__input form__input-invalid": 'form__input'}
          placeholder="Пароль"
          type="password"
          minLength="6"
          maxLength="30"
          required
          onChange={handleChange}
        ></input>
        <span className="form__input-error">{errors.password}</span>
      </label>
      
    </FormElement>
  );
}

export default Register;
