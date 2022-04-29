import CompCountry from "./compCountry";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup'

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

<<<<<<< Updated upstream
    return <Container className="m-3 p-3"><CompCountry country={country} /></Container>;
=======
    function currency(event) {
        const val = event.target.value;
        if (!isNaN(val)) console.log("es un numero");
    }

    async function getApiCurrency(){
        const currencyUrl="https://api.exchangerate.host/convert?from=BOB&to=UYU&amount=1";
        const response = await fetch(currencyUrl);
        const value = await response.json();
    }

    return <Container className="m-3 p-3">
        <CompCountry country={country} />
        <h1 className="m-3 p-3">Aditional information</h1>
        <ListGroup variant="flush">
            <ListGroup.Item>Population: {country.population}</ListGroup.Item>
            <ListGroup.Item>Area: {country.area}</ListGroup.Item>
            <ListGroup.Item>Currency:</ListGroup.Item>
            <ListGroup.Item>Currency exchange: <input onChange={currency}></input></ListGroup.Item>
        </ListGroup>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </Container>;
>>>>>>> Stashed changes
}

export default Temp;