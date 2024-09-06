import React from 'react'

const GroceryItem = ({name,onClick}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default GroceryItem