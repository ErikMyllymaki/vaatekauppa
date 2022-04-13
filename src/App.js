import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Order from './pages/Order';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import AddCategories from './pages/AddCategories';
import ContactUs from './pages/ContactUs';


const URL = 'http://localhost/vaatekauppa_backend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  

  function addToCart(product) {
    if(cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1,product);
    } else {
    product['amount'] = 1;
    const newCart =[...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  return (
    <>
      <Header />
      <Navbar url={URL} cart={cart}/>
      <div className="container">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products/:categoryId/' element={<Products url={URL} addToCart={addToCart}/>}/>
          <Route path='/Products/:categoryId/:gender' element={<Products url={URL} addToCart={addToCart}/>}/>
          <Route path='/Products/:categoryId/:gender/:price' element={<Products url={URL} addToCart={addToCart}/>}/>
          <Route path="/order" element={<Order url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>} />
          <Route path="/AddCategories" element={<AddCategories url={URL} />} />
          <Route path='/ContactUs' element={<ContactUs url={URL}/>} />
          <Route path="/search/:searchPhrase" element={<Products url={URL} />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
