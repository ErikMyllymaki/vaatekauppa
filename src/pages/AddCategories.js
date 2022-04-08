import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddCategories({ url }) {

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);



  function addCategory(e) {
    e.preventDefault();
    const json = JSON.stringify({name: category})

    axios.post(url + 'products/addcategories.php', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {


        setCategories(categories => [...categories, response.data])
        console.log(json)
        setCategory('')
      }).catch(error => {
        alert(error.response ? error.response.error : error)
      })
      window.location.reload(false);
  }

  return (
    <>
      <form onSubmit={addCategory}>
        <h4>Lisää kategoria</h4>
        <label htmlFor="categoryName">Kategorianimi</label>
        <input value={category} onChange={e => setCategory(e.target.value)} type="text" name="categoryName" id="categoryName"></input>
        <button type="submit" className="">Lisää kategorioita</button>
      </form>
    </>
  )
}
