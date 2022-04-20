import React, { useState } from 'react';
import axios from 'axios';

export default function AddProducts({ url }) {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [gender, setGender] = useState('');
    const [products, setProducts] = useState([]);


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
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }



    return (
        <>
            <form className='container' onSubmit={addProduct}>
                <h4 className='addProduct'>Lisää uusi Tuote</h4>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <label htmlFor="productName">Nimi:</label><br />
                        <input value={product} onChange={e => setProduct(e.target.value)} type="text" name="productName" id="productName"></input><br />
                    </div>
                    <div className='col-12 text-center'>
                        <label htmlFor="price">Hinta:</label><br />
                        <input value={price} onChange={e => setPrice(e.target.value)} type="text" name="price" id="price"></input><br />
                    </div>
                    <div className='col-12 text-center'>
                        <label htmlFor="category_id">Kategoria:</label><br />
                        <input value={category_id} onChange={e => setCategory_id(e.target.value)} type="text" name="category_id" id="category_id"></input><br />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="gender">Keille?</label><br />
                        <select className="" aria-label="Default select example" onChange={e => setGender(e.target.value)} name='gender'>
                            <option value='NULL'>Ei määritelty</option>
                            <option value='M'>Miehille</option>
                            <option value='N'>Naisille</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="">Lisää</button>


            </form>
        </>
    )
}
