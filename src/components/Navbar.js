import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar({ url, cart }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
    <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className='nav-link' to="/">Etusivu</Link>
                </li>
                <li className="nav-item btn-group school-options-dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tuotteet
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link
                        className='dropdown-item' to={'/products/' + category.id}>{category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/ContactUs">Ota yhteyttä</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/addcategories">Ylläpito</Link>
                </li>
                <li className="nav-item">
                  <Cart cart={cart} />
                </li>
            </ul>
        </div>
    </div>
</nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to="/">Etusivu</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tuotteet
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link
                        className='dropdown-item' to={'/products/' + category.id}>{category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/ContactUs">Ota yhteyttä</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/addcategories">Ylläpito</Link>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Cart cart={cart} />
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}
