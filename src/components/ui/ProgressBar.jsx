import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  value, 
  max = 100, 
  variant = 'green', 
  showLabel = false, 
  progress, 
  color, 
  className = '' 
}) => {
  const percentage = progress !== undefined ? progress : Math.min(Math.round((value / max) * 100), 100);

  const variants = {
    green: "bg-primary",
    amber: "bg-amber-500",
    blue: "bg-sky",
    red: "bg-red-500"
  };

  const colorClass = color || (variants[variant] || "bg-primary");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showLabel && <span className="text-xs font-bold text-gray-600">{percentage}%</span>}
      </div>
      <div className={`h-2.5 w-full bg-gray-100/10 rounded-full overflow-hidden relative shadow-inner ${className}`}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

