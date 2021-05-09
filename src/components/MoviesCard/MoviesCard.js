import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
    return (
  		<>
        <article className="movie-card">
          <div className="movie-card__body">
            <h3 className="movie-card__title">
              {props.name}
            </h3>
            <p className="movie-card__duration">
              {props.duration}
            </p>
          </div>
          <img className="movie-card__photo" src={props.image} alt={props.name} />
          {props.isSavedMovie ? (
            <button className="movie-card__button movie-card__button_delete" type="submit"></button>
          ) : (
            <>
              {props.isSavedMovieOn ? (
                <button className="movie-card__button movie-card__button_saved" type="submit"></button>
              ) : (
                <button className="movie-card__button" type="submit"></button>
              )}
            </>
          )}
        </article>  
      </>
    );
}

export default MoviesCard;