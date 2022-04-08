import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

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
          <Link to={'/products/' + params.categoryId}>Kaikki tuotteet</Link>
          <Link to={'/products/' + params.categoryId + '/M'}>Miesten tuotteet</Link>
          <Link to={'/products/' + params.categoryId + '/N'}>Naisten tuotteet</Link>
      </div>
      <h3>{categoryName}</h3>
      {products.map(product => (
        <div key={product.id}>
          <div>
            <img className={active ? 'product_image_bigger' : 'product_image'} src={url + 'images/' + product.image} alt="tuotekuva"/>
          </div>
          {product.name}
          <button className='btn btn-primary' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
          <Link to={'/products/' + params.categoryId + '/' + product.id}>
            <button className={active ? 'hidden' : 'shown' + 'btn btn-primary'} type='button' onClick={() => setActive(!active)}>Näytä</button>
          </Link>
  
        </div>
      ))}
    </div>
  )
}
