
import { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from "react-icons/fa";

export default function SearchFilterPanel({ filter }) {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { value: 'africa', label: 'Africa' },
        { value: 'americas', label: 'America' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setToggleDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const regionFilter = new URLSearchParams(window.location.search).get("region") || "";

    const handleToggleDropdown = () => {
        setToggleDropdown(prev => !prev);
    };

    return (
        <div className='relative inline-block mt-10 md:mt-0' ref={dropdownRef}>
            <div
                onClick={handleToggleDropdown}
                className="flex items-center gap-10 text-sm cursor-pointer shadow-sm p-4 bg-white dark:bg-dark-elements dark:text-white rounded-sm"
                aria-haspopup="listbox"
                aria-expanded={toggleDropdown}
            >
                <p>{regionFilter ? options.find(o => o.value === regionFilter)?.label : "Filter By Region"}</p>
                <FaAngleDown />
            </div>

            {toggleDropdown && (
                <div
                    className='absolute z-10 w-full mt-2 shadow-sm rounded-lg dark:bg-dark-elements dark:text-white dark:hover:bg-emerald-800'
                    role="listbox"
                >
                    <button
                        onClick={() => { filter(''); setToggleDropdown(false); }}
                        className={`w-full px-4 py-2 text-left bg-white hover:bg-amber-100 dark:hover:bg-dark-bg dark:bg-dark-elements dark:text-white ${regionFilter === '' ? 'font-bold bg-amber-200 dark:bg-emerald-700' : ''}`}
                    >
                        All Regions
                    </button>
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => { filter(option.value); setToggleDropdown(false); }}
                            className={`w-full px-4 py-2 text-left cursor-pointer bg-white hover:bg-amber-100 dark:hover:bg-dark-bg dark:bg-dark-elements dark:text-white ${
                                regionFilter === option.value ? 'font-bold bg-amber-200 dark:bg-emerald-700' : ''
                            }`}
                            role="option"
                            aria-selected={regionFilter === option.value}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
