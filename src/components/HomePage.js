// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/shop');
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="home-content"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Bienvenido a la Tienda de Cartas de One Piece!</h1>
        <p>¡Encuentra a tus personajes favoritos y construye tu mazo!</p>
        <motion.button
          className="explore-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExploreClick}
        >
          Explora la Tienda
        </motion.button>
      </motion.div>
      <motion.div
        className="home-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://cdnx.jumpseller.com/gaming-place/image/40260475/op_portada.webp?1695856320" alt="One Piece" />
      </motion.div>
      <motion.div
        className="features"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Características Destacadas</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Variedad</h3>
            <p>Una amplia gama de cartas de tus personajes favoritos.</p>
          </div>
          <div className="feature">
            <h3>Calidad</h3>
            <p>Cartas de alta calidad para coleccionistas y jugadores.</p>
          </div>
          <div className="feature">
            <h3>Precios</h3>
            <p>Ofertas y precios competitivos en todos nuestros productos.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="testimonials"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2>Testimonios de Clientes</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"La mejor tienda de cartas de One Piece, sin duda alguna."</p>
            <span>- Luffy</span>
          </div>
          <div className="testimonial">
            <p>"Encuentro todas las cartas que necesito para mi colección."</p>
            <span>- Zoro</span>
          </div>
          <div className="testimonial">
            <p>"Excelente servicio y productos de alta calidad."</p>
            <span>- Nami</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="social-media"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Síguenos en nuestras redes sociales</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
