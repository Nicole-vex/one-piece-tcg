// src/components/Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <button className="toggle-cart" onClick={toggleCart}>
        {isOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
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
                    {item.name} - {item.price} CLP
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

export default Cart;
