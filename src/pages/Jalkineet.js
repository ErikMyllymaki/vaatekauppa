import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Jalkineet() {

  const [shoes,setShoes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/vaatekauppa_backend/' + 'products/getshoes.php')
      .then((response) => {
        const json = response.data;
        setShoes(json);
        console.log(json)
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  return (
    <div>
      <h3>Kengät</h3>
      {shoes.map(shoe => (
        <div key={shoe.id}>
          {shoe.name}
        </div>
      ))}
    </div>
  )
}
