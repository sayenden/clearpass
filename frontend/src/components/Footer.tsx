import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-xl font-bold text-white">ClearPass</span>
            </div>
            <p className="text-sm">
              AI-powered passport photo compliance platform with global coverage and enterprise APIs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="/how-it-works" className="block hover:text-white">How It Works</Link>
              <Link to="/pricing" className="block hover:text-white">Pricing</Link>
              <Link to="/requirements" className="block hover:text-white">Requirements</Link>
              <Link to="/reviews" className="block hover:text-white">Reviews</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-white">About</Link>
              <Link to="/enterprise" className="block hover:text-white">Enterprise</Link>
              <Link to="/support/contact" className="block hover:text-white">Contact</Link>
              <a href="/legal/privacy" className="block hover:text-white">Privacy</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/support/faq" className="block hover:text-white">FAQ</Link>
              <Link to="/support/contact" className="block hover:text-white">Contact</Link>
              <a href="/status" className="block hover:text-white">Status</a>
              <a href="/guarantee" className="block hover:text-white">Guarantee</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 ClearPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
