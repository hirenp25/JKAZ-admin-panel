import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      
      {/* Animated 404 Text */}
      <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-500 drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Subtext with Pulse Effect */}
      <h2 className="text-4xl font-bold mt-4 animate-pulse">
        Page Not Found
      </h2>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 text-center max-w-md">
        Oops! The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      {/* SVG Illustration (Ghost/Empty State) */}
      <div className="mt-8">
        <svg className="w-64 h-64 text-gray-400 dark:text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Go Back Button */}
      <Link 
        to="/" 
        className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;