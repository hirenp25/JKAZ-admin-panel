import React from 'react';
import { Link } from 'react-router-dom';

const LockScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-95" style={{backgroundImage: "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')", backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
      <div className="max-w-sm w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 text-center">
         
         <img className="w-24 h-24 rounded-full border-4 border-white/30 mx-auto shadow-lg mb-4" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff&size=200" alt="User" />
         
         <h2 className="text-2xl font-bold text-white">Admin User</h2>
         <p className="text-gray-300 text-sm mb-6">Enter your password to unlock</p>

         <form className="space-y-4">
            <input type="password" className="w-full p-3 bg-white/20 border border-white/10 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-center tracking-widest" placeholder="••••••••" />
            
            <Link to="/" className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
               Unlock
            </Link>
         </form>

         <div className="mt-6">
            <Link to="/login" className="text-sm text-gray-300 hover:text-white">
               Not you? Sign in as a different user
            </Link>
         </div>
      </div>
    </div>
  );
};

export default LockScreen;