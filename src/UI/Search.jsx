import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="search-input"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Поиск по названию"
    />
  );
};

export default Search;
