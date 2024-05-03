import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productDoc = doc(db, 'products', productId);
                const productSnapshot = await getDoc(productDoc);
                if (productSnapshot.exists()) {
                    setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    console.log('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <div className="text-center">Loading...</div>;

    return (
        <div className="container mx-auto py-8 px-4 transform transition duration-300 hover:scale-105">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-gray-300">
                <div className="py-6 px-4">
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <img src={product.image_url} alt={product.name} className="w-full h-auto mb-4" />
                    <p className="text-lg mb-2">${product.price}</p>
                    <p className="text-sm break-words">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
