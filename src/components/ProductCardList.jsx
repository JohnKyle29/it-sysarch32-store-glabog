import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext'; // Import ProductsContext correctly

const ProductCardList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
