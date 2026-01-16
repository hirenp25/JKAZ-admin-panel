import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../utils/menuItems';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Auto-open submenu based on current URL
  useEffect(() => {
    const activeIndex = MENU_ITEMS.findIndex(item => 
      item.submenu && item.subMenuItems.some(sub => location.pathname.startsWith(sub.path))
    );
    if (activeIndex !== -1) {
      setOpenSubMenu(activeIndex);
    }
  }, [location.pathname]);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 dark:bg-gray-900 text-white transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-0 shadow-xl flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-700 shrink-0">
           <div className="bg-blue-600 p-2 rounded-lg mr-3">
             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
           </div>
           <h1 className="text-2xl font-bold tracking-wider">NEXUS<span className="text-blue-500">ADMIN</span></h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar mt-6">
          {MENU_ITEMS.map((item, index) => {
            
            // LOGIC CHANGE: Check if ANY child path matches the start of the current URL
            // Example: if URL is '/orders/details', and menu item is '/orders', it will return true.
            const isParentActive = item.submenu && item.subMenuItems.some(sub => 
              location.pathname === sub.path || location.pathname.startsWith(sub.path + '/')
            );

            return (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button 
                      onClick={() => handleSubMenuClick(index)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors duration-200 hover:bg-slate-800 dark:hover:bg-gray-800
                      ${openSubMenu === index || isParentActive ? "bg-slate-800 text-blue-400" : "text-gray-400"}`}
                    >
                      <div className="flex items-center">
                        {item.icon("w-5 h-5 mr-3")}
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <svg className={`w-4 h-4 transition-transform ${openSubMenu === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    
                    {/* Submenu Items */}
                    {(openSubMenu === index || isParentActive) && (
                      <div className="pl-10 mt-2 space-y-1">
                        {item.subMenuItems.map((subItem, subIndex) => {
                          
                          // Check active state for sub-items
                          const isChildActive = location.pathname === subItem.path || location.pathname.startsWith(subItem.path + '/');

                          return (
                            <NavLink 
                              key={subIndex} 
                              to={subItem.path} 
                              className={`block py-2 text-sm transition-colors ${isChildActive ? "text-blue-400 font-semibold" : "text-gray-500 hover:text-gray-300"}`}
                              onClick={toggleSidebar}
                            >
                              {subItem.title}
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink 
                    to={item.path} 
                    end={item.path === '/'} 
                    className={({ isActive }) => 
                      `flex items-center p-3 rounded-lg transition-colors duration-200 
                      ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "text-gray-400 hover:bg-slate-800 dark:hover:bg-gray-800 hover:text-white"}`
                    }
                    onClick={toggleSidebar}
                  >
                    {item.icon("w-5 h-5 mr-3")}
                    <span className="font-medium">{item.title}</span>
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
        
        {/* Footer Card */}
        <div className="p-4 shrink-0">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 relative overflow-hidden">
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