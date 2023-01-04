import React from 'react'

function Category({category}) {
  return (
    <div className="category deals">
    <img src={category.img} alt=""/>
    <p>{category.name}</p>
</div>
  )
}

export default Category