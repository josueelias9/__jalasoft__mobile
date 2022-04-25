import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import DetailCountry from './pagina_1/DetailCountry';
import ListCountry from './pagina_1/ListCountry';
import GetAPI from './pagina_1/api';
const paises = [
  {
    id:1,
    pais: 'japon',
    capital: 'honkong'
  }, {
    id:2,
    pais: 'peru',
    capital: 'lima'
  }, {
    id:3,
    pais: 'ecuador',
    capital: 'quito'
  }, {
    id:4,
    pais: 'peru',
    capital: 'lima'
  }];


function App() {
  const location = {
    pathname: '/somewhere',
    search: "?sort=name"
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/list">list</Link>
            </li>
            <li>
              <Link to='/api'>api</Link>
            </li>
            <li>
              <Link to={location}>casa</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/list" element={<ListCountry paises={paises} />} />
          <Route path="/detail/:id" element={<DetailCountry />} />
          <Route path="/api" element={<GetAPI/>} />
        </Routes>
      </div>
    </Router>
    //    <div className="App">
    //      <header className="App-header">
    //        <img src={logo} className="App-logo" alt="logo" />
    //        <p>
    //          Edit <code>src/App.js</code> and save to reload.
    //        </p>
    //        <a
    //          className="App-link"
    //          href="https://reactjs.org"
    //          target="_blank"
    //          rel="noopener noreferrer"
    //        >
    //          Learn React
    //        </a>
    //      </header>
    //    </div>
  );


}


export default App;
