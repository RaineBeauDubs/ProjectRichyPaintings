import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="nav">
      <Link className="title" to="/">Richy's Masterpieces</Link>
      <div>
        <Link className="navlink" to="/">About</Link> 
        <Link className="navlink" to="/">Commissions</Link>
        <Link className="navlink" to="/">Gallery</Link>
        <Link className="navlink" to="/">Locations</Link>
        <Link className="navlink" to="/">Store</Link>
      </div>
    </div>
  )
}

export default Navigation; 