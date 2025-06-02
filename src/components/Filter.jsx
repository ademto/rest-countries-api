import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import data from "../data.json";

export default function SearchFilterPanel({filter}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const regionFilter = searchParams.get("region")

    // const displayRegion = regionFilter ? data.filter(country => country.region.toLowerCase()) : data;
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setToggleDropdown(prevValue => !prevValue);
    };

    const options = [
        { value: 'africa', label: 'Africa' },
        { value: 'americas', label: 'America' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' },
    ];  

    return (
        <div className='relative inline-block mt-10 md:mt-0'>
            <div onClick={handleToggleDropdown} className="flex items-center gap-10 text-sm cursor-pointer shadow-sm p-4 bg-white dark:bg-dark-elements dark:text-white rounded-sm">
                <p>Filter By Region</p>
                <FaAngleDown />
            </div>
            <div className='absolute z-10 w-full mt-2 shadow-sm rounded-lg dark:bg-dark-elements dark:text-white dark:hover:bg-emerald-800'>
                {toggleDropdown && options.map((option) => (
                    <button onClick={() => filter(option.value)} key={option.value} className="flex flex-col text-left w-full px-4 py-2 cursor-pointer bg-white hover:bg-amber-100 dark:hover:bg-dark-bg dark:bg-dark-elements dark:text-white">
                        {option.label}
                    </button>
                ))} 
            </div>
        </div>
    )
}