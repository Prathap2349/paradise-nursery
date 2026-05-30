import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import './App.css';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/products">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Bring nature into your home with our beautiful collection of plants.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<><Navbar /><ProductList /></>} />
          <Route path="/about" element={<><Navbar /><AboutUs /></>} />
          <Route path="/cart" element={<><Navbar /><CartItem /></>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
