import React from 'react'
import ProductCard from './ProductCard'

function Deals({productDetail}) {
  return (
    <div className="container mt-5">
    <span><h1>Today's Deals</h1></span>
    <div className="featured-products row g-4">
    {
        productDetail.map((product)=>
        <ProductCard key={product.id} product = {product}/>
        )
    }
    </div>
    </div> 
  )
}

export default Deals