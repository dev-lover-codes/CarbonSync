import React from 'react';
import { Loader2 } from 'lucide-react';
import Card from '../ui/Card';

const INDIAN_ANNUAL_AVERAGE = 1800; // kg/year
const GLOBAL_ANNUAL_AVERAGE = 4000; // kg/year

export default function EcoScoreCard({ loadingScore, scoreData, currentTotal }) {
  return (
    <Card className="p-6 shadow-sm border border-gray-100/60 flex flex-col items-center text-center">
      <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-6 w-full text-left">Your Eco Score</h2>
      {loadingScore ? (
        <div className="h-40 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-green-700" />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="relative w-36 h-36 flex items-center justify-center mb-6">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F3F4F6" strokeWidth="2.5" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2D6A4F" strokeWidth="3" strokeDasharray={`${scoreData?.score || 0}, 100`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-gray-900">{scoreData?.score ?? 70}</span>
              <span className="text-sm font-bold text-green-700">Grade: {scoreData?.grade ?? 'B'}</span>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-6 leading-relaxed px-4">{scoreData?.summary ?? 'Keep sync-ing your footprints!'}</p>
          
          {/* Benchmarks */}
          <div className="w-full space-y-3 pt-4 border-t border-gray-100 text-left">
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                <span>vs Indian Average</span>
                <span>{((currentTotal / (INDIAN_ANNUAL_AVERAGE / 12)) * 100).toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${Math.min((currentTotal / (INDIAN_ANNUAL_AVERAGE / 12)) * 100, 100)}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                <span>vs Global Average</span>
                <span>{((currentTotal / (GLOBAL_ANNUAL_AVERAGE / 12)) * 100).toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#52B788]" style={{ width: `${Math.min((currentTotal / (GLOBAL_ANNUAL_AVERAGE / 12)) * 100, 100)}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
