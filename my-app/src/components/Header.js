// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1>P&A Pharmacy</h1>
      <div className="flex space-x-2">
        <button className="language-button">
          <a href="index.html">English</a>
        </button>
        <button className="language-button">
          <a href="chinese.html">中文</a>
        </button>
      </div>
      <h2 className="text-xl">Your<br/>Neighbourhood<br/>Pharmacy</h2>
    </header>
  );
};

export default Header;