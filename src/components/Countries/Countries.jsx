import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countriest.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, SetVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        SetVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <> 
        <h1>Total countries: {countries.length}</h1>
        <div>
            <h3>visited country: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries?.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
        </div>
        <div className="flag-container">
            {
                visitedFlags.map((flag, i) => <img key={i} src={flag}></img>)
            }
        </div>
            <div className="country-container">
            {countries?.map(country=><Country
                key={country.cca3}
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                ></Country>)}
            
        </div>
        </>
    );
};

export default Countries;