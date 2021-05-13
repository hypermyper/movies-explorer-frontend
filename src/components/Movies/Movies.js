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
					<Navigation 
						onClick={props.onMenu}
					/>
				</Header>
				<SearchForm 
					onGetMovies={props.onGetMovies}
					onFilter={props.onFilter}
					isShortMovie={props.isShortMovie}
				/>	
				<MoviesCardList 
					movies={props.movies}
					onGetMovies={props.handleGetMovies}
					onAddMovie={props.onAddMovie}
					isSavedMovies={false}
					message={props.message}
					savedMovies={props.savedMovies}
					likedMovies={props.likedMovies}		
				/>
				<Footer />
    </>
    );
}

export default Movies;