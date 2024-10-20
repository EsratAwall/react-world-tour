import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    // const passWithParams =() =>{
    //     handleVisitedCountry(country)
    // }
    // console.log(handleVisitedCountry);
    
    return (
        <div className={`country ${visited ? 'visited' : 'Non-visited'}`}>
            <h3 style={{color: visited ? 'Purple' : 'blue'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button><br/>
            <button onClick={() =>{handleVisitedFlags(country.flags.png)}}>Add Flags</button><br/>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetails country={country} 
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetails>
        </div>
    );
};

export default Country;