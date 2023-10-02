import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, precioTotal, vaciarcart } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarcart();
    }

  return (
    <div className="container">
        <h1 className="main-title">| cart 🛒 |</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El cart está vacío :(</h2>
        }
        
    </div>
  )
}

export default Cart