import React from 'react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center p-6">
      <div className="mb-8">
         {/* Simple Gear Icon Animation */}
         <svg className="w-24 h-24 text-blue-600 animate-spin-slow mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Under Maintenance</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
         We are currently performing scheduled maintenance to improve our services. We'll be back shortly.
      </p>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
         Notify Me When It's Up
      </Link>
    </div>
  );
};

export default Maintenance;