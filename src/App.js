import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';

const URL = 'http://localhost/vaatekauppa_backend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    const newCart =[...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <>
      <Header />
      <Navbar url={URL} cart={cart}/>
      <div className="container">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products/:categoryId' element={<Products url={URL} addToCart={addToCart}/>}/>
          <Route path='/order' element={<Order cart={cart} />}/>
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
