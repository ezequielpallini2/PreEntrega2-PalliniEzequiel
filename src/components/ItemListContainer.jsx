import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemlistContainer = () => {
  const [eventos, setEventos] = useState([]);
  const URL_DATA = 'https://64cd129fbb31a268409a5658.mockapi.io/Eventos';
   

  useEffect(() => {
    const obtenerEventos = async () => {
      try {
        const response = await fetch(URL_DATA);
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        const data = await response.json(); //chequear 
        setEventos(data);
      } catch (error) {
        console.error(error);
        console.log("Fetch mal hecho") 
      }
    };

    obtenerEventos();
  }, [])



return (

  <div>
    <ItemList eventos = {eventos} /> 
  </div>

 
  )
}
export default ItemlistContainer;
