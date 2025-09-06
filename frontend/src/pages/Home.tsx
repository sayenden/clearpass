import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Perfect Passport Photos
              <span className="text-indigo-600"> in Minutes</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              AI-powered photo compliance for 100+ countries. Guaranteed acceptance or your money back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Your Passport Photo
              </Link>
              <Link
                to="/how-it-works"
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.2%</div>
              <div className="text-slate-600 dark:text-slate-300">Acceptance Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-slate-600 dark:text-slate-300">Countries Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-slate-600 dark:text-slate-300">Photos Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How ClearPass Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Get compliant passport photos in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Capture</h3>
              <p className="text-slate-600 dark:text-slate-300">Take a photo or upload an existing one</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Select</h3>
              <p className="text-slate-600 dark:text-slate-300">Choose your country and document type</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">3. AI Process</h3>
              <p className="text-slate-600 dark:text-slate-300">AI validates and optimizes your photo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⬇️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Download</h3>
              <p className="text-slate-600 dark:text-slate-300">Get your compliant photo instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Travelers Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "Saved me hours of retakes. The AI guidance was perfect and my visa was approved instantly!"
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-slate-500">US Passport</div>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "The enterprise API integration was seamless. Processing 100+ photos daily with 99% acceptance."
              </p>
              <div className="font-semibold">Travel Agency Pro</div>
              <div className="text-sm text-slate-500">Enterprise Customer</div>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "Finally got my baby's passport photo right on the first try. The infant mode is genius!"
              </p>
              <div className="font-semibold">Mike R.</div>
              <div className="text-sm text-slate-500">Canada Passport</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your Perfect Passport Photo?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of satisfied customers. 99% acceptance rate guaranteed.
          </p>
          <Link
            to="/start"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
          >
            Start Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
