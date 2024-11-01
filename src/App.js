import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Header';
import Home from './components/Home';
import Particle from './components/Particle';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contactform from './components/Contactform';
import Services from './components/Services';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>       
            <Route path="/" element={<><Navbar/><Home/><AboutUs/><Projects/><Contactform/></>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;