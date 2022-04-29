import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import CompHome from './components/compHome';
import CompTopNavbar from './components/compTopNavbar';
import CompBotNavbar from './components/compBotNavbar';
import Temp from './components/temp';
import CompFilter from './components/compFilter';

function App() {
  return (
    <div className="App">

      <CompTopNavbar />
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/filter" element={<CompFilter />} />
        <Route path="/detail/:id" element={<Temp />} />
      </Routes>
      <CompBotNavbar />

    </div>
  );
}

export default App;
