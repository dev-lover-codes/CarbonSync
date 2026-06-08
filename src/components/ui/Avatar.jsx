import React from 'react';

const Avatar = ({ name, level = 'Seedling', size = 'md' }) => {
  const getInitials = (n) => {
    if (!n) return '?';
    return n.split(' ').map(part => part[0]).join('').toUpperCase().substring(0, 2);
  };

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-base"
  };

  const ringColors = {
    'Seedling': 'ring-green-300',
    'Sprout': 'ring-green-400',
    'Sapling': 'ring-green-500',
    'Tree': 'ring-green-600',
    'Forest': 'ring-green-700'
  };

  return (
    <div className={`relative inline-block`}>
      <div className={`
        ${sizes[size]} 
        rounded-full flex items-center justify-center font-bold text-primary-dark bg-primary-light/30
        ring-2 ring-offset-2 ${ringColors[level] || 'ring-primary-light'}
      `}>
        {getInitials(name)}
      </div>
    </div>
  );
};

export default Avatar;
