import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import LostPage from '../LostPage/LostPage';
import Movies from '../Movies/Movies';
import Menu from "../Menu/Menu";

function App() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
		console.log('menuOpen');
  }

  function closeMenu() {
    setIsMenuOpen();
  }

	return (
    <>
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>	
				<Route path="/sign-up">
					<Register />
				</Route>
				<Route path="/sign-in">
					<Login />
				</Route>			
				<Route path="/movies">
					<Movies onMenu={handleMenu} />
				</Route>
        <Route path="*">
          <LostPage />
        </Route>				
			</Switch>
			<Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
    );
  }
  
export default App;