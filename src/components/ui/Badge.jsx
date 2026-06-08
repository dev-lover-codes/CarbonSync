import React from 'react';

const Badge = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    green: "bg-primary-light/20 text-primary-dark",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-sky-light/20 text-sky-dark",
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-100 text-red-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
