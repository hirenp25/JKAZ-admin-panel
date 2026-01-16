import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../utils/menuItems';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar Container - Supports Dark Mode classes (dark:bg-gray-800) */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 dark:bg-gray-900 text-white transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-0 shadow-xl`}
      >
        
        {/* Logo Area */}
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
           {/* Logo Icon */}
           <div className="bg-blue-600 p-2 rounded-lg mr-3">
             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
           </div>
           <h1 className="text-2xl font-bold tracking-wider">JKAZ<span className="text-blue-500">ADMIN</span></h1>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-4 space-y-2 overflow-y-auto max-h-[calc(100vh-5rem)] custom-scrollbar">
          {MENU_ITEMS.map((item, index) => (
            <div key={index}>
              {/* If item has Submenu */}
              {item.submenu ? (
                <div>
                  <button 
                    onClick={() => handleSubMenuClick(index)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors duration-200 hover:bg-slate-800
                    ${openSubMenu === index ? "bg-slate-800 text-blue-400" : "text-gray-400"}`}
                  >
                    <div className="flex items-center">
                      {item.icon("w-5 h-5 mr-3")}
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {/* Arrow Icon handles rotation */}
                    <svg className={`w-4 h-4 transition-transform ${openSubMenu === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  
                  {/* Submenu List */}
                  {openSubMenu === index && (
                    <div className="pl-10 mt-2 space-y-1">
                      {item.subMenuItems.map((subItem, subIndex) => (
                        <NavLink 
                          key={subIndex} 
                          to={subItem.path} 
                          className={({ isActive }) => `block py-2 text-sm transition-colors ${isActive ? "text-blue-400 font-semibold" : "text-gray-500 hover:text-gray-300"}`}
                          onClick={toggleSidebar} // Close sidebar on mobile on click
                        >
                          {subItem.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Simple Link
                <NavLink 
                  to={item.path} 
                  end={item.path === '/'} // Exact match for dashboard
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg transition-colors duration-200 
                    ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "text-gray-400 hover:bg-slate-800 hover:text-white"}`
                  }
                  onClick={toggleSidebar}
                >
                  {item.icon("w-5 h-5 mr-3")}
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              )}
            </div>
          ))}
        </nav>
        <div className="p-4 shrink-0">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 relative overflow-hidden">
            {/* Abstract Circle Decoration */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-white opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-white opacity-10 rounded-full"></div>
            
            <h4 className="font-bold text-white relative z-10">Go Pro</h4>
            <p className="text-xs text-blue-100 mt-1 relative z-10">Get access to advanced analytics.</p>
            <button className="mt-3 w-full bg-white text-blue-600 text-xs font-bold py-2 rounded shadow-sm hover:bg-gray-50 transition relative z-10">
              Upgrade Now
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">v1.0.2 © Nexus</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;