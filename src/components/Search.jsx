import { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  //   const handleChange = (event) => {
  //     setSearchTerm(event.target.value);

  //     props.onSearch(event);
  //   };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
    </>
  );
};

export default Search;
