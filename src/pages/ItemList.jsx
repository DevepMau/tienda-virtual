import React from 'react'
import Item from './Item';
import productsList from '../data/products.json';

export default function ItemList() {
  return (
    <div>
      {productsList.map((product, id) => {
        return <Item key={product.id} {...product} />
      })}
    </div>
  )
}
