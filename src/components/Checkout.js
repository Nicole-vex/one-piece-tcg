// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../contexts/CartContext';
import '../styles/Checkout.css';

function Checkout() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    country: '',
    region: '',
    comuna: '',
    discountCode: '',
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingCost = 0; // Puedes calcular esto basado en la dirección

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el proceso de pago
    console.log('Payment submitted', formData);
  };

  return (
    <motion.div
      className="checkout-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Carro de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cant</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.price} CLP</td>
                  <td>1</td>
                  <td>{item.price} CLP</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-sections">
            <div className="discount-section">
              <h3>¿Tienes un cupón de descuento?</h3>
              <input
                type="text"
                name="discountCode"
                value={formData.discountCode}
                onChange={handleChange}
                placeholder="Ingresa tu cupón"
              />
              <button>Aplicar</button>
            </div>
            <div className="shipping-section">
              <h3>Calcular costo de envío</h3>
              <label>País</label>
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Seleccione su país</option>
                <option value="Chile">Chile</option>
                <option value="Argentina">Argentina</option>
                <option value="Peru">Peru</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
              </select>
              <label>Región</label>
              <select name="region" value={formData.region} onChange={handleChange}>
                <option value="">Seleccione su región</option>
                <option value="Región Metropolitana">Región Metropolitana</option>
                <option value="Valparaíso">Valparaíso</option>
                <option value="Biobío">Biobío</option>
                <option value="Araucanía">Araucanía</option>
              </select>
              <label>Comuna</label>
              <input
                type="text"
                name="comuna"
                value={formData.comuna}
                onChange={handleChange}
                placeholder="Ingresa tu comuna"
              />
              <button>Calcular Envío</button>
            </div>
            <div className="total-section">
              <h3>Total del Carro</h3>
              <p>Envío: {shippingCost} CLP</p>
              <p>Total del pedido: {totalPrice + shippingCost} CLP</p>
              <button className="checkout-button" onClick={handleSubmit}>
                <img src="https://st2.depositphotos.com/1114422/5830/v/950/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg" alt="Checkout" className="checkout-icon" />
                Realizar Pago
              </button>
              <button className="continue-shopping-button">Seguir Comprando</button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Checkout;
