// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </ProductsProvider>
  );
};

export default App;
