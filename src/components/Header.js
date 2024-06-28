// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Tienda de Cartas de One Piece" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-button">Inicio</Link>
          </li>
          <li>
            <Link to="/shop" className="nav-button">Tienda</Link>
          </li>
          <li>
            <Link to="/login" className="nav-button">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register" className="nav-button">Registrarse</Link>
          </li>
          <li>
            <Link to="/cart-summary" className="nav-button">
              <img src="https://static.vecteezy.com/system/resources/previews/009/157/891/original/shopping-cart-shopping-cart-icon-shopping-cart-design-shopping-cart-icon-sign-shopping-cart-icon-isolated-shopping-cart-symbol-free-vector.jpg" alt="Carrito" className="cart-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
