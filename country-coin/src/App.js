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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/list">list</Link>
            </li>
            <li>
              <Link to="/detail">detail</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/detail" element={<DetailCountry/>} />
          <Route path="/list" element={<ListCountry/>} />
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
