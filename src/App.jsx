import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from './pages/Cart.jsx'
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './components/ProductDetails.jsx'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App


