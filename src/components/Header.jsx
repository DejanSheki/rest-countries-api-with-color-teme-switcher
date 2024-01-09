import React from "react";

import { IoMdSearch } from "react-icons/io";

const Header = ({
  onSearch,
  searchValue,
  selectedRegion,
  handleRegionChange,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center h-[17vh] px-6 sm:px-12 lg:px-20 dark:bg-veryDarkBlueBg bg-veryLightGrayBg py-7 ">
      <div className="flex items-center dark:bg-darkBlue bg-white p-4 rounded-md md:w-2/5 w-full">
        <label htmlFor="search">
          <IoMdSearch className="dark:text-white text-veryDarkBlue" size={25} />
        </label>
        <input
          className="dark:bg-darkBlue bg-white placeholder-veryDarkBlue dark:text-white text-veryDarkBlue dark:placeholder-white placeholder:opacity-80 placeholder:focus:opacity-100 w-full  tracking-wide  ml-4"
          id="search"
          type="text"
          placeholder="Search for a country..."
          onChange={onSearch}
          value={searchValue}
        />
      </div>
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
    </header>
  );
};

export default Header;
