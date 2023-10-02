import React from 'react'

const ItemCounter = ( {cantidad, handleSub, handleAdd, handleAgregar} ) => {
    

  return (
    <center>
        
        <button onClick={handleSub}> - </button>
        <label>
            <strong> { cantidad } </strong>
        </label>
        <button onClick={handleAdd}> + </button>

        <button className="agregar-al-carrito" onClick={handleAgregar}>Seleccionar cantidad</button> //ver boton en bootstrap y agregar handleAgregar
    </center>
  )
}

export default ItemCounter