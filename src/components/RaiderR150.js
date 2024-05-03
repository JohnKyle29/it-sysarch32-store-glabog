import React from 'react';

const RaiderR150 = ({ description, imageUrl, name, price }) => {
  // Implement Firebase functionality here (e.g., adding product to cart)

  return (
    <div className="product-container">
      <img src={imageUrl} alt="Raider R150" className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">&#8369; {price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default RaiderR150;
