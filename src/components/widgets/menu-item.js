'use client';
import React from 'react';

const MenuItem = ({ item, selectedKey, isAlwaysBold }) => {
  return (
    <div
      style={{
        padding: '0 1em',
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        cursor: 'pointer',
      }}
      onClick={item.onClick}
    >
      <div
        className={`font-small font-weight-900 ${
          selectedKey === item.key || isAlwaysBold ? 'selected-menu-item' : 'deselected-menu-item'
        }`}
      >
        {item.icon}
      </div>
      <div
        className={`font-small font-weight-900 ${
          selectedKey === item.key || isAlwaysBold ? 'selected-menu-item' : 'deselected-menu-item'
        }`}
      >
        {item.label}
      </div>
    </div>
  );
};

export default MenuItem;
