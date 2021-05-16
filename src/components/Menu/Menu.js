import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink 
            to="/" exact 
            className="popup__nav"
            activeClassName="popup__nav_active"
          >
            Главная
          </NavLink>
          <NavLink 
            to="/movies" 
            className="popup__nav"
            activeClassName="popup__nav_active"            
          >
            Фильмы
          </NavLink>
          <NavLink 
            to="/saved-movies" 
            className="popup__nav"
            activeClassName="popup__nav_active"            
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
				<Link to="/profile" className="header-auth__link header-auth__link_popup">
					Аккаунт <div className="header__profile" />
				</Link>
      </div>
    </div>
  );
}

export default Menu;