import React from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import data from "../data.json"


export default function CountryDetails() {
    const { countryName } = useParams()
    const country = data.find(c => c.name === countryName)
    console.log(country)
    return (
        <div className="container mx-auto px-5 xl:px-0 dark:text-white">
            <Link to=".." className="w-30 shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-dark-elements rounded-lg flex items-center px-4 py-2 mt-10 gap-2">
                <FaArrowLeftLong />
                Back
            </Link>
            <div className="xl:flex items-center gap-20 mt-20 xl:h-96">
                <img className="w-full h-full" src={country.flags.png} alt="" />
                <div className="w-full">
                    <h2 className="font-bold text-3xl mt-10 xl:mt-0">{country.name}</h2>
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap:25 mt-5">
                        <div className="leading-8">
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Native Name </span>{country.nativeName}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Population </span>{country.population}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Region </span>{country.region}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Sub Region </span>{country.subregion}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Capital </span>{country.capital}</p>
                        </div>
                        <div className="leading-8">
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Top Level Domain </span>{country.topLevelDomain.join(", ")}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Currencies </span>{country.currencies.map(c => c.name).join(", ")}</p>
                            <p className="text-input dark:text-white font-extralight"><span className="text-black dark:text-white font-medium">Languages </span>{country.languages.map(l => l.name).join(", ")}</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <span className="font-medium">Border Countries</span>
                    </div>
                </div>
            </div>
        </div>
    )
}