import React from 'react'
import Category from './Category'

function Categories({productCategory}) {
  return (
    
    <div className="container mt-5">
    <h1>Categories</h1>
    <div id="categories" >
   {
    productCategory.map((category)=>
    <Category key={category.id} category = {category}/>
    )
   }
    </div>
  </div>
  )
}

export default Categories