import React from "react";
import "./MoviesCard.css";
import { BASE_LINK } from '../../utils/constants';
import noImage from '../../images/noimage.svg';

function MoviesCard(props) {
  const isLiked = !props.isSavedMovies && props.likedMovies(props.movie);

  function handleLikeClick() {
    props.onAddMovie({
      country: props.movie.country,
      director: props.movie.director,
      duration: props.movie.duration,
      year: props.movie.year,
      description: props.movie.description,
      image: `${BASE_LINK}${props.movie.image ? props.movie.image.url : ""}`,
      trailer: props.movie.trailerLink,
      thumbnail: `${BASE_LINK}${
        props.movie.image.formats.thumbnail
          ? props.movie.image.formats.thumbnail.url
          : ""
      }`,
      movieId: props.movie.id,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      isSaved: props.movie.isSaved,
    });
  }

  function handleDeleteClick() {
    props.onDelete(props.movie);
  }  

  function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n === 1) { 
      return text_forms[0]; 
    }     
    if (n1 > 1 && n1 < 5) { 
      return text_forms[1]; 
    }
    return text_forms[2];
  }  

    return (
  		<>
        <article className="movie-card">
          <div className="movie-card__body">
            <h3 className="movie-card__title" title={props.name || props.movie.nameRU}>
              {props.name || props.movie.nameRU}
            </h3>
            <p className="movie-card__duration">
            {Math.floor((props.duration || props.movie.duration) / 60) !== 0 ? 
              `${Math.floor((props.duration || props.movie.duration) / 60)} ${declOfNum(Math.floor((props.duration || props.movie.duration) / 60), ['час', 'часа', 'часов'])}`
             : (
              ""
              )}
              {` ${(props.duration || props.movie.duration) % 60} мин.`}
            </p>
          </div>
          <a
            href={props.trailerLink || props.trailer}
            target="_blank"
            rel="noreferrer nofollow"
            className="movie-card__link"
          >          
            <img 
              className="movie-card__photo" 
              src={
                props.isSavedMovies
                  ? props.movie.image
                  : `${
                      props.movie.image !== null ? `${BASE_LINK}${props.movie.image.url}` : props.image ? props.image : noImage
                    }`
              }
              alt={props.name}
            />
          </a>
          {props.isSavedMovies ? (
            <button 
              className="movie-card__button movie-card__button_delete" 
              type="submit" 
              onClick={handleDeleteClick}>
            </button>
          ) : (
            <>
              {isLiked ? (
                <button 
                  className="movie-card__button movie-card__button_saved" 
                  type="submit" 
                  onClick={handleLikeClick}>
                </button>
              ) : (
                <button 
                  className="movie-card__button" 
                  type="submit" 
                  onClick={handleLikeClick}>
                </button>
              )}
            </>
          )}
        </article>  
      </>
    );
}

export default MoviesCard;