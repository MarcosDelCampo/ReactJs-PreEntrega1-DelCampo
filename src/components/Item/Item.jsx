import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id, name, img, price, stock}) => {
    return (
        <article className = 'CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            
                <img src={img} alt={name} className='ItemImg' />
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to= {`/item/${id}`} className='ItemBtn'>Ver detalle</Link>
            </footer>
        </article>
    )
}