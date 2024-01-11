import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = () => {
    return (
        <section className="flex flex-col dark:bg-veryDarkBlueBg bg-veryLightGrayBg p-15 lg:px-20 h-[91vh]">
            <div className="flex justify-start items-center h-[30vh] dark:bg-veryDarkBlueBg bg-veryLightGrayBg">
                <Link to='/' className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)">
                    <FaArrowLeftLong size={18} type="button" className="stroke-1" /><span className="ml-3"> Back</span>
                </Link>
            </div>
            <div className="flex justify-between items-center ">
                <div>
                    <img alt="zastava" />
                </div>
                <div>
                    <div>
                        <h1>Zemlja</h1>
                        <div>
                            <p><strong>Naziv</strong> Zemlja</p>
                            <p><strong>Naziv</strong> Zemlja</p>
                            <p><strong>Naziv</strong> Zemlja</p>
                            <p><strong>Naziv</strong> Zemlja</p>
                            <p><strong>Naziv</strong> Zemlja</p>
                        </div>
                        <div>
                            <p><strong>Naziv</strong> 11.233.333</p>
                            <p><strong>Naziv</strong> 11.233.333</p>
                            <p><strong>Naziv</strong> 11.233.333</p>
                        </div>
                    </div>
                    <div>
                        <strong>Border:</strong>
                        <button className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)"></button>
                        <button className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)"></button>
                        <button className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)"></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountryDetails;