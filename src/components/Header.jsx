import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const cartItems = useSelector(state=>state.cart.length)
  return (
    <div>
      <div className="header-contents">
        <h1>
          <Link to="/">Redux-Cart-App</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <h4>Visit Cart: {cartItems}</h4>
        </Link>
      </div>
    </div>
  )
}

export default Header