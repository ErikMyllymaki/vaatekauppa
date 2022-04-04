
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <p className='welcome'>Tervetuloa vaatekauppaan!</p>
      </div>
      <div className="col-6">
        <div className='container_img'>
          <Link to="/products/1"><img src={require('../images/ylaosatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <a className='text' href="/products/1">Yläosat</a>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/2"><img src={require('../images/alaosatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <a className='text' href="/products/2">Alaosat</a>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/3"><img src={require('../images/kengatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <a className='text' href="/products/3">Kengät</a>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/4"><img src={require('../images/asusteetmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <a className='text' href="/products/4">Asusteet</a>
          </div>
        </div>
      </div>
    </div>
  )
}
