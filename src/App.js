// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import CartSummary from './components/CartSummary';
import UserProfile from './components/UserProfile';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import './styles/App.css';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart-summary" element={<CartSummary />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
