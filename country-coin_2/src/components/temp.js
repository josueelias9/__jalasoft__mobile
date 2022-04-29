import CompCountry from "./compCountry";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";


function Temp(props) {
    let { id } = useParams();

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(JSON.parse(localStorage.getItem('storage1')));
    }, []);

    let country = {};

    for (var i = 0; i < countries.length; i++) {
        if (parseInt(countries[i].numericCode) == id) {
            country = countries[i];
        }
    }

    function currency(event) {
        const val = event.target.value;
        if (!isNaN(val)) console.log("es un numero");
    }

    return <Container className="m-3 p-3">
        <CompCountry country={country} />
        <li>Population: {country.population}</li>
        <li>Area: {country.area}</li>
        <input onChange={currency}></input>
    </Container>;
}

export default Temp;