import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Link to='/'>
                <h2>Beste Theater</h2>
            </Link>
            <div className= "nav-btn-div">
                <NavLink to={`/category/lightning`} className = {({isActive}) => isActive ? 'ActiveOption' : 'itemBtn'}>Lightning</NavLink >
                <NavLink to={`/category/sound`} className = {({isActive}) => isActive ? 'ActiveOption' : 'itemBtn'}>Sound</NavLink >
                <NavLink to={`/category/scenography`} className = {({isActive}) => isActive ? 'ActiveOption' : 'itemBtn'}>Scenography</NavLink >
                <NavLink to={`/category/costumes`} className = {({isActive}) => isActive ? 'ActiveOption' : 'itemBtn'}>Costumes</NavLink >
                <CartWidget/>
            </div>
            
        </nav>
    )
}