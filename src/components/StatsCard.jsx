import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4" 
      style={{ borderColor: color }} // Dynamic Border Color
    >
      <div className="flex items-center justify-between">
        
        {/* Text Info */}
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
            {value}
          </h3>
        </div>

        {/* Icon Circle */}
        <div 
          className="p-3 rounded-full text-white shadow-sm"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;