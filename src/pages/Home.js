
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row home">
      <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
        <p className='welcome'><br>Vanhat ryysyt pois päältä,</br> uudet vaatteet osta täältä!</p>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
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
