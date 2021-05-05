import React from "react";
import Header from "../Header/Header";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
			<>
				<Header>
					<Logo />
					<Navigation />
				</Header>
				<SearchForm />		
				<Footer />
    </>
    );
}

export default Movies;