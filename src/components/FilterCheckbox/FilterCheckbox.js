import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" id="filter-checkbox" className="filter-checkbox__input" />
      <label htmlFor="filter-checkbox" className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;