import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CompButton from './components/compButton';
import CompNavbar from './components/compNavbar';
import CompList from './components/compList';
import GetAPI from './components/api';


const paises = [
  {
    id: 1,
    nombre: 'peru',
    capital: 'lima',
    habitantes: '123123'
  }, {
    id: 2,
    nombre: 'bolivia',
    capital: 'lima',
    habitantes: '123123'
  }
  , {
    id: 3,
    nombre: 'chile',
    capital: 'lima',
    habitantes: '123123'
  }

];

function App() {
  return (
    <div className="App">
      <CompNavbar />
      <GetAPI />
      <h1>Jalasoft Project</h1>
      <Routes>
        <Route path="/" element={<CompButton />} />
        <Route path="devolver" element={<CompList paises={paises} />} />
      </Routes>

    </div>
  );
}

export default App;
