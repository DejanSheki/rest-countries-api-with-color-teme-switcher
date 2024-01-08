import Navbar from "./components/Navbar";
import CountryList from "./components/Countries";
import Search from "./components/Search";
import "./App.css";

import { useState } from "react";

import data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Navbar />
      <Search onSearch={handleChange} />
      <p>Searching for: {searchTerm}</p>
      <CountryList countries={data} />
    </>
  );
}

export default App;
