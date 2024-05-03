import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductsContext } from '../context/ProductsContext';

const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
