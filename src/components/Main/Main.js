import React from "react";
//import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Auth from "../Auth/Auth";
import Logo from '../Logo/Logo';
import Promo from '../Promo/Promo';

function Main() {
  return (
    <>
		<Header className="header">
			<Logo className="header__logo" mainPage />
			<Auth />
		</Header>
		<Promo />
    </>
  );
}

export default Main;