import React from 'react'

const ItemCount = ( {cantidad, handleSub, handleAdd, handleAgregar} ) => {
    

  return (
    <div>

        <div className="item-count">
        <button onClick={handleSub}> - </button>
        <label>
            <p> { cantidad } </p>
        </label>
        <button onClick={handleAdd}> + </button>
        </div>

        <button className="agregar-al-carrito" onClick={handleAgregar}>Seleccionar cantidad</button>
        </div>
  )
}

export default ItemCount