import React from "react";

const SearchBar = ({placeholder, data}) => {

    
  return (
    <div className="search-bar">
      <div className="searchInput">
        <input type="text"/>
        <div className="searchIcon"></div>
      </div>
    </div>
  );
};

export default SearchBar;
