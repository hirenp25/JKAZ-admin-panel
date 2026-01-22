import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
         <div className="text-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Forgot Password?</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
               Enter your email and we'll send you instructions to reset your password.
            </p>
         </div>

         <form className="space-y-6">
            <div>
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
               <input type="email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your email" />
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
               Send Reset Link
            </button>
         </form>

         <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center justify-center">
               <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
               Back to Login
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ForgotPassword;