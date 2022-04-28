import React, { useState } from 'react';

import CompList from "./compList";

function CompFilter() {

    const elements = JSON.parse(localStorage.getItem('storage1'));

    const [filteredList, setFilteredList] = useState(elements);

    function my_filter(event) {
        let a = elements.filter(
            (element) => {
                const stringThatIncludes = element.name.toLowerCase();
                const stringIncluded = event.target.value.toLowerCase();
                if (stringThatIncludes.includes(stringIncluded)) {
                    return element;
                }
            }
        );
        setFilteredList(a);
    }

    console.log(filteredList);

    return <div className="m-3 p-3">
        <input onChange={my_filter} />
        <CompList filteredList={filteredList} />
    </div>;
}


export default CompFilter;