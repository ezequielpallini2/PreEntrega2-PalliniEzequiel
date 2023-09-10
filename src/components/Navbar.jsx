import React from 'react';
import Cart from './Cart';
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary fixed-top"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-green" href="#">
          Entradita
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Comprar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Vender
              </a>
            </li>
            
          </ul>
          <Cart />
           
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              id="inputSearch"
              list="inputSearch"
              placeholder="Buscar"
              aria-label="Search"
            ></input>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
