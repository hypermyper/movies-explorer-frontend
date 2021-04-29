import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from '../Main/Main';

function App() {

	return (
    <>
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
			</Switch>
    </>
    );
  }
  
export default App;