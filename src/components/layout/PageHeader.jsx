import React from 'react';
import Button from '../ui/Button';
import { PAGE_HEADER_CONTAINER, PAGE_HEADER_TITLE, PAGE_HEADER_SUBTITLE } from '../../utils/styles';

export default function PageHeader({ title, subtitle, actionLabel, actionIcon: ActionIcon, onAction }) {
  return (
    <div className={PAGE_HEADER_CONTAINER}>
      <div>
        <h1 className={PAGE_HEADER_TITLE}>{title}</h1>
        {subtitle && <p className={PAGE_HEADER_SUBTITLE}>{subtitle}</p>}
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