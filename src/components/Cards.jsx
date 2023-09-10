import React from 'react';
const Cards = props => {
  return (
    <>
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Primavera 2023</h5>
        <p className="card-text">Dillom toca en el Movistar Arena</p>
        <p className="card-text">$8500</p>
        <p className="card-text">¡Quedan solo 8 entradas! </p>
        <a href="checkout.html" className="btn btn-primary" id="54">
          Comprar
        </a>
      </div>
    </div>
  </>
  );
}
Cards.propTypes = {}

export default Cards
