import React, { useState } from 'react';
import axios from 'axios';

export default function AddProducts({ url }) {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [gender, setGender] = useState('');
    const [products, setProducts] = useState([]);


    function addProduct(e) {
        e.preventdefault();

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
                <label htmlFor="productName">Nimi:</label><br />
                <input value={product} onChange={e => setProduct(e.target.value)} type="text" name="productName" id="productName"></input><br />

                <label htmlFor="price">Hinta:</label><br />
                <input value={price} onChange={e => setPrice(e.target.value)} type="text" name="price" id="price"></input><br />

                <label htmlFor="category_id">Kategoria</label><br />
                <input value={category_id} onChange={e => setCategory_id(e.target.value)} type="text" name="category_id" id="category_id"></input><br />

                <label htmlFor="gender">Miehille/Naisille:</label><br />
                <input value={gender} onChange={e => setGender(e.target.value)} type="text" name="gender" id="gender"></input><br />

                <button type="submit" className="">Lisää</button>
            </form>
        </>
    )
}
