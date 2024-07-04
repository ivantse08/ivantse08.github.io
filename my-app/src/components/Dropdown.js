// src/components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ label, options }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showOptions = () => setIsVisible(true);
  const hideOptions = () => setIsVisible(false);

  return (
    <div className="relative" onMouseEnter={showOptions} onMouseLeave={hideOptions}>
      <button className="dropdown-button">{label}</button>
      {isVisible && (
        <div className="absolute bg-white shadow-lg">
          {options.map((option, index) => (
            <button key={index} className="dropdown-options">{option}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;