import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, clearCart, cartQuantity, cartTotal} = useContext(CartContext)

    if(cartQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='CartFooter'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h2>Total: ${cartTotal()}</h2>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Button'>Checkout</Link>
        </div>
    )
}