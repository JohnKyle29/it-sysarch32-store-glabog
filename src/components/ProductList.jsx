import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const data = await getDocs(productsCollection);
        const productsData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-6">Motorcycle Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Link to={`/product/${product.id}`}>
              <img src={product.image_url} alt={product.name} className="w-full h-64 object-cover" />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
