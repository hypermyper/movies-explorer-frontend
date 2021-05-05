import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import LostPage from '../LostPage/LostPage';
import Movies from '../Movies/Movies';

function App() {
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
					<Movies />
				</Route>
        <Route path="*">
          <LostPage />
        </Route>				
			</Switch>
    </>
    );
  }
  
export default App;