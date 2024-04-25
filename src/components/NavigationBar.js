// NavigationBar.js
import React from 'react';
import './NavigationBar.css'; // Import CSS file

const NavigationBar = ({ onSelectOption }) => {
  const handleOptionClick = (option) => {
    onSelectOption(option);
  };

  return (
    <div className="navbar-container"> {/* Apply CSS class */}
      <h1>Diabetes Diagnosis App</h1>
      <nav>
        <ul className="navbar-list"> {/* Apply CSS class */}
          <li>
            <div onClick={() => handleOptionClick('diagnosis')}><strong>Diagnosis</strong></div>
          </li>
          <li>
            <div onClick={() => handleOptionClick('history')}><strong>History</strong></div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
