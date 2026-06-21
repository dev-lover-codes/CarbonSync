import React from 'react';
import { Lightbulb, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function AIAnalysisCard({ latestInsight, isGenerating, onGenerate }) {
  return (
    <Card className="lg:col-span-2 p-6 border border-green-100 bg-gradient-to-b from-green-50/50 to-white shadow-sm relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 text-green-700 rounded-lg">
            <Lightbulb size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">AI Analysis</h2>
        </div>
        <Button 
          onClick={onGenerate} 
          disabled={isGenerating}
          className="bg-green-700 hover:bg-green-800 flex items-center gap-2 shadow-md shadow-green-700/20 text-xs sm:text-sm py-2"
        >
          {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {isGenerating ? 'Analyzing Data...' : 'Generate AI Report'}
        </Button>
      </div>
      
      <div className="relative z-10 space-y-4">
        {latestInsight ? (
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-medium">
            <p>{latestInsight.report}</p>
            {latestInsight.highlight && (
              <div className="text-xs font-bold text-green-700 bg-green-100/60 px-3 py-1.5 rounded-full inline-block">
                Highlight: {latestInsight.highlight}
              </div>
            )}
            <div className="pt-4 border-t border-green-100 flex items-center text-xs text-gray-400 gap-1.5 font-bold">
              <CheckCircle2 size={14} className="text-green-600" />
              Report Trend: {latestInsight.trend || 'steady'}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 opacity-70">
            <Sparkles size={32} className="mx-auto text-green-300 mb-3" />
            <p className="text-gray-500">No report generated yet.<br/>Click the **Generate AI Report** button to analyze your history.</p>
          </div>
        )}
      </div>
    </Card>
  );
}
