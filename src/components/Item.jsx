import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({evento}) => {
  return (
    <div className="card" style={{width: 18 + 'em'}}>
                <img src={evento.imagen} className="card-img-top" alt="{evento.description}"/>
                <div className="card-body">
                    <h5 className="card-title">Primavera 2023</h5>
                    <p className="card-text">{evento.description}</p>
                    <Link to={`/Item/${evento.id}`}>
                    <a className="ver-mas" id="{evento.id}">Ver detalles</a>
                    </Link>                   
                </div>
     </div>
  )
}

export default Item
