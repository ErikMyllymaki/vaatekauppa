import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
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
          <Link to={'/products/' + params.categoryId}><button>Kaikki</button></Link>
          <Link to={'/products/' + params.categoryId + '/M'}><button>Miehille</button></Link>
          <Link to={'/products/' + params.categoryId + '/N'}><button>Naisille</button></Link>
      </div>
      <h3 className='categoryName'>{categoryName}</h3>
      {products.map(product => (
        <div key={product.id} className='productDiv'>
          <div>
            <img className={active ? 'product_image_bigger' : 'product_image'} src={url + 'images/' + product.image} alt="tuotekuva"/>
          </div>
          {product.name}
          <button className='' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
          <Link to={'/products/' + params.categoryId + '/' + product.id}>
            <button className={active ? 'hidden' : 'shown'} type='button' onClick={() => setActive(!active)}>Näytä</button>
          </Link>
  
        </div>
      ))}
    </div>
  )
}
