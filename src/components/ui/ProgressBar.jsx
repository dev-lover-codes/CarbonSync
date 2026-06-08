import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ value, max = 100, variant = 'green', showLabel = false }) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  const variants = {
    green: "bg-primary",
    amber: "bg-amber-500",
    blue: "bg-sky",
    red: "bg-red-500"
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showLabel && <span className="text-xs font-bold text-gray-600">{percentage}%</span>}
      </div>
      <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${variants[variant]}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
