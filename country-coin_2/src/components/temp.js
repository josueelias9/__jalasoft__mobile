import CompDetail from "./compDetail";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const API_country = "https://restcountries.com/v2/lang/es";


function Temp(props) {
    let { id } = useParams();

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function api_get() {
            const response = await fetch(API_country);
            const json = await response.json();
            setCountries(json);
        }
        api_get();
    }, []);

    let country = {};

    for (var i = 0; i < countries.length; i++) {
        if (parseInt(countries[i].numericCode) == id) {
            console.log(countries[i].name);
            console.log("es igual!");
            country = countries[i];
        }
    }

    return <Container className="m-3 p-3"><CompDetail country={country} /></Container>;
}

export default Temp;