import React from 'react'
import { Link } from 'react-router-dom';

export default function Maintenance() {
    return (
        <div>
            <Link to='/addcategories'><button>Lisää kategorioita</button></Link>
            <Link to='/addproducts'><button>Lisää tuotteita</button></Link>
        </div>
    )
}
