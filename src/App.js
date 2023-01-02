import './App.css';
import Home from './components/Home';
import About from './components/About';
import Drinks from './components/Drinks';
import Contact from './components/Contact';

import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
