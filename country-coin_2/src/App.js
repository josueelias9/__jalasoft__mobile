import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CompHome from './components/compHome';
import CompNavbar from './components/compNavbar';
import CompList from './components/compList';
import Temp from './components/temp';

function App() {
  return (
    <div className="App">
      <CompNavbar />
      <h1>Jalasoft Project</h1>
      <li><Link to="/">home</Link></li>
      <li><Link to="/list">lista de paises</Link></li>
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/list" element={<CompList />} />
        <Route path="/detail/:id" element={<Temp />} />
      </Routes>

    </div>
  );
}

export default App;
