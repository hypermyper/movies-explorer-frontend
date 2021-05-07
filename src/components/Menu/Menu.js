import React from "react";
import { Link } from "react-router-dom";
import "../Menu/Menu.css";
import "../Header/Header.css";

function Menu(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        />
        <nav className="popup-nav__wrap">
          <Link to="/" className="popup__nav">Главная</Link>
          <Link to="/movies" className="popup__nav">Фильмы</Link>
          <Link to="/movies" className="popup__nav">Сохраненные фильмы</Link>
        </nav>
				<Link to="/profile" className="header-auth__link header-auth__link_popup">
					Аккаунт <div className="header__profile" />
				</Link>
      </div>
    </div>
  );
}

export default Menu;