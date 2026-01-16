import React, { useState, useRef, useEffect } from 'react';

const HeaderNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock Data
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Order Received", desc: "Order #1234 from John Doe", time: "2 min ago", type: "order", isRead: false },
    { id: 2, title: "Server Overload", desc: "CPU usage reached 95%", time: "1 hour ago", type: "alert", isRead: false },
    { id: 3, title: "New User Registered", desc: "Welcome Amit to the platform", time: "3 hours ago", type: "user", isRead: true },
    { id: 4, title: "System Update", desc: "Version 2.0 deployed successfully", time: "Yesterday", type: "system", isRead: true },
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Toggle Dropdown
  const toggleNotifications = () => setIsOpen(!isOpen);

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Icon Helper
  const getIcon = (type) => {
    switch(type) {
      case 'order': return <div className="bg-blue-100 text-blue-600 p-2 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg></div>;
      case 'alert': return <div className="bg-red-100 text-red-600 p-2 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div>;
      case 'user': return <div className="bg-green-100 text-green-600 p-2 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg></div>;
      default: return <div className="bg-gray-100 text-gray-600 p-2 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Bell Button */}
      <button 
        onClick={toggleNotifications} 
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        
        {/* Red Badge for Count */}
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center border-2 border-white dark:border-gray-800">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden border border-gray-100 dark:border-gray-700 animate-fade-in-down">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-600">
            <h3 className="font-semibold text-gray-600 dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
                Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0 cursor-pointer
                    ${!notif.isRead ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notif.type)}
                  </div>
                  <div className="ml-3 w-full">
                    <p className={`text-sm ${!notif.isRead ? 'font-semibold text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                      {notif.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                      {notif.desc}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 text-right">{notif.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-gray-500">No new notifications</div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-gray-100 dark:border-gray-700 text-center">
            <button className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 block w-full py-1">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNotifications;