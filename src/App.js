import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Home />} />
        <Route path="/item/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success/:id" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
