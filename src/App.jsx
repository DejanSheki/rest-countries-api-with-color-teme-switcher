import Navbar from "./components/Navbar";
import CountryList from "./components/Countries";
import "./App.css";

import data from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <CountryList countries={data} />
    </>
  );
}

export default App;
