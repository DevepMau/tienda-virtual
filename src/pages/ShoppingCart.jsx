import React, { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'

export default function ShoppingCart() {
  
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);
  
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            <div>{product.cantidad}</div>
            <div>{product.nombre}</div>
            <div>${product.precio * product.cantidad}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
