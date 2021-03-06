import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar({ url, cart }) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/search/' + search);
      setSearch("");
    }
  }

  return (
    <>
      <nav id='nav' className="navbar navbar-expand-sm navbar-light">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">

          <div className="navbar-collapse text-center" id="navbarsExample11">
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
                <Link className='nav-link' to="/maintenance">Ylläpito</Link>
              </li>
              <form className="form-inline my-2 my-lg-0">
                <input value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => executeSearch(e)}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Hae"
                  aria-label="Search" />
              </form>
              <li className="nav-item">
                <Cart cart={cart} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
