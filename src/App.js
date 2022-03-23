import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alaosat from './pages/Alaosat';
import Asusteet from './pages/Asusteet';
import Jalkineet from './pages/Jalkineet';
import Ylaosat from './pages/Ylaosat';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
