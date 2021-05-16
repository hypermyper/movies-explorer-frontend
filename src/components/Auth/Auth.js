import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Auth() {
  return (
    <>
      <div className="header-auth">
        <Link to="/sign-up" className="header-auth__signup">
          Регистрация
        </Link>
        <Link to="/sign-in" className="header-auth__signin">
          Войти
        </Link>
      </div>
		</>
	)
}

export default Auth;