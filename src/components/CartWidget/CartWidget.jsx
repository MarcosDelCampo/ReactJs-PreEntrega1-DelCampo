import "./CartWidget.css"
import cart from './assets/shopping-cart.png'

export const CartWidget = () => {
    return (
        <div className= "cartDiv">
            <img src={cart} alt="cart-widget" className = "ImgCart"/>
            <p className="cart-acc-number">{0}</p>
        </div>
    )
}