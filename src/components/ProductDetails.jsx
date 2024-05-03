// ProductDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Adjust the path according to your project structure

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

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt={product.name} style={{ maxWidth: '300px' }} />
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;