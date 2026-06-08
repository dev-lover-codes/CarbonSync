import React from 'react';

const Card = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div className={`bg-surface-card rounded-2xl shadow-sm border border-gray-100 ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
