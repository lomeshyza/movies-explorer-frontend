import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox({short,onCheckboxChange}) {

console.log(`это short FilterCheckbox ${short}`)  
  return (
    <form className="filter">
      <input
        name='checkbox'
        className="filter__checkbox"
        type="checkbox"
        onChange={onCheckboxChange}
        checked={short}
        novalidate
       //defaultChecked={localStorage.getItem('shortMovies') || false}
        >
      </input>
      <span className="filter__text">Короткометражки</span>
    </form>
  )
}

export default FilterCheckbox;