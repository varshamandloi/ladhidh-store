import React from 'react'
function ProductCard({product}) {
  return (
    <div className="product col-md-3 col-sm-6 col-6 shadow">
    <a href="Product.html">  <img src={product.img} alt=""/></a>
      <p>Net : {product.qty}</p>
      <a href="Product.html">
        <h1>{product.name}</h1>
      </a>
      <div className="pricing">
          <h3 className="text-danger">&#8377; {product.price}</h3>
          <button className="btn btn-danger ">Buy</button>
      </div>
  </div>
  )
}

export default ProductCard