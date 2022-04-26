import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddCategories({ url }) {

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [finished, setFinished] = useState(false)



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
        setFinished(true);
      }).catch(error => {
        alert(error.response ? error.response.error : error)
      })

  }

  if (!finished) {

  return (
    <>
      <form className='box' onSubmit={addCategory}>
        <h4 className='addCategory'>Lisää uusi kategoria</h4>
        <label className="textbox" htmlFor="categoryName">Kategorian nimi:</label><br/>
        <input className="textbox" value={category} onChange={e => setCategory(e.target.value)} type="text" name="categoryName" id="categoryName"></input><br/>
        <button type="submit" className="">Lisää</button>
      </form>
    </>
  )} else {
    return (
      <div className="box">
        <h4>Kategoria lisätty.</h4>
      </div>
    )
}
}
