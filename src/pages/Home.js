
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <p className='welcome'>Tervetuloa vaatekauppaan!</p>
      </div>
      <div className="col-8">
        <div className='ylaosat'>
          <Link to="/products/1"><img src={require('../images/ylaosatmuokattu.jpg')} /></Link>
        </div>
        <div className='alaosat'>
        <Link to="/products/2"><img src={require('../images/alaosatmuokattu.jpg')} /></Link>
        </div>
        <div className='kengat'>
         <Link to="/products/3"><img src={require('../images/kengatmuokattu.jpg')} /></Link>
        </div>
        <div className='asusteet'>
        <Link to="/products/4"><img src={require('../images/asusteetmuokattu.jpg')} /></Link>
        </div>
      </div>
    </div>
  )
}
