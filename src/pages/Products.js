import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [price, setPrice] = useState(0)
  let params = useParams();
  
     useEffect(() => {
      axios.get(url + 'products/getproducts.php/' + params.categoryId + '/' + params.gender + '/' + params.price)
        .then((response) => {
          const json = response.data;
          setCategoryName(json.category);
          setProducts(json.products);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])

    useEffect(() => {
      
      if (products.length === 1) {
        setActive(true)
      } else {
        setActive(false)
      }
  
    }, [products.length])
    

  return (
    <div>
      <div>
          <Link to={'/products/' + params.categoryId}><button>Kaikki</button></Link>
          <Link to={'/products/' + params.categoryId + '/M'}><button>Miehet</button></Link>
          <Link to={'/products/' + params.categoryId + '/N'}><button>Naiset</button></Link>
      </div>
      <div>
      <label htmlFor="maxPrice">Max hinta:</label>
          <input min={1} value={price} onChange={e => setPrice(e.target.value)} className='maxPrice' type="number" placeholder='Tuotteen maksimihinta €'/>
      </div>
      <Link to={'/products/' + params.categoryId + '/' + params.gender + '/' + price}><button>Hae</button></Link>
      <h3 className='categoryName'>{categoryName}</h3>
      <div className='row'>
      {products.map(product => (
        <div key={product.id} className='productDiv col-md-4 col-sm-6'>
          <div>
            <img className={active ? 'product_image_bigger' : 'product_image'} src={url + 'images/' + product.image} alt="tuotekuva"/>
          </div>
          {product.name}&nbsp;
          {product.price}€
          <button className='' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
          <Link to={'/products/' + params.categoryId + '/' + product.id}>
            <button className={active ? 'hidden' : 'shown'} type='button' onClick={() => setActive(!active)}>Näytä</button>
          </Link>
  
        </div>
      ))}
      </div>
    </div>
  )
}
