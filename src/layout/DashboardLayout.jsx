import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import HeaderNotifications from '../components/HeaderNotifications';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      
      {/* Sidebar - Remains Fixed */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full">
        
        {/* SCROLLABLE AREA STARTS HERE */}
        {/* Header ko ab humne 'main' ke andar daal diya hai taaki wo scroll ho sake */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          
          {/* Header Section */}
          <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-10 md:static md:z-0">
  
  {/* Left Side: Hamburger & Title */}
  <div className="flex items-center">
    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 dark:text-gray-200 focus:outline-none md:hidden mr-4">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h2>
  </div>

  {/* Right Side: Actions */}
  <div className="flex items-center space-x-3 sm:space-x-4">
      
      {/* 1. Theme Toggle */}
      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 transition-colors focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600">
        {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )}
      </button>

      {/* 2. Notifications (NEW) */}
      <HeaderNotifications />

      {/* 3. Profile Dropdown */}
      <div className="relative group">
        <button className="flex items-center space-x-2 focus:outline-none">
          <img className="w-8 h-8 rounded-full border border-gray-300 object-cover" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="admin" />
          <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block font-medium">Admin</span>
          <svg className="w-4 h-4 text-gray-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
        
        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-0 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 hidden group-hover:block ring-1 ring-black ring-opacity-5 z-50 animate-fade-in-up">
            <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-600">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">Admin User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@test.com</p>
            </div>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">My Profile</Link>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Account Settings</Link>
            <div className="border-t border-gray-100 dark:border-gray-600"></div>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">Logout</button>
        </div>
      </div>
  </div>
</header>

          {/* Page Content */}
          <div className="p-6">
            <Outlet />
          </div>

        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;