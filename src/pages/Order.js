import React from 'react';
import uuid from 'react-uuid';
import App from '../App';
import removeFromCart from '../App';
import { useState, useEffect } from 'react';
import updateAmount from '../App';
import { createRef } from 'react';
import axios from 'axios';


export default function Order({ cart, removeFromCart, updateAmount, url, empty }) {


  const [inputs, _] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [active, setActive] = useState(false)
  const [finished, setFinished] = useState(false)


  let sum = 0;

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = createRef();
    }

  }, [cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  }, [cart])

  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  }

  function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      address: address,
      zip: zip,
      city: city,
      cart: cart,
    });
    axios.post(url + 'order/save.php',json, {
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      empty();
      setFinished(true);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    })
  }

  function showTotalPrice(sum) {
    if (sum > 0) {
      return (
      <tr key={uuid()}>
        <td></td>
        <td>Yhteishinta: {sum.toFixed(2)} €</td>
        <td></td>
        <td></td>
      </tr>
    )} else {
      return (
      <tr>
        <td></td>
        <td className='emptyCartText'>Ostoskorissa ei ole tuotteita.</td>
        <td></td>
        <td></td>
      </tr>   
       )}
    
 
  }

  if (!finished) {

  return (
    <div>
      <h3 className=''>Ostoskori</h3>
      <table className='table'>
        <tbody>
          {cart.map((product, index) => {
            sum += parseFloat(product.price * product.amount);
            return (
              <tr key={uuid()}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                  <input type="number" min="1" ref={inputs[index]} style={{ width: '60px' }} value={product.amount} onChange={e => changeAmount(e, product)} />
                </td>
                <td><a href='#' onClick={() => removeFromCart(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg></a></td>
              </tr>
            )
          })}
          {showTotalPrice(sum)}
        </tbody>
      </table>
      {cart.length > 0 &&
      <>
      <div><button onClick={() => empty()}>Tyhjennä ostoskori</button></div>
      <button className='addtocart' onClick={() => setActive(!active)}>{active ? 'Piilota tilauslomake' : 'Tilaa'}</button>
      <form onSubmit={order} className={active ? 'shown' : 'hidden'}>
      <h3>Asiakastiedot</h3>
        <div className="form-group">
          <label htmlFor="">Etunimi*</label>
          <input className="form-control" onChange={e => setFirstname(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="">Sukunimi*</label>
          <input className="form-control" onChange={e => setLastname(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="">Osoite*</label>
          <input className="form-control" onChange={e => setAddress(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="">Postinumero*</label>
          <input className="form-control" onChange={e => setZip(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="">Postitoimipaikka*</label>
          <input className="form-control" onChange={e => setCity(e.target.value)} required/>
        </div>
        <div className="buttons addtocart">
          <button className='addtocart'>Tilaa</button>
        </div>
      </form>
      </>
      }
    </div>
  )} else {
    return (
      <div>
        <h2>Kiitos tilauksestasi!</h2>
        <p>Tilauksesi lähetetään mahdollisimman pian!</p>
      </div>
    )
  }
}
