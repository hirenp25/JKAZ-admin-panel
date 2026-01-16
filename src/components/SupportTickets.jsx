import React from 'react';

const tickets = [
  { id: 101, user: "Rohan Das", issue: "Payment Failed", priority: "High", time: "2 hrs ago" },
  { id: 102, user: "Anjali K", issue: "Account Locked", priority: "Medium", time: "5 hrs ago" },
  { id: 103, user: "Mike T", issue: "Feature Request", priority: "Low", time: "1 day ago" },
  { id: 104, user: "Sarah J", issue: "Login Issue", priority: "High", time: "2 days ago" },
];

const SupportTickets = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Support Tickets</h3>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">2 New</span>
      </div>
      
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex justify-between items-center p-3 dark:bg-gray-800  dark:bg-grey-700 rounded hover:bg-red-50 dark:hover:bg-black-400  transition">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-2 h-2 rounded-full ${ticket.priority === 'High' ? 'bg-red-500' : ticket.priority === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white ">{ticket.issue}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{ticket.user}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{ticket.time}</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-blue-600 font-medium hover:underline">View All Tickets</button>
    </div>
  );
};

export default SupportTickets;