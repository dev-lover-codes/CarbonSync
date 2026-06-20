import React, { useId } from 'react';

const Input = ({ 
  label, 
  error, 
  icon: Icon, 
  className = '', 
  id,
  ...props 
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <input
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none
            ${Icon ? 'pl-11' : ''}
            ${error 
              ? 'border-red-300 focus:border-red-500 bg-red-50' 
              : 'border-gray-100 focus:border-primary focus:bg-white bg-gray-50'}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-red-500 font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

