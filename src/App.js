import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Home />} />
        <Route path="/item/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
