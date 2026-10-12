import React from 'react'



const ProuductBage = ({ status }) => {
  const base = 'px-3 py-1 rounded-2xl text-sm font-medium'
  const inStock = 'bg-green-100 text-green-700'
  const outOfStock = 'bg-red-100 text-red-700'

  return (
    <span className={`${base} ${status === 'In Stock' ? inStock : outOfStock}`}>
      {status}
    </span>
  )
}

export default ProuductBage
