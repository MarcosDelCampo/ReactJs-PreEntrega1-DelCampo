import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({name, price, quantity, id}) => {

  const {removeItem} = useContext (CartContext)

  return (
    <div>
      <section className='producto-carrito'>
        <h4>{name}</h4>
        <h4>Precio por unidad: ${price}</h4>
        <h4>{quantity}</h4>
        <button onClick={()=> removeItem(id)} className='btn'>Eliminar producto</button>
      </section>
    </div>
  )
}