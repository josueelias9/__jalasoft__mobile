import CompDetail from "./compDetail";

import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";


const API_country = "https://restcountries.com/v2/lang/es";


function CompList(props) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function api_get() {
            const response = await fetch(API_country);
            const json = await response.json();
            setCountries(json);
        }
        api_get();
    }, []);

    const listItems = countries.map((country) =>
        <Container className="m-3 p-3" key={country.population}>
            <CompDetail country={country} />
            <Link to={`/detail/${country.numericCode}`}>home</Link>
        </Container>);

    return listItems;
}

export default CompList;