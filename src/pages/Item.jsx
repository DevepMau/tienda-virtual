import React, { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext';

export default function Item({ id, nombre, descripción, precio, categoría, imagen, stock }) {
  
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (item) => {
    // Verificar si el item ya está en el carrito
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Si ya existe, actualizamos la cantidad
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, cantidad: cartItem.cantidad + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      // Si no existe, agregamos el item al carrito con cantidad 1
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  }
  
  return (
    <div>
      <div>{nombre}</div>
      <img src={imagen} width={300} height={300} alt={nombre} />
      <div>${precio}</div>
      <button onClick={() => addToCart({ id, nombre, precio, categoría, imagen })} >
        buy
      </button>
    </div>
  )
}
