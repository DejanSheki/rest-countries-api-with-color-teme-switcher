import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import Search from "./components/Search";
import "./App.css";

import { useState } from "react";

import data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  })
  return (
    <>
      <Navbar />
      <Search onSearch={handleChange} />
      <CountryList countries={searchedCountries} />
    </>
  );
}

export default App;
