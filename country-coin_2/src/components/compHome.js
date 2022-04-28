import React, { useState, useEffect } from 'react';

const API_country = "https://restcountries.com/v2/lang/es";


function CompHome() {
  const [retrievedData, setRetrievedData] = useState('');

  useEffect(() => {
    async function apiGet() {
      const response = await fetch(API_country);
      const json = await response.json();
      setRetrievedData(json);
    }
    apiGet();
  }, []);

  function saveInLocalStorage() {
    localStorage.setItem('storage1', JSON.stringify(retrievedData));
  }

  return <div>
    <button onClick={saveInLocalStorage}>Save in local storage</button>
  </div>;
}

export default CompHome;