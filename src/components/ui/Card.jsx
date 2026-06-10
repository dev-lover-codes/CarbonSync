import React from 'react';

const Card = ({ children, className = '', padding = 'p-6' }) => {
  return (
    <div className={`bg-[#0F1C14]/90 backdrop-blur-md rounded-3xl border border-white/10 ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

