// CartPage.jsx

import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PF9CS015jaakWwjdBACdMwVq4Z0W6c344KGaZBCscvxUZggDjOJv5lB87868hNNchXcS6v0L0QG3LR9covrzrDd00Pf77aV5A'); // Replace with your publishable key

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(ProductsContext);
  const [quantityToDelete, setQuantityToDelete] = useState(1); // State to store the quantity to delete

  const handleClick = async (productName, price) => {
    const stripe = await stripePromise;

    // Convert the price to the smallest currency unit (cents)
    const formattedPrice = price * 100;

    // Send a request to the backend to create a checkout session
    const response = await fetch('http://localhost:4000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, price: formattedPrice }), // Send product name and formatted price to the backend
    });

    if (response.ok) {
      // If the request is successful, retrieve the session ID from the response
      const session = await response.json();

      // Redirect the user to the Stripe Checkout page using the session ID
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        // If there is an error during the redirect, display the error message
        console.error(result.error.message);
      } else {
        // If checkout is successful, redirect to the main page
        window.location.href = 'http://localhost:5173/';
      }
    } else {
      // If there is an error creating the checkout session, display an error message
      console.error('Error creating checkout session');
    }
  };

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
                {/* Checkout button for each item */}
                <button onClick={() => handleClick(item.name, item.price)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                  Checkout
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
