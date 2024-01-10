import "./App.css";
import { useState } from "react";
import data from "./data.json";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const searchedCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!selectedRegion || country.region === selectedRegion);
  });

  return (
    <>
      <Navbar />
      <Header
        onSearch={handleChange}
        searchValue={searchTerm}
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />
      <CountryList countries={searchedCountries} />
    </>
  );
}

export default App;
