import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className = "NavBar">
            <h2>Beste Theater</h2>
            <div className= "nav-btn-div">
                <button className = "itemBtn">Lightning</button>
                <button className = "itemBtn">Sound</button>
                <button className = "itemBtn">Scenography</button>
                <button className = "itemBtn">Costumes</button>
                <CartWidget/>
            </div>
            
        </nav>
    )
}