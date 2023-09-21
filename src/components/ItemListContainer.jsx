import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { mFetch } from "../assets/mockFetch"



const ItemlistContainer = () => {
  const [eventos, setEventos] = useState([]);
  const URL_DATA = 'https://64cd129fbb31a268409a5658.mockapi.io/Eventos';
   
  const categoria = useParams().categoria;


  useEffect(() => {
    const obtenerEventos = async () => {
      try {
        const response = await fetch(URL_DATA);
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        const data = await response.json(); 
        if (categoria){
           setEventos(data.filter((evento) => evento.categoria === categoria)); //filtro por categoría directamente en el fetch
           }else{
            setEventos(data);
           }
        
        
        
      } catch (error) {
        console.error(error);
        console.log("Fetch mal hecho") 
      }
    };

    obtenerEventos();
  }, [categoria]) //le paso el parametro para que renderize bien



return (

  <div className="container" id="container">
    <ItemList eventos = {eventos} /> 
  </div>

 
  )
}



export default ItemlistContainer;
