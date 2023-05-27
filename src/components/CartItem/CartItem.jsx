import './CartItem.css'
import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({name, price, quantity, id}) => {

  const {removeItem} = useContext (CartContext)

  return (
    <div>
      <section className='producto-carrito'>
        <h2>{name}</h2>
        <h2>Precio por unidad: ${price}</h2>
        <h2>{quantity}</h2>
        <button onClick={()=> removeItem(id)} className='Button'>Eliminar producto</button>
      </section>
    </div>
  )
}