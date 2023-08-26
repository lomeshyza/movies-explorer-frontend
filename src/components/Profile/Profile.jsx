import React, { useContext, useEffect, useState} from 'react'
import "../Profile/Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {useFormAndValidation} from '../../hooks/useFormAndValidation';
import {REGEX_EMAIL, REGEX_NAME} from "../../utils/constants";

function Profile({
  buttonTitle,
  onUpdateUser,
  formLinkText,
  onLogout,
  loggedIn,
  errorMessage,successMessage
}) {
  const currentUser = useContext(CurrentUserContext);
 const{values, handleChange, errors, isValid, resetForm} = useFormAndValidation();
 const [isNewValues, setIsNewValues] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);


  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;
    onUpdateUser({name, email});
  };
  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsNewValues(true);
    } else {
      setIsNewValues(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__header">{`Привет, ${currentUser.name}!`}</h2>
          <form type="submit" className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__fieldset">
              <div className="profile__form-container">
                <label className="profile__field-name">Имя</label>
                <input
                  name='name'
                  className="profile__input"
                  placeholder="Имя"
                  value={values.name || ''}
                  type="text"
                  minLength="2"
                  maxLength="30"
                  pattern={REGEX_NAME}
                  required
                  onChange={handleChange}
                ></input>
                
              </div>
              <span className='profile__error'>{errors.name}</span>
              <div className="profile__form-container">
                <label className="profile__field-name">E-mail</label>
                <input
                  name='email'
                  className="profile__input"
                  placeholder="E-mail"
                  value={values.email || ''}
                  type="email"
                  minLength="2"
                  maxLength="30"
                  pattern={REGEX_EMAIL}
                  required
                  onChange={handleChange}
                ></input>
              
              </div>
              <span className='profile__error'>{errors.email}</span>
            </fieldset>
            
            <p className="form__submit-error">{errorMessage||successMessage}</p>
            <button className={
              isNewValues? ' button__none' : 
              !isValid ? "profile__button-save profile__button-save_inactive button"
              : "profile__button-save button"} 
              disabled={!isValid ? true : false}>Сохранить</button>
            <button
              className={!isNewValues ? 'button__none ' : "button profile__button"}
              disabled={true}
              type="submit"
            >
              {buttonTitle}
            </button>
          </form>
          <button className={!isNewValues? 'button__none ' : "profile__form-button button"} onClick={onLogout}>
            {formLinkText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
