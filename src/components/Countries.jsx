import React from "react";

const CountryList = (countriesData) => {
  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 md:gap-16 px-6 sm:px-12 lg:px-20 bg-veryLightGrayBg dark:bg-veryDarkBlueBg">
        {countriesData.countries.map((country) => {
          return (
            <article
              className="flex flex-col dark:bg-darkBlue bg-white dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)] rounded-md"
              key={country.numericCode}
            >
              <img
                className="block w-full rounded-t-md object-cover h-40"
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
