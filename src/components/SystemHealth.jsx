import React from 'react';

const SystemHealth = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 dark:text-white">
      <h3 className="text-lg font-bold mb-6">System Health</h3>
      
      <div className="space-y-6">
        {/* CPU Usage */}
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="opacity-80">CPU Usage</span>
            <span className="font-bold">85%</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2">
            <div className="bg-red-400 h-2 rounded-full w-[85%] transition-all duration-1000"></div>
          </div>
          <p className="text-xs mt-1 opacity-60">High load detected on Core 3</p>
        </div>

        {/* Memory Usage */}
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="opacity-80">Memory (RAM)</span>
            <span className="font-bold">45%</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full w-[45%] transition-all duration-1000"></div>
          </div>
        </div>

        {/* Storage */}
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span className="opacity-80">SSD Storage</span>
            <span className="font-bold">92%</span>
          </div>
          <div className="w-full bg-black/20 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full w-[92%] transition-all duration-1000"></div>
          </div>
          <p className="text-xs mt-1 opacity-60">Cleanup recommended</p>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;