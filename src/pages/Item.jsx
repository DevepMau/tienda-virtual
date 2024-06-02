import React from 'react'

export default function Item({ id, nombre, descripción, precio, categoría, imagen, stock }) {
  return (
    <div>
      <div>{nombre}</div>
      <img src={imagen} width={300} height={300} alt={nombre} />
      <div>${precio}</div>
      <button>
        buy
      </button>
    </div>
  )
}
