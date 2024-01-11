import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import Navbar from "./components/Navbar";
import MainPage from './components/MainPage';
import CountryDetails from "./components/CountryDetails";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/countryDetails' element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
