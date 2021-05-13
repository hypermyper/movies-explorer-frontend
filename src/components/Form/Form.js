import React from "react";
import Logo from '../Logo/Logo';
import "./Form.css";

function Form(props) {
  return (
    <section id={props.name}>
      <form className="form" id={props.id} onSubmit={props.onSubmit} noValidate>
        <Logo />
        <div className="form__container form__container_auth">
          <h2 className="form__title">{props.title}</h2>
          <fieldset className="form__input-container">
            {props.children}
          </fieldset>
          {props.Link}
        </div>
      </form>
    </section>
  );
}

export default Form;