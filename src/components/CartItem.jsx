import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementItemInCart, incrementItemInCart } from '../store/cartStore/reducer';

const CartItem = (props) => {

    const dispatch = useDispatch();
    const { productId, title, rate, price, imageURL, quantity } = props.item;

    return (
        <div className="cart-item-container">
          <div className="cart-item">
            <img src={imageURL} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{rate} ★ ★ ★ ★</p>
            </div>
          </div>
          <div className="item-price">${price}</div>
          <div className="item-quantity">
            <button onClick={()=>{dispatch(decrementItemInCart({productId}))}}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>{dispatch(incrementItemInCart({productId}))}}>+</button>
          </div>
          <div className="item-total">${quantity * price}</div>
        </div>
      )
}

export default CartItem