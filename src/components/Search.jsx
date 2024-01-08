import { useState } from "react";

const Search = (props) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
    </>
  );
};

export default Search;
