import React from 'react';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1); // Mock 35 days grid

  // Dummy Events Data
  const events = [
    { date: 4, title: "Team Meeting", color: "bg-blue-500" },
    { date: 12, title: "Product Launch", color: "bg-red-500" },
    { date: 15, title: "Client Call", color: "bg-green-500" },
    { date: 24, title: "Maintenance", color: "bg-yellow-500 text-black" },
    { date: 28, title: "Report Due", color: "bg-purple-500" },
  ];

  const getEvent = (date) => events.find(e => e.date === date);

  return (
    <div className="p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">January 2026</h2>
        <div className="flex space-x-2">
           <button className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">Previous</button>
           <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Next</button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        
        {/* Days Header */}
        <div className="grid grid-cols-7 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          {days.map(day => (
            <div key={day} className="py-3 text-center text-sm font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wide">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 auto-rows-fr">
          {dates.map((date) => {
            const event = getEvent(date);
            // Hide dates > 31 logic visually (just for demo)
            if (date > 31) return <div key={date} className="h-32 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50"></div>;
            
            return (
              <div key={date} className="h-32 border border-gray-100 dark:border-gray-700 p-2 relative group hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <span className={`text-sm font-semibold ${date === 15 ? 'bg-blue-600 text-white w-7 h-7 flex items-center justify-center rounded-full' : 'text-gray-700 dark:text-gray-300'}`}>
                  {date}
                </span>

                {event && (
                  <div className={`mt-2 px-2 py-1 text-xs text-white rounded shadow-sm cursor-pointer ${event.color} hover:opacity-90`}>
                    {event.title}
                  </div>
                )}
                
                {/* Add Event Button (Hover only) */}
                <button className="absolute bottom-2 right-2 hidden group-hover:block p-1 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-600 dark:text-gray-300">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;