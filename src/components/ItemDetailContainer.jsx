import { useEffect, useState } from "react"
import  ItemDetail  from "./ItemDetail"
import {doc, getDoc} from  'firebase/firestore';
import { useParams } from "react-router-dom"
import { db } from "../firebase/config";

export const ItemDetailContainer = () => {
    const [evento, setevento] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const docRef = doc(db, "eventos", id);
        getDoc(docRef)
          .then((resp)=> {
            setevento(
            {...resp.data(), id: resp.id}
          );
  
        })
  
    }, [])




  return (
    <div>
        <ItemDetail evento={evento}/>
    </div>
  )
}

export default ItemDetailContainer