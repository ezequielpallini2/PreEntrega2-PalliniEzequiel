import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary fixed-top"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-green" to="/">
          Entradita
        </Link>
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
            <li className="nav-item mx-2">
              <Link className="menu-link text-dark" to="/recitales">
                Recitales
              </Link>
            </li>           
            <li className="nav-item mx-2">
              <Link className="menu-link text-dark" to="/shows">
                Shows
              </Link>
            </li>
          </ul>
          <CartWidget />
           
          
            
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
