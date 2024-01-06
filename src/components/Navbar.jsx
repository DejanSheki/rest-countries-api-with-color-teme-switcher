import React from "react";
import ToggleSlider from "./ToggleSlider";

const Navbar = () => {
  return (
    <nav className="dark:bg-darkBlue bg-white flex justify-between items-center h-[10vh] px-10 shadow-dark">
      <h1 className="text-2xl dark:text-white text-veryDarkBlue font-semibold tracking-wide">
        Where in the world?
      </h1>
      <ToggleSlider />
    </nav>
  );
};

export default Navbar;
