import React, { createContext, useState } from 'react';

const productsData = [
    {
      product_id: 'vzNYFe0So6iW3na6mbu8',
      name: 'Raider R150 Carb',
      description: 'Raider R150 is powered by a 148 cc engine, and has a 6-Speed gearbox. The Raider R150 comes with Disc front brakes and Disc rear brakes.',
      image_url: 'https://imgcdn.zigwheels.ph/large/gallery/color/83/1069/suzuki-raider-r150-color-301256.jpg',
      price: 107999,
      quantity: 4
    },
    {
      product_id: 'newProductID', // Unique product ID
      name: 'New Product Name',
      description: 'New product description',
      image_url: 'https://premiumbikes.ph/wp-content/uploads/2023/02/Suzuki-Raider-R150-%E2%80%93-Carb-3.png', // Updated image URL
      price: 99999, // New price
      quantity: 5 // New quantity
    }
  ];

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products] = useState(productsData);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
