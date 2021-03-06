import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProducts({ url }) {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [gender, setGender] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [finished, setFinished] = useState(false)



    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
          .then((response) => {
            const json = response.data;
            setCategories(json);
            setCategory_id(json[0].id)
          }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
          })
      }, [])


    function addProduct(e) {
        e.preventDefault();

        const json = JSON.stringify({ name: product, price: price, gender: gender, category_id: category_id })

        axios.post(url + 'products/addproducts.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const updatedProducts = [...products, response.data]
            setProducts(updatedProducts)
            setFinished(true);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }


    if (!finished) {

    return (
        <>
            <form className='box' onSubmit={addProduct}>
                <h4 className='addProduct'>Lisää uusi tuote</h4>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <label htmlFor="productName">Nimi:</label><br />
                        <input className="textbox" value={product} onChange={e => setProduct(e.target.value)} type="text" name="productName" id="productName" required></input><br />
                    </div>
                    <div className='col-12 text-center'>
                        <label htmlFor="price">Hinta:</label><br />
                        <input className="textbox" value={price} onChange={e => setPrice(e.target.value)} type="text" name="price" id="price" required></input><br />
                    </div>

                    <div className='col-12 text-center'>
                        <label htmlFor="">Kategoria:</label><br />
                        <select className="textbox" onChange={e => setCategory_id(e.target.value)} value={category_id}>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className='col-12'>
                        <label htmlFor="gender">Sukupuoli:</label><br />
                        <select className="textbox" aria-label="Default select example" onChange={e => setGender(e.target.value)} name='gender'>
                            <option value='NULL'>Ei määritelty</option>
                            <option value='M'>Miehille</option>
                            <option value='N'>Naisille</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="addProductButton">Lisää</button>


            </form>
        </>
    )} else {
        return (
          <div className="box">
            <h4>Tuote lisätty.</h4>
          </div>
        )
    }
}
