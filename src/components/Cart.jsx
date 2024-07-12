import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  
  const cartItems = useSelector(state => state.cart);

  return (
    <>
      {cartItems.length == 0 ? <h3>Add items to cart to view here.</h3> :
        <div className="cart-container">
          <h2>Items in Your Cart</h2>
          <div className="cart-items-container">
            <div className="cart-header cart-item-container">
              <div className="cart-item">Item</div>
              <div className="item-price">Price</div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            {cartItems.map(item => (
              <CartItem
                key={item.productId}
                item={item}
              />
            ))}
            <div className="cart-header cart-item-container">
              <div></div>
              <div></div>
              <div></div>
              {/* <div className="total">${totalPrice()}</div> */}
              <div className="total">${cartItems.reduce((acc, curr)=> acc + (curr.quantity*curr.price), 0).toFixed(2)}</div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Cart