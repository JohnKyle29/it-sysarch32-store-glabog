// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; // Import the ProductDetails component
import Header from './components/Header'
import Footer from './components/Footer';
const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* New route for product details */}
        </Routes>
        <Footer/>
      </Router>
    </ProductsProvider>
  );
};

export default App;