
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <p className='welcome'>Tervetuloa vaatekauppaan!</p>
      </div>
      <div className="col-8">
        <div className='container_img'>
          <Link to="/products/1"><img src={require('../images/ylaosatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <div className='text'>Yläosat</div>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/2"><img src={require('../images/alaosatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <div className='text'>Alaosat</div>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/3"><img src={require('../images/kengatmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <div className='text'>Kengät</div>
          </div>
        </div>
        <div className='container_img'>
          <Link to="/products/4"><img src={require('../images/asusteetmuokattu.jpg')} className='image' /></Link>
          <div className='middle'>
            <div className='text'>Asusteet</div>
          </div>
        </div>
      </div>
    </div>
  )
}
