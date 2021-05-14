import React, { Suspense, useState, useEffect, lazy } from "react";
import Preloader from "../Preloader/Preloader";
import { MIN_CARDS, MAX_CARDS } from "../../utils/constants";
import MoreButton from "../MoreButton/MoreButton";
const MoviesCard = lazy(() => import("../MoviesCard/MoviesCard")); 


function MoviesCardList(props) {

  const [counter, setCounter] = useState(3);
  const [addQuantity, setAddQuantity] = useState(3);


  function showMoreMovies() {
    setCounter(counter + addQuantity);
  }  

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768) {
      setCounter(12);
      setAddQuantity(3);
    }
    if (size.width < 769 && size.width > 480 ) {
      setCounter(8);
      setAddQuantity(2);
    } 
    if (size.width > 319 && size.width < 481 ) {
      setCounter(5);
      setAddQuantity(2);
    }
  }, [size]);  

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
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
            <MoreButton
              onMoreButtonClick={showMoreMovies}
            />
          ) : (
            ""
          )
        }
      </>
    );
}

export default MoviesCardList;	