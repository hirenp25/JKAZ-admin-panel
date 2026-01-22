import React, { useState } from 'react';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('blue');

  const colors = [
    { name: 'blue', class: 'bg-blue-600' },
    { name: 'purple', class: 'bg-purple-600' },
    { name: 'green', class: 'bg-green-600' },
    { name: 'red', class: 'bg-red-600' },
    { name: 'orange', class: 'bg-orange-600' },
    { name: 'pink', class: 'bg-pink-600' },
  ];

  return (
    <>
      {/* Toggle Button (Fixed on Right) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-0 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg z-40 hover:bg-blue-700 transition-all transform -translate-y-1/2"
      >
        <svg className="w-6 h-6 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        ></div>
      )}

      {/* Sidebar Panel */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-6 h-full flex flex-col">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Theme Settings</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
           </div>

           <div className="space-y-6 flex-1 overflow-y-auto">
              
              {/* Layout Mode */}
              <div>
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Layout Mode</h4>
                 <div className="flex gap-2">
                    <button className="flex-1 py-2 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-md font-medium text-sm">Light</button>
                    <button className="flex-1 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md font-medium text-sm">Dark</button>
                 </div>
              </div>

              {/* Sidebar Color */}
              <div>
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Primary Color</h4>
                 <div className="grid grid-cols-3 gap-3">
                    {colors.map((c) => (
                       <button 
                         key={c.name}
                         onClick={() => setColor(c.name)}
                         className={`h-10 rounded-lg ${c.class} ${color === c.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                       ></button>
                    ))}
                 </div>
              </div>

              {/* Sidebar Type */}
              <div>
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Sidebar Type</h4>
                 <select className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg dark:text-white">
                    <option>Fixed (Default)</option>
                    <option>Condensed</option>
                    <option>Scrollable</option>
                 </select>
              </div>

           </div>

           {/* Footer */}
           <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
              <button className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium mb-3">Reset Settings</button>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold shadow-lg">Buy Now</button>
           </div>
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;