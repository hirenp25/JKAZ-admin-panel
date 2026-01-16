import React, { useState } from 'react';

const Settings = () => {
  // State for Toggles
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    session: false
  });

  // Toggle Handler
  const handleToggle = (category, key) => {
    if (category === 'notifications') {
      setNotifications({ ...notifications, [key]: !notifications[key] });
    } else {
      setSecurity({ ...security, [key]: !security[key] });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img 
                  className="w-32 h-32 rounded-full border-4 border-blue-100 dark:border-gray-600 object-cover" 
                  src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff&size=128" 
                  alt="Profile" 
                />
                <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </button>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Admin User</h3>
              <p className="text-gray-500 dark:text-gray-400">Super Administrator</p>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                <input type="text" defaultValue="Admin User" className="w-full mt-1 p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" />
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Email Address</label>
                <input type="email" defaultValue="admin@test.com" className="w-full mt-1 p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Settings Options */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Notifications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Notifications
            </h3>
            
            <div className="space-y-4">
              {/* Toggle Item */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive weekly digests and updates.</p>
                </div>
                <button 
                  onClick={() => handleToggle('notifications', 'email')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.email ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.email ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Push Notifications</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive real-time alerts on your device.</p>
                </div>
                <button 
                  onClick={() => handleToggle('notifications', 'push')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.push ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.push ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

               <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>

               <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">SMS Alerts</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get critical alerts via text message.</p>
                </div>
                <button 
                  onClick={() => handleToggle('notifications', 'sms')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifications.sms ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.sms ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Security
            </h3>
            
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security.</p>
                </div>
                <button 
                  onClick={() => handleToggle('security', 'twoFactor')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${security.twoFactor ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${security.twoFactor ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="mt-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Change Password</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;