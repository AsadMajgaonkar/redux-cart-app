import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const Shop = () => {
    const products = useSelector(state=>state.products)
  return (
    <div className="products-container">
        {products.map( item => <Product item={item}/>)}
    </div>
  )
}

export default Shop