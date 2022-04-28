import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';


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

  return <Container>
    <Accordion defaultActiveKey={['0']} alwaysOpen className="m-3 p-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>About...</Accordion.Header>
        <Accordion.Body>
          jalasoft bootcamp exercise. It emphasizes the use of tools for frontend development. Two APIs are offered for data consumption. The exercise is detailed in the repository of this project. 
          <a href="https://github.com/josueelias9/reto-jalasoft"> Go to the repository</a>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How you can use this app...</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Button variant="warning" onClick={saveInLocalStorage} className="m-3 p-3">Save in local storage</Button>{' '}
  </Container>
}

export default CompHome;