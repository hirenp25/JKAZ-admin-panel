import React from 'react';

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Analytics Overview</h2>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
           <p className="text-gray-500 dark:text-gray-400 text-sm">Avg. Session Duration</p>
           <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">4m 32s</h3>
           <span className="text-green-500 text-sm font-medium">↑ 12% vs last week</span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500">
           <p className="text-gray-500 dark:text-gray-400 text-sm">Bounce Rate</p>
           <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">42.5%</h3>
           <span className="text-red-500 text-sm font-medium">↓ 2% (Improvement)</span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-orange-500">
           <p className="text-gray-500 dark:text-gray-400 text-sm">Active Pages</p>
           <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">18</h3>
           <span className="text-gray-400 text-sm">Real-time</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Traffic Sources</h3>
          <div className="space-y-5">
             
             {/* Direct */}
             <div>
               <div className="flex justify-between mb-1">
                 <span className="text-gray-700 dark:text-gray-300 font-medium">Direct</span>
                 <span className="text-gray-500 text-sm">45%</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                 <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
               </div>
             </div>

             {/* Social Media */}
             <div>
               <div className="flex justify-between mb-1">
                 <span className="text-gray-700 dark:text-gray-300 font-medium">Social Media</span>
                 <span className="text-gray-500 text-sm">30%</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                 <div className="bg-pink-500 h-2.5 rounded-full w-[30%]"></div>
               </div>
             </div>

             {/* Referral */}
             <div>
               <div className="flex justify-between mb-1">
                 <span className="text-gray-700 dark:text-gray-300 font-medium">Referral</span>
                 <span className="text-gray-500 text-sm">15%</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                 <div className="bg-green-500 h-2.5 rounded-full w-[15%]"></div>
               </div>
             </div>

             {/* Organic Search */}
             <div>
               <div className="flex justify-between mb-1">
                 <span className="text-gray-700 dark:text-gray-300 font-medium">Organic Search</span>
                 <span className="text-gray-500 text-sm">10%</span>
               </div>
               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                 <div className="bg-orange-500 h-2.5 rounded-full w-[10%]"></div>
               </div>
             </div>

          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
           <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 self-start">Device Breakdown</h3>
           
           {/* CSS Only Pie Chart Representation */}
           <div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 animate-spin-slow">
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                 <div className="text-center">
                    <span className="block text-2xl font-bold text-gray-800 dark:text-white">Total</span>
                    <span className="text-sm text-gray-500">Visits</span>
                 </div>
              </div>
           </div>

           <div className="flex gap-6 mt-8">
              <div className="flex items-center">
                 <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                 <span className="text-sm text-gray-600 dark:text-gray-300">Desktop (55%)</span>
              </div>
              <div className="flex items-center">
                 <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                 <span className="text-sm text-gray-600 dark:text-gray-300">Mobile (35%)</span>
              </div>
              <div className="flex items-center">
                 <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                 <span className="text-sm text-gray-600 dark:text-gray-300">Tablet (10%)</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;