import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'

import { useParams } from "react-router-dom"



export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </div>   
    )
}

