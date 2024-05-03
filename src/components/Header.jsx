import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Motorcycle Store</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
