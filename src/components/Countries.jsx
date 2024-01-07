import React from "react";

const CountryList = (countriesData) => {
  return (
    <>
      <main className="flex justify-between items-center gap-1 flex-wrap bg-veryLightGrayBg dark:bg-veryDarkBlueBg p-10">
        {countriesData.countries.map((country) => {
          return (
            <article
              className="w-[23%] flex flex-col bg-darkBlue dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.6)] rounded-sm"
              key={country.numericCode}
            >
              <img
                className="block w-full rounded-t-sm object-cover h-40"
                src={country.flags.svg}
              />
              <div className="pt-7 px-6 pb-9">
                <h1 className="dark:text-white text-veryDarkBlue font-extrabold text-xl tracking-wide mb-4">
                  {country.name}
                </h1>
                <p className="dark:text-white text-veryDarkBlue tracking-wide font-light">
                  <strong className="font-semibold">Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p className="dark:text-white text-veryDarkBlue tracking-wide font-light">
                  <strong className="font-semibold">Region: </strong>
                  {country.region}
                </p>
                <p className="dark:text-white text-veryDarkBlue tracking-wide font-light">
                  <strong className="font-semibold">Capital: </strong>
                  {country.capital}
                </p>
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default CountryList;