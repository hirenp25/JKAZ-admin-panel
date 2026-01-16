import React from 'react';

const tasks = [
  { id: 1, title: "Design Login Page", desc: "Create UI for login with dark mode", tag: "Design", status: "To Do" },
  { id: 2, title: "Fix API Error", desc: "User fetch returning 500 error", tag: "Bug", status: "To Do" },
  { id: 3, title: "Integrate Charts", desc: "Add recharts library for stats", tag: "Dev", status: "In Progress" },
  { id: 4, title: "Sidebar Navigation", desc: "Make sidebar responsive", tag: "Dev", status: "Done" },
  { id: 5, title: "Client Meeting", desc: "Discuss project requirements", tag: "Meeting", status: "Done" },
];

const KanbanColumn = ({ title, status, color }) => {
  const columnTasks = tasks.filter(t => t.status === status);

  return (
    <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-full min-h-[500px]">
      <div className={`flex justify-between items-center mb-4 pb-2 border-b-2 ${color}`}>
        <h3 className="font-bold text-gray-700 dark:text-gray-200">{title}</h3>
        <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-600 dark:text-gray-300 font-bold">
          {columnTasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {columnTasks.map(task => (
          <div key={task.id} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide
                ${task.tag === 'Design' ? 'bg-pink-100 text-pink-600' : 
                  task.tag === 'Bug' ? 'bg-red-100 text-red-600' : 
                  'bg-blue-100 text-blue-600'}`}>
                {task.tag}
              </span>
              <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </button>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{task.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{task.desc}</p>
            
            <div className="flex items-center justify-between mt-4">
               <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700" src={`https://ui-avatars.com/api/?name=User+${task.id}&background=random`} alt="" />
               </div>
               <span className="text-xs text-gray-400 flex items-center">
                 <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 2 days
               </span>
            </div>
          </div>
        ))}
        {/* Add Card Button */}
        <button className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium transition-colors">
           + Add Task
        </button>
      </div>
    </div>
  );
};

const Kanban = () => {
  return (
    <div className="p-6 h-[calc(100vh-100px)]">
      <div className="flex justify-between items-center mb-6">
         <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Project Board</h2>
         <div className="flex items-center space-x-2">
            <div className="flex -space-x-2 mr-4">
                {[1,2,3].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="" />)}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Add Member</button>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 h-full">
        <KanbanColumn title="To Do" status="To Do" color="border-red-500" />
        <KanbanColumn title="In Progress" status="In Progress" color="border-yellow-500" />
        <KanbanColumn title="Completed" status="Done" color="border-green-500" />
      </div>
    </div>
  );
};

export default Kanban;