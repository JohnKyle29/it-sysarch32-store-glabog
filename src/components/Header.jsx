// Header.jsx

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const Header = () => {
  const { cartItems } = useContext(ProductsContext);

  // Calculate the total quantity of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Motorcycle Store</h1>
        <nav className="mr-4">
          <ul className="flex space-x-4 text-white">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            {/* Add Link to the cart page with the shopping cart icon and badge */}
            <li>
              <Link to="/cart" className="hover:text-gray-300 relative">
                <img src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg" alt="Cart" className="w-8 h-8" />
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1">{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
