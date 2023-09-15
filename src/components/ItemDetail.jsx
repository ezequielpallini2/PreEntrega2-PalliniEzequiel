import ItemCounter from "./ItemCounter.jsx"

export const ItemDetail = ({ evento }) => {
    const onAdd = (count) => {
        console.log('Productos seleccionados: ', count)
    }
    return (
      <div className="card" style={{width: 18 + 'em'}}>
      <img src={"../img/" + evento.imagen} className="card-img-top" alt={evento.description}/>
      <div className="card-body">
          <h5 className="card-title">Primavera 2023</h5>
          <p className="card-text">{evento.description}</p>
          <p className="card-text">Categoría: {evento.categoria}</p>
          <p className="card-text">${evento.price}</p>
          <div className="col">
                <ItemCounter initial={1} stock={evento.stock} onAdd={onAdd}/> 
          </div>
          <p className="card-text">¡Quedan solo {evento.stock} entradas! </p>
          
          <a href="checkout.html" className="btn btn-primary" id="{evento.id}">Comprar</a>
      </div>
</div>
    )
}
export default ItemDetail    