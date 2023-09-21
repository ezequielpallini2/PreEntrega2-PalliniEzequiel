import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';


const ItemlistContainer = () => {
  const [eventos, setEventos] = useState([]);
  const URL_DATA = 'https://64cd129fbb31a268409a5658.mockapi.io/Eventos';
   
  const categoria = useParams().categoria;


  useEffect(() => {

    const eventosRef = collection(db, "eventos");
    getDocs(eventosRef)
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
