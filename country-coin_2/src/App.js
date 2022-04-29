import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import CompHome from './components/compHome';
import CompNavbar from './components/compNavbar';
import Temp from './components/temp';
import Project from './components/compProject';

function App() {
  return (
    <div className="App">

<CompNavbar />      
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/project" element={<Project />} />
        <Route path="/detail/:id" element={<Temp />} />
      </Routes>

    </div>
  );
}

export default App;
