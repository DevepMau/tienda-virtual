import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <h1>Tienda virtual</h1>
        <nav>
          <Link to={'/'}><h4>Inicio</h4></Link>
          <Link to={'/productos'}><h4>Productos</h4></Link>
          <Link to={'/carrito'}><h4>Carrito</h4></Link>
        </nav>
        <hr />
    </header>
  )
}
