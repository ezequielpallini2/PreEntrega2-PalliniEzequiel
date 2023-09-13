import React from 'react'

export const Item = ({evento}) => {
  return (
    <div className="card" style={{width: 18 + 'em'}}>
                <img src={evento.imagen} className="card-img-top" alt="{evento.description}"/>
                <div className="card-body">
                    <h5 className="card-title">Primavera 2023</h5>
                    <p className="card-text">{evento.description}</p>
                    <p className="card-text">${evento.price}</p>
                    <p className="card-text">¡Quedan solo {evento.stock} entradas! </p>
                    <a href={`/item/${evento.id}`} className="ver-mas" id="{evento.id}">Ver más</a>
                    <a>   </a>
                    <a href="checkout.html" className="btn btn-primary" id="{evento.id}">Comprar</a>
                </div>
     </div>
  )
}

export default Item
