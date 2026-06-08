import React from 'react';

export default function LoadingSkeleton({ type = 'card', count = 3 }) {
  const items = Array.from({ length: count });

  if (type === 'list') {
    return (
      <div className="space-y-4">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl animate-pulse bg-white">
            <div className="w-12 h-12 bg-gray-200 rounded-xl shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-3 bg-gray-100 rounded w-1/4"></div>
            </div>
            <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  // Default card skeleton
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((_, i) => (
        <div key={i} className="p-6 border border-gray-100 rounded-2xl animate-pulse bg-white">
          <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
          <div className="space-y-2 mb-6">
            <div className="h-3 bg-gray-100 rounded w-full"></div>
            <div className="h-3 bg-gray-100 rounded w-5/6"></div>
          </div>
          <div className="h-10 bg-gray-100 rounded-xl w-full mt-auto"></div>
        </div>
      ))}
    </div>
  );
}