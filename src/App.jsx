// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer'; // Ensure the correct import path

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            {/* Add more routes for other pages (e.g., About, Contact) */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;
