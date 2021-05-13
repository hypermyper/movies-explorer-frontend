import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import "./Profile.css";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [changedName, setChangedName] = useState(false);
  const [changedEmail, setChangedEmail] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [formValid, setFormValid] = useState(false);  
  const [savedMessage, setSavedMessage] = useState("");

  function handleChangeName(e) {
    setChangedName(true);
    setSavedMessage("");
    const validName = /^[а-яА-ЯёЁa-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError("Длина имени должна быть не менее 2 символов");
      setFormValid(false);
     } else if (e.target.value.length > 30) {
      setNameError("Длина имени должна должна быть не более 30 символов");
      setFormValid(false);
    } else if (!validName) {
      setNameError("Имя должно содержать только латиницу, кириллицу, пробел или дефис");
      setFormValid(false); 
    } else {
      setNameError("");
      setFormValid(true);
    }
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setChangedEmail(true);
    setSavedMessage("");
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value
    );

    if (!validEmail) {
      setEmailError("Неверный формат почты");
      setFormValid(false);
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  }

  function setInputDisabled() {
    setIsInputDisabled(!isInputDisabled);
  }  

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditUser({
      name,
      email,
    });
    setInputDisabled();
    setSavedMessage(props.message);
  }  

  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);    

  useEffect(() => {
    if (nameError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  useEffect(() => {
    if (currentUser.name === name && currentUser.email === email) {
      setFormValid(false);
    } 
  }, [name, email, currentUser.name, currentUser.email]);

  return (
    <>
      <Header>
        <Logo />
        <Navigation onClick={props.onMenu} />
      </Header>
      <section className="profile">
        <form
          className="form__profile"
          id="profile"
          onSubmit={handleSubmit}
        >
          <div className="form__container_auth">
            <h2 className="form__title">Привет, {currentUser.name}!</h2>
            <fieldset className="form__inputs">
              <div className="form__input-container-profile">
                <label className="form__field-profile">
                  Имя
                  <input
                    id="profile-name"
                    className={`form__item form__item-profile ${
                      changedName && nameError ? "form__item-profile_error" : ""
                    }`}
                    type="text"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    value={name}
                    onChange={handleChangeName}
                    disabled={!isInputDisabled}                    
                    required
                  />
                </label>            
              </div>
              <span className="form__item-profile_error form__profile_span">
                {nameError}
              </span>               
              <div className="form__input-container-profile">
                <label className="form__field-profile">
                  Почта
                  <input
                    id="profile-email"
                    className={`form__item form__item-profile ${
                      changedEmail && emailError
                        ? "form__item-profile_error"
                        : ""
                    }`}
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                  />
                </label>
              </div>
              <span className="form__item-profile_error">
                {emailError}
              </span>           
              <div className="form__handlers">
                <div className="form__item-message">
                  {savedMessage}
                </div>                 
                <button 
                  className={`submit__button-profile ${
                    !formValid || name < 2 || email < 2 ? "submit__button-profile_disabled" : ""
                    }`} 
                  type="submit"
                  disabled={!formValid || name < 2 || email < 2}
                  onClick={setInputDisabled}                  
                >
                  Редактировать
                </button>
              </div>
            </fieldset>
            <Link 
              to="/sign-in" 
              className="form__exit"
              onClick={props.onSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>        
    </>
  );
}

export default Profile;