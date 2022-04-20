import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='head' className="container-fluid header">
        <Link to="/"><img src={require("../images/logoJ_E-removebg.png")} /></Link>
    </div>
  )
}
