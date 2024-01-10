import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = () => {
    return (
        <section>
            <div className="p-15 flex justify-center items-center dark:bg-veryDarkBlueBg bg-veryLightGrayBg">
                <button className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md flex text-veryDarkBlue dark:text-white">
                    <GoArrowLeft size={18} type="button" className="stroke-1" /><span> Back</span>
                </button>
                <button className="dark:bg-darkBlue bg-white px-8 py-4 border-none rounded-md">
                    <span><FaArrowLeftLong size={18} type="button" className="text-veryDarkBlue dark:text-white" /> Back</span>
                </button>
            </div>
        </section>
    )
}

export default CountryDetails;