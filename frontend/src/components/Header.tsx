import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">ClearPass</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              How It Works
            </Link>
            <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Pricing
            </Link>
            <Link to="/requirements" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Requirements
            </Link>
            <Link to="/enterprise" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Enterprise
            </Link>
            <Link to="/support/faq" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/start"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-2">
              <Link to="/how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 py-2">
                How It Works
              </Link>
              <Link to="/pricing" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 py-2">
                Pricing
              </Link>
              <Link to="/requirements" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 py-2">
                Requirements
              </Link>
              <Link to="/enterprise" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 py-2">
                Enterprise
              </Link>
              <Link to="/support/faq" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 py-2">
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
