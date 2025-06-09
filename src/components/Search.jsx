import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    function onSearchChange(e) {
        const params = Object.fromEntries(searchParams.entries());
        const value = e.target.value;

        if (value) {
            params.search = value;
        } else {
            delete params.search;
        }
        setSearchParams(params);
    }

    return (
        <div className="shadow-sm p-4 bg-white dark:bg-dark-elements dark:text-white rounded-sm flex items-center gap-5 w-full md:w-96">
            <FaSearch />
            <input
                onChange={onSearchChange}
                className="w-full outline-0 dark:text-white"
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country"
                defaultValue={searchParams.get("search") || ""}
            />
        </div>
    );
}
