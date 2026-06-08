import React from 'react';
import Button from '../ui/Button';

export default function PageHeader({ title, subtitle, actionLabel, actionIcon: ActionIcon, onAction }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {actionLabel && (
        <Button onClick={onAction} className="bg-green-600 hover:bg-green-700 flex items-center gap-2 shadow-md shadow-green-600/20">
          {ActionIcon && <ActionIcon size={18} />}
          {actionLabel}
        </Button>
      )}
    </div>
  );
}