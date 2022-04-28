import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import CompHome from './components/compHome';
import CompNavbar from './components/compNavbar';
import Temp from './components/temp';
import CompFilter from './components/compFilter';


function App() {
  return (
    <div className="App">
      <CompNavbar />
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/filter" element={<CompFilter />} />
        <Route path="/detail/:id" element={<Temp />} />
      </Routes>

    </div>
  );
}

export default App;
