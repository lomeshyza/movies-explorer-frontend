import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
//import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function SearchForm({  
 short,query,onSearch,onCheck,onSearchMovies,errorMessage, setErrorMessage,setSubmit
}) {
  //const [isNoQuery, setIsNoQuery] = useState(false);
  //const [errorMessage, setErrorMessage]=useState('');

  function onChange(evt) {
const val= evt.target.value;
onSearch(val);
setSubmit(false)
//localStorage.setItem("query", value);
  }
  function onCheckboxChange(evt){
    const value= evt.target.checked;
    onCheck(value);
    localStorage.setItem("short", JSON.stringify(value));
     }
  function handleSubmit(evt) {
    evt.preventDefault();
    setSubmit(true)
    onSearchMovies(query);
  }
  //console.log(`это short ${JSON.stringify(short)}`)
  //console.log(`это query ${JSON.stringify(query)}`)
  //console.log(`это checked1 ${isShort}`)  
  return (
    <div className="searchForm">
      <form type="submit" className="searchForm__form" onSubmit={handleSubmit}>
        <input
          name='searchForm'
          className="searchForm__input"
          placeholder="Фильм"
          type="text"
          onChange={onChange}
          value={query ||''}
         
          
        ></input>
        <button className="searchForm__button button" type="submit">
          Найти
        </button>
        <FilterCheckbox 
        onCheckboxChange={onCheckboxChange}
        short={short}
         />
        {/* <p className='moviesCardList__noQuery'>{errorMessage}</p> */}
      </form>
    </div>
  );
}

export default SearchForm;
