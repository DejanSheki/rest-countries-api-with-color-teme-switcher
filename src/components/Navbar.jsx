import React from "react";
import ToggleSlider from "./ToggleSlider";

const Navbar = () => {
  return (
    <nav className="dark:bg-darkBlue bg-white flex justify-between items-center h-[9vh] px-6 sm:px-12 lg:px-20 dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.6)] relative">
      <h1 className="text-2xl dark:text-white text-veryDarkBlue font-extrabold tracking-wide">
        Where in the world?
      </h1>
      <ToggleSlider />
    </nav>
  );
};

export default Navbar;
