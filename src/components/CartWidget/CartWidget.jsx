import "./CartWidget.css"
import cart from './assets/shopping-cart.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{ display: cartQuantity() > 0 ? 'block' : 'none'}}>
            <img className = "ImgCart" src={cart} alt="cart-widget" />
            { cartQuantity() }
        </Link>
    )
}