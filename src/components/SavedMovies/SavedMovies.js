import React from "react";
import Header from "../Header/Header";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
			<>
				<Header>
					<Logo />
					<Navigation onClick={props.onMenu} />
				</Header>
				<SearchForm />
					<MoviesCardList showSavedMovies={true}/>				
				<Footer />
    </>
    );
}

export default SavedMovies;