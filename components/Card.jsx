export default function Card({ data }) {
    return (
        <div className="bg-white w-70 shadow-sm">
            <img src={data.flags.png} alt="" />
            <div className="p-6">
                <h2 className="font-bold text-2xl mb-4">{data.name}</h2>
                <p>Population: <span className="text-input">{data.population.toLocaleString()}</span></p>
                <p>Region: <span className="text-input">{data.region}</span></p>
                <p>Capital: <span className="text-input">{data.capital}</span></p>
            </div>
        </div>
    )
}