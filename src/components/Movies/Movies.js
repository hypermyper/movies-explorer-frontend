import React from "react";
import Header from "../Header/Header";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import "../Movies/Movies.css";
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
			<>
				<Header>
					<Logo />
					<Navigation onClick={props.onMenu} />
				</Header>
				<SearchForm />	
					<MoviesCardList />				
				<Footer />
    </>
    );
}

export default Movies;