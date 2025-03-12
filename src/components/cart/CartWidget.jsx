import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
    const { cantidadCarrito } = useContext(CartContext)

    return (
        <Link to="/cart" className="menu-link cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span className="numerito">{cantidadCarrito()}</span>
        </Link>
    )
}

export default CartWidget