// src/components/Main.js
import React from 'react';
import Dropdown from './Dropdown';

const Main = () => {
  const dropdownOptions1 = ['Option 1', 'Option 2', 'Option 3'];
  const dropdownOptions2 = ['Option 4', 'Option 5', 'Option 6'];
  const dropdownOptions3 = ['Option 7', 'Option 8', 'Option 9'];

  return (
    <main className="p-4">
      <Dropdown label="Home" options={dropdownOptions1} />
      <Dropdown label="Services" options={dropdownOptions2} />
      <Dropdown label="About" options={dropdownOptions3} />
      {/* Add more dropdowns as needed */}
    </main>
  );
};

export default Main;