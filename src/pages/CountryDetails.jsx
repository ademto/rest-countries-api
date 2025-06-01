import React from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import data from "../data.json"


export default function CountryDetails() {
    const { countryName } = useParams()
    const country = data.find(c => c.name === countryName)
    console.log(country)
    return (
        <div className="container mx-auto">
            <Link to=".." className="w-30 shadow-md flex items-center px-4 py-2 mt-10 gap-2">
                <FaArrowLeftLong />
                Back
            </Link>
            <div className="flex items-center gap-20 mt-20 h-96">
                <img className="w-full h-full" src={country.flags.png} alt="" />
                <div className="w-full">
                    <h2 className="font-bold text-3xl">{country.name}</h2>
                    <div className="flex gap-25 mt-5">
                        <div className="leading-8">
                            <p className="text-input"><span className="text-black font-medium">Native Name </span>{country.nativeName}</p>
                            <p className="text-input"><span className="text-black font-medium">Population </span>{country.population}</p>
                            <p className="text-input"><span className="text-black font-medium">Region </span>{country.region}</p>
                            <p className="text-input"><span className="text-black font-medium">Sub Region </span>{country.subregion}</p>
                            <p className="text-input"><span className="text-black font-medium">Capital </span>{country.capital}</p>
                        </div>
                        <div className="leading-8">
                            <p className="text-input"><span className="text-black font-medium">Top Level Domain </span>{country.topLevelDomain.join(", ")}</p>
                            <p className="text-input"><span className="text-black font-medium">Currencies </span>{country.currencies.map(c => c.name).join(", ")}</p>
                            <p className="text-input"><span className="text-black font-medium">Languages </span>{country.languages.map(l => l.name).join(", ")}</p>
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