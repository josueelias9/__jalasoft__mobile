import React, { useState } from 'react';

import CompList from "./compList";

function CompFilter() {

    const elements = JSON.parse(localStorage.getItem('storage1'));

    const [data, setData] = useState(elements);

    function myFilter(event) {
        let a = elements.filter(
            (element) => {
                const stringThatIncludes = element.name.toLowerCase();
                const stringIncluded = event.target.value.toLowerCase();
                if (stringThatIncludes.includes(stringIncluded)) {
                    return element;
                }
            }
        );
        setData(a);
    }

    function sortByName() {
        const elementsSorted = elements.sort(
            (a, b) => { return a.name - b.name }
        );
        setData(elementsSorted);
    }

    function sortByPopulation() {
        const elementsSorted = elements.sort(
            (a, b) => { return a.population - b.population }
        );
        setData(elementsSorted);
    }

    function sortByArea() {
        const elementsSorted = elements.sort(
            (a, b) => { return a.area - b.area }
        );
        setData(elementsSorted);
    }

    

    return <div className="m-3 p-3">
        <input onChange={myFilter} />
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopulation}>Sort by population</button>
        <button onClick={sortByArea}>Sort by area</button>
        <CompList data={data} />
    </div>;
}


export default CompFilter;