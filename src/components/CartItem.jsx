import React from 'react'

const CartItem = (props) => {
    const { title, rating, price, imageUrl, quantity } = props.item
    return (
        <div className="cart-item-container">
          <div className="cart-item">
            <img src={imageUrl} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{rating} ★ ★ ★ ★</p>
            </div>
          </div>
          <div className="item-price">${price}</div>
          <div className="item-quantity">
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
          </div>
          <div className="item-total">${quantity * price}</div>
        </div>
      )
}

export default CartItem