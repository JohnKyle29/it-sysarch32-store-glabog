// ProductDetails.jsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(p => p.id === id);

  const handleAddToCart = () => {
    // Implement adding product to cart functionality using Firebase
  };

  return (
    <div className="product-details">
      {product && (
        <>
          <img src={product.image_url} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">&#8369; {product.price}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
