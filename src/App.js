import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import About from "./components/About";
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Reserve from './components/Reserve';
import Footer from "./components/Footer";
import Reservation from './components/Reservation'
import Homepage from './components/Homepage'

function App() {
  return (
    <BrowserRouter>
        <Routes>  {/* Replace sections with Routes */}
          <Route index element ={<Homepage />} />
          <Route path='/' element ={ <Homepage />} />
          <Route path="/about" element={<About />} /> {/* Route for About */}
          <Route path="/menu" element={<Menu />} /> {/* Route for Menu */}
          <Route path="/reviews" element={<Reviews />} /> {/* Route for Reviews */}
          <Route path="/reserve" element={<Reserve />} /> {/* Route for Reserve */}
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
