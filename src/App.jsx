import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import "./App.css";
import data from "./data.json";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

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
    <Router>
      <Navbar />
      <Header
        onSearch={handleChange}
        searchValue={searchTerm}
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />
      <CountryDetails />
      <CountryList countries={searchedCountries} />
    </Router>
  );
}

export default App;
