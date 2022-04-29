import React, { useState } from 'react';

import CompList from "./compList";

function CompModifier() {

    const elements = JSON.parse(localStorage.getItem('storage1'));

    const [data, setData] = useState(elements);
    const [varArea, setVarArea] = useState(true);
    const [varName, setVarName] = useState(true);
    const [varPopulation, setVarPopulation] = useState(true);

    function myFilter(event) {
        let elementsModified = elements.filter(
            (element) => {
                const stringThatIncludes = element.name.toLowerCase();
                const stringIncluded = event.target.value.toLowerCase();
                if (stringThatIncludes.includes(stringIncluded)) {
                    return element;
                }
            }
        );
        setData(elementsModified);
    }

    function sortByName() {
        let elementsModified;
        if (varName == true) {
            elementsModified = elements.sort(
                (a, b) => a.name > b.name ? 1 : -1
            );

            setVarName(!varName);
        }
        else if (varName == false) {
            elementsModified = elements.sort(
                (a, b) => a.name < b.name ? 1 : -1
            );
            setVarName(!varName);
        }
        setData(elementsModified);
    }

    function sortByPopulation() {
        let elementsModified;
        if (varPopulation == true) {
            elementsModified = elements.sort(
                (a, b) => a.population - b.population
            );
            setVarPopulation(!varPopulation);
        }
        else if (varPopulation == false) {
            elementsModified = elements.sort(
                (a, b) => b.population - a.population
            );
            setVarPopulation(!varPopulation);
        }
        setData(elementsModified);
    }

    function sortByArea() {
        let elementsModified;
        if (varArea == true) {
            elementsModified = elements.sort(
                (a, b) => a.area - b.area
            );
            setVarArea(!varArea);
        }
        else if (varArea == false) {
            elementsModified = elements.sort(
                (a, b) => b.area - a.area
            );
            setVarArea(!varArea);
        }
        setData(elementsModified);
    }

    console.log(data);

    return <div className="m-3 p-3">
        <input onChange={myFilter} />
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopulation}>Sort by population</button>
        <button onClick={sortByArea}>Sort by area</button>
        <CompList data={data} />
    </div>;
}


export default CompModifier;