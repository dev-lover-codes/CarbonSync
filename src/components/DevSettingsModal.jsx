import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DevSettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('judge_gemini_key');
    if (stored) {
      setApiKey(stored);
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('judge_gemini_key', apiKey);
    toast.success('API key saved to session memory');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating gear icon button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-md border border-white/10 rounded-full p-3 text-white shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Developer Settings"
      >
        <Settings size={22} />
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-xl font-bold text-white mb-1">Developer Settings</h2>

            {/* Subtitle note */}
            <p className="text-gray-400 text-sm mb-6">
              This panel is for hackathon evaluation only. Your key is stored in session memory and never saved to any database.
            </p>

            {/* API Key input */}
            <label className="block text-sm text-gray-300 mb-2">
              Gemini API Key (for evaluation)
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste your Gemini API key here"
              className="w-full bg-white/10 border border-white/20 focus:border-emerald-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200"
            />

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold py-3 rounded-xl transition-all duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl border border-white/10 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
