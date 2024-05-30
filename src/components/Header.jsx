import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <h1>Tienda virtual</h1>
        <nav>
            <a href='/'>inicio</a>
            <a href='/productos'>productos</a>
            <a href='/carrito'>carrito</a>
        </nav>
        <hr />
    </header>
  )
}
