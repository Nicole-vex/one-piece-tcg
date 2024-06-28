// src/components/Register.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Register.css';

function Register() {
  return (
    <div className="register-container">
      <motion.div
        className="register-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Registrarse</h2>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input type="password" placeholder="Confirma tu contraseña" />
          </div>
          <div className="form-group terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Acepto los <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Registrarse
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;
