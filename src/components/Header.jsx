import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Motorcycle Store</h1>
        <nav className="mr-4">
          <ul className="flex space-x-4 text-white">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
