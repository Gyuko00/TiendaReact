import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cart/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Proyecto Tienda Virtual</h1></Link>
        <ul className="menu">
            <li><Link to="/" className="menu-link">Home</Link></li>
            <li><Link to="/products" className="menu-link">Products</Link></li>
            <li><Link to="/products/medias" className="menu-link">Medias</Link></li>
            <li><Link to="/products/pantalones" className="menu-link">Pantalones</Link></li>
            <li><Link to="/products/remeras" className="menu-link">Remeras</Link></li>
            <li><Link to="/products/buzos" className="menu-link">Buzos</Link></li>
            <li><Link to="/about" className="menu-link">About us</Link></li>
            <li><Link to="/contact" className="menu-link">Contact</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar