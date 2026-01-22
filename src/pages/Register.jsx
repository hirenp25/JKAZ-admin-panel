import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Left Side - Abstract Background */}
      <div 
        className="hidden lg:flex w-1/2 bg-cover bg-center relative items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70"></div>
        <div className="relative z-10 text-white text-center px-12">
           <h1 className="text-5xl font-bold mb-6">Join Nexus</h1>
           <p className="text-xl text-purple-200">Start managing your business smarter, faster, and better.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
           <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Get your free Nexus account now.</p>
           </div>

           <form className="space-y-4">
              <div className="flex gap-4">
                 <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" placeholder="John" />
                 </div>
                 <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Doe" />
                 </div>
              </div>

              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                 <input type="email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" placeholder="john@example.com" />
              </div>

              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                 <input type="password" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" placeholder="••••••••" />
              </div>

              <div className="flex items-center">
                 <input type="checkbox" id="terms" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    I agree to the <a href="#" className="text-purple-600 hover:underline">Terms</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                 </label>
              </div>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow transition transform hover:scale-[1.02]">
                 Create Account
              </button>
           </form>

           <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                 Already have an account? <Link to="/login" className="text-purple-600 font-bold hover:underline">Sign In</Link>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Register;