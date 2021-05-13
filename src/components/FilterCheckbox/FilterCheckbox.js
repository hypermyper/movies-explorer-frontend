import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <input 
        type="checkbox"
        name="short-movies"
				id="filter-checkbox" 
				className="filter-checkbox__input" 
        onChange={props.onFilter}
        checked={props.isShortMovie}		
			/>
      <label htmlFor="filter-checkbox" className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;