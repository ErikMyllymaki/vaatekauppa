import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alaosat from './pages/Alaosat';
import Asusteet from './pages/Asusteet';
import Jalkineet from './pages/Jalkineet';
import Ylaosat from './pages/Ylaosat';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Alaosat' element={<Alaosat />}/>
          <Route path='/Asusteet' element={<Asusteet/>}/>
          <Route path='/Jalkineet' element={<Jalkineet />}/>
          <Route path='/Ylaosat' element={<Ylaosat />}/>
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
