import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container-fluid header">
        <Link to="/"><img src={require("../images/logoJ_E.png")} /></Link>
    </div>
  )
}
