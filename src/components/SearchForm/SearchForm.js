import React, { useState, useEffect } from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

function SearchForm(props) {

  const [findedMovie, setFindedMovie] = useState("");
  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(false);  

	const [isActive, setActive] = useState(false);

  function handleSearchMovie(e) {
    setFindedMovie(e.target.value);
  }  

  function onSearchFocus(e) {
    e.target.placeholder = '';
		setActive(!isActive);
  }

	function onSearchBlur(e) {
		e.target.placeholder = 'Фильм';
		setActive(!isActive);				
	}

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    props.onGetMovies(findedMovie);
    console.log(findedMovie);    
    setFindedMovie("");
  }

  useEffect(() => {
    if (findedMovie && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [findedMovie, error]);  

  return (
    <section className="search-form-section">
      <div className={isActive ? 'search-form__container search-form__container_active' : 'search-form__container'}>
        <div className="search-form__search-icon" />
        <form 
          className="search-form" 
          onSubmit={handleSubmit}
        >
          <label className="search-form__field">
            <input 
              className="search-form__input" 
              type="text" 
              placeholder="Фильм" 
              onFocus={onSearchFocus}  
              onBlur={onSearchBlur} 
              minLength="2" 
              maxLength="50" 
              value={findedMovie}
              onChange={handleSearchMovie}              
              required />
          </label>
        </form>
        <button 
          className="search-form__submit-button" 
          type="submit"
          onClick={handleSubmit}
          disabled={!formValid}
        ></button>
        <div className="form__item-error">{error}</div>
				<div className="search-form__vertical-divider"></div>
				<FilterCheckbox 
          onFilter={props.onFilter}
          isShortMovie={props.isShortMovie}
        />				
      </div>
			<hr className="search-form__divider" />
    </section>
  );
}

export default SearchForm;