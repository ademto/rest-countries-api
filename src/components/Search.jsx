import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

export default function Search() {

    return (
        <div className="shadow-sm p-4 bg-white dark:bg-dark-elements dark:text-white rounded-sm flex items-center gap-5 w-full md:w-96">
            <FaSearch />
            <input className="w-full outline-0 dark:text-white" type="text" name="search" id="search" placeholder="Search for a country"/>
        </div>
    )
}