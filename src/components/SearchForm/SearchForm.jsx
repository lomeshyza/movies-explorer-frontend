import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
<div className="searchForm">
    <form type="submit" className="searchForm__form">
        <input className="searchForm__input" placeholder="Фильм">
            
        </input>
        <button className="searchForm__button" type='submit'>Найти</button>
        <FilterCheckbox/>
    </form>
</div>

  );
}

export default SearchForm;
