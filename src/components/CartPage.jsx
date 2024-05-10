// CartPage.jsx

import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(ProductsContext);
  const [quantityToDelete, setQuantityToDelete] = useState(1); // State to store the quantity to delete

  const handleRemoveFromCart = (itemId, quantity) => {
    // Call removeFromCart function from context to remove the item from the cart
    removeFromCart(itemId, quantity);
  };

  const handleDelete = (itemId) => {
    if (quantityToDelete > 0) {
      handleRemoveFromCart(itemId, quantityToDelete);
      setQuantityToDelete(1); // Reset quantity after deletion
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={item.image_url} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              {/* Add delete button */}
              <div className="flex items-center mt-4">
                <input
                  type="number"
                  min="1"
                  value={quantityToDelete}
                  onChange={(e) => setQuantityToDelete(parseInt(e.target.value))}
                  className="mr-2 w-16 h-8 border border-gray-300 rounded text-center"
                />
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
