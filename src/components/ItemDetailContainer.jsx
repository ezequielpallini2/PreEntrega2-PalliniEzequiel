import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { mFetch } from "../assets/mockFetch"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        mFetch(Number(id))
        .then(product => setProduct(product))
        .catch(err => console.log(err))
    },[])



  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer