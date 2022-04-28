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
            console.log(countries[i].name);
            console.log("es igual!");
            country = countries[i];
        }
    }

    return <Container className="m-3 p-3"><CompCountry country={country} /></Container>;
}

export default Temp;