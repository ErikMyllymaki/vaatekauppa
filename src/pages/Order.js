import React from 'react';
import uuid from 'react-uuid';
import App from '../App';

export default function Order({cart}) {
    let sum = 0;
  return (
    <div>
        <h3 className='header'>Items in cart</h3>
        <table className='table'></table>
        <tbody>
            {cart.map(product => {
                sum+=parseFloat(product.price);
                return (
                    <tr key={uuid()}>
                        <td>{product.name}</td>
                        <td>{product.price} €</td>
                        <td><a href='#' onClick={() => removeFromCart(product)}>Delete</a></td>
                    </tr>
                )
            })}
        </tbody>
    </div>
  )
}
