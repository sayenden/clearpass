import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How ClearPass Works
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get compliant passport photos in minutes with our AI-powered platform
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">1. Choose Your Document</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Select your country and document type from our database of 100+ supported documents. 
                Each has specific requirements that our AI understands perfectly.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                <li>• US Passport, Visa, Green Card</li>
                <li>• UK Passport, Visa applications</li>
                <li>• Canada Passport, eTA, Study permits</li>
                <li>• And 97+ more countries</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-slate-600 dark:text-slate-300">Interactive country selector</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">2. Capture or Upload</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Use our live camera with AR guidance overlays, or upload an existing photo. 
                Our system provides real-time feedback for perfect positioning.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                <li>• Live camera with face detection</li>
                <li>• AR overlays for perfect alignment</li>
                <li>• Drag & drop file upload</li>
                <li>• Instant validation feedback</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-slate-600 dark:text-slate-300">Camera with AR guidance</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">3. AI Processing</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our AI analyzes your photo against official requirements, replaces the background, 
                and provides a detailed compliance report.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                <li>• Background replacement</li>
                <li>• Compliance validation</li>
                <li>• Size and positioning optimization</li>
                <li>• Quality enhancement</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <p className="text-slate-600 dark:text-slate-300">AI processing in seconds</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⬇️</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">4. Download & Print</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Get your compliant photo as a digital file for online applications, 
                plus a print-ready sheet for physical submissions.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                <li>• High-resolution digital file</li>
                <li>• 4x6" print sheet with multiple photos</li>
                <li>• Compliance guarantee certificate</li>
                <li>• Instant download</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📄</div>
              <p className="text-slate-600 dark:text-slate-300">Ready-to-use files</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/start"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try It Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
