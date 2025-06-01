import Select from 'react-select';
import { FaSearch } from "react-icons/fa";

export default function SearchFilterPanel() {
    const options = [
        { value: 'africa', label: 'Africa' },
        { value: 'america', label: 'America' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' },
    ];  

    return (
        <div className="flex items-center justify-between my-10">
            <div className="shadow-sm p-4 bg-white flex items-center gap-5 w-96">
                <FaSearch />
                <input className="w-full outline-0" type="text" name="search" id="search" placeholder="Search for a country"/>
            </div>
            <div className=''>
                <Select
                    placeholder="Filter By Region"
                    options={options}
                />
            </div>
        </div>
    )
}