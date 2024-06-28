// src/components/CartDropdown.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/CartDropdown.css';

function CartDropdown() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-dropdown">
      <button className="cart-button" onClick={toggleDropdown}>
        Carrito ({cart.length})
      </button>
      {isOpen && (
        <div className="cart-content">
          <h2>Carrito de Compras</h2>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <span>{item.name} - {item.price} CLP</span>
                    <button onClick={() => removeFromCart(item)}>Eliminar</button>
                  </li>
                ))}
              </ul>
              <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
