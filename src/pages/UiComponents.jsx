import React, { useState } from 'react';

const UiComponents = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">UI Components Kit</h2>

      {/* 1. BUTTONS SECTION */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">Buttons</h3>
        
        {/* Solid Buttons */}
        <div className="space-y-4">
            <h4 className="text-sm text-gray-500">Solid Variants</h4>
            <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Primary</button>
                <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition">Secondary</button>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">Success</button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">Danger</button>
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition">Warning</button>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">Info</button>
            </div>
        </div>

        {/* Outline Buttons */}
        <div className="space-y-4 mt-6">
            <h4 className="text-sm text-gray-500">Outline Variants</h4>
            <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition">Primary</button>
                <button className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition">Danger</button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">Light</button>
            </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4 mt-6">
            <h4 className="text-sm text-gray-500">Sizes</h4>
            <div className="flex flex-wrap items-center gap-3">
                <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded transition">Small</button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded transition">Default</button>
                <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded transition">Large</button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 2. ALERTS SECTION */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
             <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">Alerts</h3>
             <div className="space-y-4">
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded dark:bg-blue-900/30 dark:text-blue-200" role="alert">
                    <p className="font-bold">Info Alert</p>
                    <p className="text-sm">Something important just happened.</p>
                </div>
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded dark:bg-green-900/30 dark:text-green-200" role="alert">
                    <p className="font-bold">Success</p>
                    <p className="text-sm">Your changes have been saved successfully.</p>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded dark:bg-yellow-900/30 dark:text-yellow-200" role="alert">
                    <p className="font-bold">Warning</p>
                    <p className="text-sm">Your account is pending approval.</p>
                </div>
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded dark:bg-red-900/30 dark:text-red-200" role="alert">
                    <p className="font-bold">Error</p>
                    <p className="text-sm">Something went wrong. Please try again.</p>
                </div>
             </div>
          </div>

          {/* 3. BADGES & MODALS */}
          <div className="space-y-8">
              {/* Badges */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                 <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">Badges</h3>
                 <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Purple</span>
                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Pink</span>
                 </div>
              </div>

              {/* Modal Demo */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                 <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">Modal Example</h3>
                 <p className="text-sm text-gray-500 mb-4">Click the button below to launch a demo modal dialog.</p>
                 <button 
                   onClick={() => setShowModal(true)}
                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition"
                 >
                   Launch Demo Modal
                 </button>
              </div>
          </div>
      </div>

      {/* --- MODAL COMPONENT (Overlay) --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 animate-fade-in">
           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all scale-100">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xl font-bold text-gray-800 dark:text-white">Modal Title</h3>
                 <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                 This is a reusable modal component. You can place any content here like forms, alerts, or details.
              </p>
              <div className="flex justify-end space-x-3">
                 <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">Cancel</button>
                 <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Confirm Action</button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default UiComponents;