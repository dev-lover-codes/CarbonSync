import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-green-600 mb-6 relative">
        <TreePine size={100} className="relative z-10" />
        <div className="absolute inset-0 bg-green-200 blur-3xl rounded-full opacity-50"></div>
      </div>
      <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Lost in the forest?</h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md text-center">
        We can't seem to find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link to="/">
        <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2 h-12 px-8 text-lg shadow-lg shadow-green-600/20">
          <Home size={20} />
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
}