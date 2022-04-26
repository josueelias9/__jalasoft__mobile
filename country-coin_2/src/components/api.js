
import React, { useState, useEffect } from 'react';

const API_country = "https://restcountries.com/v2/lang/es";


async function api_get() {
    const response = await fetch(API_country);
    const data = await response.json();

    return data;
}

function GetAPI(props) {

    useEffect(() => { 
        api_get().then(
            (response) => {
                console.log(response)
            }
        );
    });
    return <div>asdas</div>;
}


export default GetAPI;