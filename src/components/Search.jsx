import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");
    setSearchParams({ search });
    return (
        <div className="shadow-sm p-4 bg-white dark:bg-dark-elements dark:text-white rounded-sm flex items-center gap-5 w-full md:w-96">
            <FaSearch />
            <input 
                onChange={(e) => setSearchParams({ search: e.target.value })}
                className="w-full outline-0 dark:text-white" type="text" 
                name="search" id="search" placeholder="Search for a country"
            />
        </div>
    )
}