import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className='producto-detalle'>
            <img src={item.imagen} alt='item.description'/>
            <p className='descripcion'>{item.description}</p>
        </div>
    </div>
  )
}

export default ItemDetail