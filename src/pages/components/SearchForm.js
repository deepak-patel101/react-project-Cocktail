import React from "react";
import { useGlobalContext } from "../../context";
import { useEffect, useRef } from "react";

///////////////////
const SearchForm = () => {
  const searchText = useRef("");
  const { setSearchTerm } = useGlobalContext();
  const searchDrink = () => {
    //to set the search value for the api's  url
    setSearchTerm(searchText.current.value);
  };

  //to avoide reloads
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //auto select search bar
    searchText.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search </label>
          <input
            type="text"
            id="name"
            ref={searchText}
            onChange={searchDrink}
          />
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
