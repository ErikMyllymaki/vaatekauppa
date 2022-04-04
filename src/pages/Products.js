import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();
  
     useEffect(() => {
      axios.get(url + 'products/getproducts.php/' + params.categoryId + '/' + params.gender)
        .then((response) => {
          const json = response.data;
          setCategoryName(json.category);
          setProducts(json.products);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])


  return (
    <div>
      <div>
          <Link to={'/products/' + params.categoryId}>Kaikki tuotteet</Link>
          <Link to={'/products/' + params.categoryId + '/M'}>Miesten tuotteet</Link>
          <Link to={'/products/' + params.categoryId + '/N'}>Naisten tuotteet</Link>
      </div>
      <h3>{categoryName}</h3>
      {products.map(product => (
        <div key={product.id}>
          {product.name}
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
      ))}
    </div>
  )
}
