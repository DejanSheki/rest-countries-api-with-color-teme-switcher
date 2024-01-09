import React from "react";

const DropdownMenu = ({ selectedRegion, handleRegionChange }) => {
  return (
    <div>
      <label
        className="dark:bg-darkBlue bg-white rounded-md py-4 pr-4 dark:text-white text-veryDarkBlue"
        htmlFor="select"
      >
        <select
          className="dark:bg-darkBlue bg-white p-4 pr-5 rounded-md dark:text-white text-veryDarkBlue"
          name="select"
          id="select"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
