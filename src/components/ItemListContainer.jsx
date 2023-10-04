import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where  } from 'firebase/firestore';
import { db } from '../firebase/config';


const ItemlistContainer = () => {
  const [eventos, setEventos] = useState([]);

   
  const categoria = useParams().categoria;



  useEffect(() => {
    
    const eventosRef = collection(db, "eventos");
    const q = categoria ? query(eventosRef, where("categoria", "==", categoria)) : eventosRef;

    getDocs(q)
      .then((resp)=> {
        setEventos(
        
          resp.docs.map((doc)=> {
            return {...doc.data(), id: doc.id}
          })

        );

      })

  }, [categoria]) //le paso el parametro para que renderize bien



return (

  <div className="container" id="container">
    <ItemList eventos = {eventos} /> 
  </div>

 
  )
}



export default ItemlistContainer;
