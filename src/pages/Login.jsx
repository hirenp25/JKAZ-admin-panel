import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); 

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@test.com" && password === "1234") {
        localStorage.setItem('user', JSON.stringify({ email }));
        navigate('/'); 
      } else {
        setError("Invalid credentials! Try: admin@test.com / 1234");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      
      <div 
        className="hidden lg:flex w-1/2 bg-cover bg-center relative items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80')" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 text-white text-center px-12">
          <h1 className="text-5xl font-bold mb-6 tracking-wide">JKAZ<span className="text-blue-400">ADMIN</span></h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Manage your analytics, users, and settings from one powerful dashboard. 
          </p>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        
       
        <button 
          onClick={toggleTheme} 
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 shadow-sm hover:shadow-md transition-all duration-300"
          title="Toggle Theme"
        >
          {theme === 'light' ? (
             // Moon Icon
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          ) : (
             // Sun Icon
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          )}
        </button>
        {/* ----------------------------------------------- */}

        <div className="max-w-md w-full p-8">
          
          <div className="lg:hidden text-center mb-8">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-white">NEXUS<span className="text-blue-600">ADMIN</span></h2>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded text-sm animate-pulse">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white outline-none transition-all"
                  placeholder="admin@test.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <a href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-800">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white outline-none transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 flex justify-center items-center
                ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-[1.02]"}`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account? <a href="/register" className="text-blue-600 font-semibold hover:underline">Contact Admin</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;