import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = ({ data }) => {
    const { alpha3Code } = useParams();

    return (
        <section className="flex flex-col dark:bg-veryDarkBlueBg bg-veryLightGrayBg p-15 lg:px-20 h-[91vh]">
            {data.filter((countryData) => countryData.alpha3Code === alpha3Code).map((country) => {
                return (
                    <div key={country.numericCode}>
                        <div className="flex justify-start items-center h-[30vh] dark:bg-veryDarkBlueBg bg-veryLightGrayBg">
                            <Link to='/' className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)">
                                <FaArrowLeftLong size={18} type="button" className="stroke-1" /><span className="ml-3"> Back</span>
                            </Link>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="w-2/4">
                                <img src={country.flag} alt={`${country.name} flag`} />
                            </div>
                            <div>
                                <div>
                                    <h1>{country.name}</h1>
                                    <div>
                                        <p><strong>Native Name:</strong> {country.name}</p>
                                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                        <p><strong>Region:</strong> {country.region}</p>
                                        <p><strong>Sub Region:</strong> {country.subregion}</p>
                                        <p><strong>Capital:</strong> {country.capital}</p>
                                    </div>
                                    <div>
                                        <p><strong>Top Level Domain</strong> {country.topLevelDomain}</p>
                                        <p><strong>Currencies:</strong>
                                            {country.currencies ? (
                                                country.currencies.map((currency, index) => (
                                                    <span key={index}>
                                                        {currency.name}, <br /> Code: {currency.code}, <br /> Symbol: {currency.symbol}</span>
                                                ))
                                            ) : (
                                                <span> No data</span>
                                            )}
                                        </p>
                                        <p><strong>Languages:</strong>
                                            {country.languages ? (
                                                country.languages.map((language, index) => (
                                                    <span key={index}> {(index ? ', ' : '') + language.name} </span>
                                                ))
                                            ) : (
                                                <span> No land borders</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <strong>Border Cuntries:</strong>
                                    {country.borders ? (
                                        country.borders.map((border, index) => (
                                            <button key={index} className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)">
                                                {border}
                                            </button>
                                        ))
                                    ) : (
                                        <span> No Data</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default CountryDetails;