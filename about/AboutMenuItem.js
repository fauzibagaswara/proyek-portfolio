// AboutMenuItem.js
import React from 'react';

const AboutMenuItem = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div className={subContainerClass}>
      {/* Render menu item here */}
    </div>
  );
};

export default AboutMenuItem;
