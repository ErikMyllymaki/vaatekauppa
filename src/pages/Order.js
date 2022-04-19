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
    console.log(json.cart)
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

  function showClientInfo() {

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
                <td><a href='#' onClick={() => removeFromCart(product)}>Delete</a></td>
              </tr>
            )
          })}
          {showTotalPrice(sum)}
        </tbody>
      </table>
      {cart.length > 0 &&
      <>
      <button onClick={() => setActive(!active)}>{active ? 'Piilota tilauslomake' : 'Tilaa'}</button>
      <form onSubmit={order} className={active ? 'shown' : 'hidden'}>
      <h3>Asiakastiedot</h3>
        <div className="form-group">
          <label htmlFor="">Etunimi:</label>
          <input className="form-control" onChange={e => setFirstname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Sukunimi:</label>
          <input className="form-control" onChange={e => setLastname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Osoite</label>
          <input className="form-control" onChange={e => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Postinumero</label>
          <input className="form-control" onChange={e => setZip(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Postitoimipaikka</label>
          <input className="form-control" onChange={e => setCity(e.target.value)} />
        </div>
        <div className="buttons">
          <button>Tilaa</button>
        </div>
      </form>
      </>
      }
    </div>
  )} else {
    return (
      <h2>Kiitos tilauksestasi!</h2>
    )
  }
}
