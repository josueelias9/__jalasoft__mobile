import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import CompHome from './components/compHome';
import CompNavbar from './components/compNavbar';
import CompList from './components/compList';


function App() {
  return (
    <div className="App">
      <CompNavbar />
      <h1>Jalasoft Project</h1>
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/list" element={<CompList />} />
      </Routes>

    </div>
  );
}

export default App;
