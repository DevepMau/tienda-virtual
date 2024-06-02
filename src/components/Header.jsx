import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/ShoppingCartContext'

export default function Header() {

  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);
  console.log(cart);

  return (
    <header className='header'>
        <h1>Tienda virtual</h1>
        <nav>
          <Link to={'/'}><h4>Inicio</h4></Link>
          <Link to={'/productos'}><h4>Productos</h4></Link>
          <div className='Cart-link' >
            <Link to={'/carrito'}><h4>Carrito</h4></Link>
            <span>{quantity}</span>
          </div>
        </nav>
        <hr />
    </header>
  )
}
