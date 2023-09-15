import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { mFetch } from "../assets/mockFetch"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [evento, setevento] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        mFetch(Number(id))
        .then(evento => setevento(evento))
        .catch(err => console.log(err))
    },[])



  return (
    <div>
        <ItemDetail evento={evento}/>
    </div>
  )
}

export default ItemDetailContainer