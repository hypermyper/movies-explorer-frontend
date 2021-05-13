import React, { Suspense, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { MIN_CARDS, MAX_CARDS } from "../../utils/constants";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard")); 


function MoviesCardList(props) {

  const [counter, setCounter] = useState(25);

  function showMoreMovies() {
    setCounter(counter + 3);
  }  

   return (
			<>
        <section className="movies">
          <Suspense fallback={<Preloader />}>
            {props.message ? (
              <p className="movies-nofound">{props.message}</p>
            ) : (
              props.movies
                .slice(0, counter)
                .map((movie, id) => (
                  <MoviesCard
                    movie={movie}
                    name={movie.nameRU}
                    duration={movie.duration}
                    key={id}
                    id={movie._id}
                    {...movie}
                    isSavedMovies={props.isSavedMovies}
                    onAddMovie={props.onAddMovie}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
                    likedMovies={props.likedMovies}
                  />
                ))
            )}
          </Suspense>             
        </section>
        {props.movies.length >= MIN_CARDS &&
          props.movies.length > counter &&
          props.movies.length <= MAX_CARDS &&
          !props.message ? (
            <section className="more">
              <button
                type="button"
                onClick={showMoreMovies}
                className="more__button"
              >
                Ещё
              </button>
            </section>
          ) : (
            ""
          )}
      </>
    );
}

export default MoviesCardList;	