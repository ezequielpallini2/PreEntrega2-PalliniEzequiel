import React, { useEffect, useState } from 'react';

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
  }, []);

  // Función para renderizar una tarjeta de evento
  const renderEventCard = (evento) => {
    if (evento.stock > 0) {
      return (
        <div className="card" style={{ width: '18rem' }} key={evento.id}>
          <img src={evento.imagen} className="card-img-top" alt={evento.description} />
          <div className="card-body">
            <h5 className="card-title">Primavera 2023</h5>
            <p className="card-text">{evento.description}</p>
            <p className="card-text">${evento.price}</p>
            <p className="card-text">¡Quedan solo {evento.stock} entradas! </p>
            <a href="checkout.html" className="btn btn-primary" id={evento.id}>
              Comprar
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card" style={{ width: '18rem' }} key={evento.id}>
          <img src={evento.imagen} className="card-img-top" alt={evento.description} />
          <div className="card-body">
            <h5 className="card-title">Primavera 2023</h5>
            <p className="card-text">{evento.description}</p>
            <p className="card-text">${evento.price}</p>
            <p className="card-text">¡El evento está agotado!</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      {eventos.map((evento) => renderEventCard(evento))}
      //manejar la lógica para cuando maneje el stock
    </div>
  );
};

export default ItemlistContainer;
