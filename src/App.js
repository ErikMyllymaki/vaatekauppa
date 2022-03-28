import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom';

const URL = 'http://localhost/vaatekauppa_backend/';

function App() {
  return (
    <>
      <Navbar url={URL}/>
      <div className="container">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products/:categoryId' element={<Products url={URL} />}/>
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
