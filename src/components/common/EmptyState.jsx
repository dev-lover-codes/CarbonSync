import React from 'react';
import Button from '../ui/Button';

export default function EmptyState({ icon: Icon, title, message, actionLabel, onAction }) {
  return (
    <div className="p-12 text-center border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50/50">
      {Icon && (
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-gray-400">
          <Icon size={32} />
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">{message}</p>
      {actionLabel && (
        <Button onClick={onAction} variant="outline" className="border-gray-300">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}