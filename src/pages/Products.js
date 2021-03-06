import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [price, setPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [showText, setShowText] = useState(false)
  let params = useParams();
  
  const shoeSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];  


  useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId + '/' + params.gender + '/' + params.price;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setCategoryName(json.category);
          setProducts(json.products);
        } else {
          setCategoryName(params.searchPhrase);
          setProducts(json);
        }
      })
  }, [params])


  useEffect(() => {

    if (products.length === 1) {
      setActive(true)
    } else {
      setActive(false)
    }

  }, [products.length])

  useEffect(() => {
    axios.get(url + 'products/getsizes.php')
      .then((response) => {
        const json = response.data;
        setSizes(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])



  function showSeparation() {
    if (params.searchPhrase === undefined && params.price != 'show') {
      return (
        <div className='separation'>
          <div>
            <Link to={'/products/' + params.categoryId + '/0/' + params.price}><button>Kaikki</button></Link>
            <Link to={'/products/' + params.categoryId + '/M/' + params.price}><button>Miehille</button></Link>
            <Link to={'/products/' + params.categoryId + '/N/' + params.price}><button>Naisille</button></Link>
          </div>
        </div>
      )
    }
  }

  function showMaxPrice(length) {
    if (params.searchPhrase === undefined) {
      if (length >= 0 && params.price != 'show') {
        return (
          <div>
            <label htmlFor="maxPrice">Maximihinta:</label>
            <input min={1} value={price} onChange={e => setPrice(e.target.value)} className='maxPrice' type="number" />
            <Link to={'/products/' + params.categoryId + '/' + params.gender + '/' + price}><button>Hae</button></Link>
          </div>
        )
    }
  }
  }

  function showPrice(price) {
    if (price > 0) {
      if (params.gender === 'M') {
        return (
          <h5>N??ytet????n alle <strong>{price} ???</strong> maksavat miesten tuotteet</h5>
        )
      } else if (params.gender === 'N'){
          return <h5>N??ytet????n alle <strong>{price} ???</strong> maksavat naisten tuotteet</h5>
      } else {
        return <h5>N??ytet????n kaikki alle <strong>{price} ???</strong> maksavat tuotteet</h5>
      }

    }
  }

  function showSizes() {
    if (params.categoryId == 1 || params.categoryId == 2) {
      return (
        <select className="textbox" value={sizes.id}>
            {sizes.map(sizes => (
              <option key={sizes.id} value={sizes.id}>{sizes.size}</option>
        ))}</select>
      )
    } else if (params.categoryId == 3) {
      return (
      <select className="textbox" >
        {shoeSizes.map(size => (
          <option >{size}</option>
        ))}</select>
      )
    }
  }

  function showAddedText() {
    setShowText(true);
    setTimeout(function() {
      setShowText(false)
    }, 3000);
  }

  return (
    <div>
      {showSeparation()}
      {showMaxPrice(products.length)}
      {showPrice(params.price)}
      {showText ? <div id='addedText' className='addedText'>Tuote lis??tty ostoskoriin</div> : <div className='addedText'></div>}

      <h3 className='categoryName'>{categoryName}</h3>
      <div className='row'>
        {products.map(product => (
          <div key={product.id} className={active ? 'col-12' : 'productDiv col-md-4 col-sm-6'}>
            <div>
              <img className={active ? 'product_image_bigger' : 'product_image'} src={url + 'images/' + product.image} alt="tuotekuva" />
            </div>
            <div className='productNameAndPrice'>
              {product.name}&nbsp;
              {product.price} ???<br />
            </div>
            {showSizes()}
            <button className='addtocart' type='button' onClick={e => {addToCart(product); showAddedText();}}>Lis???? ostoskoriin</button>
            <Link to={'/products/' + product.category_id + '/' + product.id + '/show'}>
              <button className={active ? 'hidden' : 'shown'} type='button' onClick={() => setActive(!active)}>N??yt??</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}
