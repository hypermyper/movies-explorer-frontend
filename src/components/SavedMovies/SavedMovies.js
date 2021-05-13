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
				<SearchForm 
					onGetMovies={props.onGetMovies} 
					onFilter={props.onFilter}
					isShortMovie={props.isShortMovie}
				/>
				{props.movies.length > 0 ? (
					<MoviesCardList 
						isSavedMovies={props.isSavedMovies}
						movies={props.movies}
						onGetMovies={props.onGetMovies}
						onDelete={props.onDelete}
						message={props.message}
					/>
					) : (
						<p className="movies-message">Нет сохранённых фильмов</p>
					)}
				<Footer />
    	</>
    );
}

export default SavedMovies;