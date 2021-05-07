import React, { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [checked, setChecked] = useState(true);	

  return (
    <div className="filter-checkbox">
      <input type="checkbox" 
				id="filter-checkbox" 
				className="filter-checkbox__input" 
        checked={checked}
        onChange={() => setChecked(!checked)}				
			/>
      <label htmlFor="filter-checkbox" className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;