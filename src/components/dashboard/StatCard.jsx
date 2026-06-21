import React from 'react';

/**
 * StatCard — a single metric tile used in the Dashboard stats row.
 *
 * @param {string}   label        - Short uppercase label (e.g. "TODAY")
 * @param {string}   value        - Pre-formatted display value
 * @param {string}   unit         - Unit suffix shown in small caps (e.g. "kg")
 * @param {React.ElementType} icon - Lucide icon component (optional)
 * @param {string}   iconColor    - Tailwind text colour class for the icon
 * @param {string}   iconBg       - Tailwind background colour class for the icon badge
 * @param {string}   awarenessText - Optional small green sub-text (e.g. equivalency blurb)
 * @param {React.ReactNode} children - Optional extra content rendered inside the card
 *                                    (overrides icon slot, used for the sparkline card)
 */
export default function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  iconColor,
  iconBg,
  awarenessText,
  children,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          {label}
        </h3>
        {/* Icon badge — only rendered when Icon prop is provided and children slot is empty */}
        {Icon && !children && (
          <div className={`p-1.5 rounded-lg ${iconBg} ${iconColor}`}>
            <Icon size={18} />
          </div>
        )}
        {/* Children slot used for custom header content (e.g. sparkline) */}
        {children && (
          <div className="w-16 h-8">{children}</div>
        )}
      </div>

      <div className="text-4xl font-bold text-white tracking-tight">
        {value}{' '}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase ml-1">
          {unit}
        </span>
      </div>

      {awarenessText && (
        <span className="text-xs text-emerald-400 mt-1 block">{awarenessText}</span>
      )}
    </div>
  );
}
