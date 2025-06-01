import { Link, useParams } from "react-router-dom"

export default function Card({ data }) {
    const countryName = data.name
    return (
        <Link to={`/${countryName}`} className="bg-white dark:bg-dark-elements w-72 shadow-sm rounded-sm">
            <img className="w-full h-45 rounded-t-sm" src={data.flags.png} alt="" />
            <div className="p-6 dark:text-white">
                <h2 className="font-bold text-2xl mb-4">{data.name}</h2>
                <p>Population: <span className="text-input font-light dark:text-white">{data.population.toLocaleString()}</span></p>
                <p>Region: <span className="text-input font-light dark:text-white">{data.region}</span></p>
                <p>Capital: <span className="text-input font-light dark:text-white">{data.capital}</span></p>
            </div>
        </Link>
    )
}