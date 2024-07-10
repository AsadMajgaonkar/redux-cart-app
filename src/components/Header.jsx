import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header-contents">
        <h1>
          <Link to="/">Redux-Cart-App</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <h4>Visit Cart: 0</h4>
        </Link>
      </div>
    </div>
  )
}

export default Header