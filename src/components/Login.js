// src/components/Login.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <motion.div
        className="login-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña" />
          </div>
          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recordar Nakama</label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Iniciar Sesión
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
