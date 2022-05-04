import React from 'react'
import { Link } from 'react-router-dom';

export default function Maintenance() {
    return (
        <div className="box">
            <h4 className='maintenanceHeader'>Lisää kategorioita tai tuotteita</h4>
            <div id='maintenance'>
                <Link to='/addcategories'><button>Uusi kategoria</button></Link>
                <Link to='/addproducts'><button>Uusi tuote</button></Link>
            </div>
        </div>
    )
}
