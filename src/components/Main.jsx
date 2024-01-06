import React from "react";
import Data from "../data.json";

const CountryList = () => {
  return (
    <>
      {Data.map((country) => {
        return (
          <article>
            <h2>{country.name}</h2>
          </article>
        );
      })}
    </>
  );
};

export default CountryList;
