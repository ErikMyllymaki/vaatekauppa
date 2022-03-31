import React from 'react';
import uuid from 'react-uuid';
import App from '../App';
import removeFromCart from '../App';
import { useState } from 'react';
import updateAmountfrom from '../App';

export default function Order({cart,removeFromCart,updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    let sum = 0;

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }

  return (
    <div>
        <h3 className=''>Items in cart</h3>
        <table className='table'>
        <tbody>
            {cart.map((product,index) => {
                sum+=parseFloat(product.price);
                return (
                    <tr key={uuid()}>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td>
                            <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product)} />
                        </td>
                        <td><a href='#' onClick={() => removeFromCart(product)}>Delete</a></td>
                    </tr>
                )
            })}
            <tr key={uuid()}>
                <td></td>
                <td>{sum.toFixed(2)} €</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}
