import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDeteil.css';
const CountryDeteil = () => {

   const {cntId} = useParams();

   const [country, setCountry] = useState({});
   useEffect(() =>{
    const url = `https://restcountries.eu/rest/v2/name/${cntId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {

       data.map(pd => setCountry(pd))
    })
   }, []);

    console.log(country)
    const {flag, name, capital, region, area, demonym, nativeName, population, numericCode} = country;
    return (
        <div className="country-deteil">
            <img src={flag} alt="contry"/>
            <h2>Country:{country.name}</h2>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Demonym: {demonym}</p>
            <p>NativeName: {nativeName}</p>
            <p>Population: {population}</p>
            <p>NumericCode: {numericCode}</p>
        </div>
    );
};

export default CountryDeteil;