import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CompButton from './components/compButton';
import CompNavbar from './components/compNavbar';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<CompButton />} />
        <Route path="about" element={<CompNavbar />} />
      </Routes>

      asdasd
    </div>
  );
}

export default App;
