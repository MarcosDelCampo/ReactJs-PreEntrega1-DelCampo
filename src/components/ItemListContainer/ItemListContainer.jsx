import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import {ItemList} from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'



export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        }, [categoryId])

        if (loading){
            return (
                <div className="loading">
                    <h4>LOADING...</h4>
                </div>
            )
        }

    return (
        <div className="ItemListContainer">
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </div>   
    )
}

