import React from "react";
//import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Auth from "../Auth/Auth";
import Logo from '../Logo/Logo';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
			<Header>
				<Logo mainPage />
				<Auth />
			</Header>
  		<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Portfolio />
			<Footer />
    </>
  );
}

export default Main;