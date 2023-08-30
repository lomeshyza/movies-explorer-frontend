import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  short,
  query,
  onSearch,
  onCheck,
  onSearchMovies,
  errorMessage,
  setErrorMessage,
  setSubmit,
}) {
  function onChange(evt) {
    const val = evt.target.value;
    onSearch(val);
    setSubmit(false);
  }
  function onCheckboxChange(evt) {
    const value = evt.target.checked;
    onCheck(value);
    localStorage.setItem("short", JSON.stringify(value));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setSubmit(true);
    onSearchMovies(query);
  }

  return (
    <div className="searchForm">
      <form type="submit" className="searchForm__form" onSubmit={handleSubmit}>
        <input
          name="searchForm"
          className="searchForm__input"
          placeholder="Фильм"
          type="text"
          onChange={onChange}
          value={query || ""}
        ></input>
        <button className="searchForm__button button" type="submit">
          Найти
        </button>
        <FilterCheckbox onCheckboxChange={onCheckboxChange} short={short} />
      </form>
    </div>
  );
}

export default SearchForm;
