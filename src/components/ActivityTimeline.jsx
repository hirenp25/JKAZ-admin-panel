import React from 'react';

const activities = [
  { text: "New Order #ORD-001 received", time: "5 min ago", color: "bg-green-500" },
  { text: "Server rebooted successfully", time: "2 hrs ago", color: "bg-blue-500" },
  { text: "New user registered", time: "4 hrs ago", color: "bg-purple-500" },
  { text: "Product price updated", time: "Yesterday", color: "bg-yellow-500" },
  { text: "Database backup completed", time: "Yesterday", color: "bg-indigo-500" },
];

const ActivityTimeline = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Recent Activity</h3>
      
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative pl-8">
            {/* Dot on Timeline */}
            <span className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 ${activity.color}`}></span>
            
            <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.text}</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;