import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import LostPage from '../LostPage/LostPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Menu from "../Menu/Menu";
import * as auth from "../../utils/auth";
import * as moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { SHORTMOVIES_DURATION } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [movies, setMovies] = useState([]);
	const [userMovies, setUserMovies] = useState([]);
	const [sortedMovies, setSortedMovies] = useState([]);
	const [shortMovies, setShortMovies] = useState(false);
	const [message, setMessage] = useState("");
  const [moviesMessage, setMoviesMessage] = useState("");	
	const [loggedIn, setLoggedIn] = useState(false);

	const history = useHistory();
  let location = useLocation();

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen();
  }


  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            setCurrentUser(res);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(`Переданный токен некорректен или просрочен: ${err}`);
          localStorage.removeItem("jwt");
          history.push("/");
        });
    }
    // eslint-disable-next-line
  }, []);	

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setMessage("");
          handleLogin(email, password);
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        if (err === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      });
  }	

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (!data) {
          setMessage("Что-то пошло не так");
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setMessage("");
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
          return loggedIn;
        }
      })
      .catch((err) => {
        console.log(`---${err}`);
        setMessage("При авторизации произошла ошибка");
        if (err === 401) {
          setMessage("Пользователь с таким email не найден");
        }
        if (err === 400) {
          setMessage("Неверный email или пароль");
        }
        localStorage.removeItem("jwt");
      });
  }

  function handleUpdateUser(data) {
    mainApi
      .editUserInfo(data)
      .then((editedData) => {
        setCurrentUser(editedData);
        setMessage("Данные профиля обновлены.");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err.status === 409) {
          setMessage("Пользователь с таким email уже существует.");
        } else {
          setMessage("При обновлении профиля произошла ошибка.");
        }
      });
  }	

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userMovies");
    localStorage.removeItem("movies");
    localStorage.removeItem("sortedMovies");
    localStorage.removeItem("currentUser");
    setUserMovies([]);
    setSortedMovies([]);
    setCurrentUser({});
    setLoggedIn(false);
    setMessage("");
    history.push("/");
  };	

  function handleGetMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = movies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      const checkedLikes = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id
        );
        return movie;
      });
      setSortedMovies(checkedLikes);
      localStorage.setItem("sortedMovies", JSON.stringify(checkedLikes));
    }
	}	

	function handleLikeChange(movie) {
    const clickedMovie = movie.isSaved;
    if (clickedMovie) {
      handleDislikeClick(movie);
    } else {
      handleLikeClick(movie);
    }
  }	

  function handleLikeClick(movie) {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .addMovie(movie, jwt)
      .then((newMovie) => {
        if (!newMovie) {
          throw new Error("При сохранении фильма произошла ошибка");
        } else {
          localStorage.setItem(
            "userMovies",
            JSON.stringify((newMovie = [newMovie.movie, ...userMovies]))
          );
          setUserMovies(newMovie);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }	

  function handleDislikeClick(movie) {
    const movieId = movie.id || movie.movieId;
    const selectedMovie = userMovies.find((item) => item.movieId === movieId);
    mainApi
      .deleteMovie(selectedMovie._id)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error("При удалении фильма произошла ошибка");
        } else {
          const newMoviesList = userMovies.filter((c) => c.movieId !== movieId);
          setUserMovies(newMoviesList);
        }
      })
      .catch((err) => console.log(`При удалении фильма: ${err}`));
  }	

  function handleMovieDeleteButton(movie) {
    handleDislikeClick(movie);
  }

  function handleGetSavedMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = userMovies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      setUserMovies(findedMovies);
    }
  }

  function handleCheckBox() {
    setShortMovies(!shortMovies);
    console.log(!shortMovies);
  }	

  function filterShortMovies(arr) {
    if (arr.length !== 0 || arr !== "undefind") {
      return arr.filter((movie) =>
        shortMovies ? movie.duration <= SHORTMOVIES_DURATION : true
      );
    }
	}	

	function checkSavedMovie(movie) {
    return (movie.isSaved = userMovies.some(
      (userMovie) => userMovie.movieId === movie.id
    ));
  }

  function getCurrentUser() {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .getUserData(jwt)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("jwt");
        localStorage.removeItem("currentUser");
      });
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      Promise.all([mainApi.getUserData(jwt), mainApi.getUserMovies(jwt)])
        .then(([userData, savedMovies]) => {
          localStorage.setItem("currentUser", JSON.stringify(userData));
          setCurrentUser(userData);

          const savedMoviesList = savedMovies.filter(
            (item) => item.owner._id === userData._id
          );

          localStorage.setItem("userMovies", JSON.stringify(savedMoviesList));
          setUserMovies(savedMoviesList);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    checkSavedMovie(sortedMovies);
    // eslint-disable-next-line
  }, [userMovies]);	

  useEffect(() => {
    moviesApi
      .getInitialMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem("movies", JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.removeItem("movies");
      });
  }, [currentUser]);

	return (
    <CurrentUserContext.Provider value={currentUser}>
			<Switch>
				<Route exact path="/">
					<Main 
            loggedIn={loggedIn} 
            onMenu={handleMenu}
          />
				</Route>
        <Route path="/sign-up">
          <Register 
            onRegister={handleRegister} 
            message={message}
          />
        </Route>
        <Route path="/sign-in">
          <Login 
            onLogin={handleLogin} 
            loggedIn={loggedIn} 
            message={message} 
          />
        </Route>		
        <ProtectedRoute
          path="/movies"
          component={Movies}
          onMenu={handleMenu}
          movies={filterShortMovies(sortedMovies)}
          onGetMovies={handleGetMovies}
          loggedIn={loggedIn}
          onAddMovie={handleLikeChange}
          onFilter={handleCheckBox}
          isShortMovie={shortMovies}
          message={moviesMessage}
          savedMovies={userMovies}
          onSignOut={handleSignOut}
          likedMovies={checkSavedMovie}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          onMenu={handleMenu}
          movies={filterShortMovies(userMovies)}
          onGetMovies={handleGetSavedMovies}
          loggedIn={loggedIn}
          onDelete={handleMovieDeleteButton}
          isShortMovie={shortMovies}
          onFilter={handleCheckBox}
          message={moviesMessage}
          isSavedMovies={true}
          onSignOut={handleSignOut}
        />	
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onMenu={handleMenu}
          loggedIn={loggedIn}
          onSignOut={handleSignOut}
          onEditUser={handleUpdateUser}
          message={message}
        />
        <Route path="*">
          <LostPage />
        </Route>				
			</Switch>
			<Menu 
        isOpen={isMenuOpen} 
        onClose={closeMenu}
      />
		</CurrentUserContext.Provider>
    );
  }
  
export default App;