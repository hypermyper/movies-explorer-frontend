import React, { useState } from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import "./SearchForm.css";

function SearchForm(props) {

	const [isActive, setActive] = useState(false);

  function onSearchFocus(e) {
    e.target.placeholder = '';
		setActive(!isActive);
  }

	function onSearchBlur(e) {
		e.target.placeholder = 'Фильм';
		setActive(!isActive);				
	}

  return (
    <section className="search-form-section">
      <div className={isActive ? 'search-form__container search-form__container_active' : 'search-form__container'}>
        <div className="search-form__search-icon" />
        <form className="search-form">
          <label className="search-form__field">
            <input className="search-form__input" type="text" placeholder="Фильм" onFocus={onSearchFocus}  onBlur={onSearchBlur} minLength="2" maxLength="50" required />
          </label>
        </form>
        <button className="search-form__submit-button" type="submit"></button>
				<div className="search-form__vertical-divider"></div>
				<FilterCheckbox />				
      </div>
			<hr className="search-form__divider" />
    </section>
  );
}

export default SearchForm;