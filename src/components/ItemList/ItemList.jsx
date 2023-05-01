import './ItemList.css'
import { Item } from '../Item/Item'


export const ItemList = ({products}) => {
    return(
        <div className='ItemList'>
            {products.map(product => <Item key={product.id}{...product} />)}
        </div>
    )
}