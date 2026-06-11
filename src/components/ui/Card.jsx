import React from 'react';

const Card = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

