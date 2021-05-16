import React from "react";
//import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Auth from "../Auth/Auth";
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <>
			<Header>
				<Logo mainPage />
				{props.loggedIn ? (
					<Navigation 
						onClick={props.onMenu}
					/>
				) : (
					<Auth />
				)}
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