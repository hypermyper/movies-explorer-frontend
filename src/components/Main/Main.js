import React from "react";
//import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Auth from "../Auth/Auth";
import Logo from '../Logo/Logo';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <>
			<Header className="header">
				<Logo className="header__logo" mainPage />
				<Auth />
			</Header>
  		<Promo />
			<AboutProject />
			<Techs />
    </>
  );
}

export default Main;