import React from 'react';

const Customers = () => {
  const customers = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com", location: "Mumbai, India", orders: 12, spent: "$1,200", lastOrder: "2 days ago", status: "Active" },
    { id: 2, name: "Sarah Connor", email: "sarah@test.com", location: "California, USA", orders: 5, spent: "$450", lastOrder: "1 week ago", status: "Active" },
    { id: 3, name: "Rahul Verma", email: "rahul@tech.com", location: "Bangalore, India", orders: 2, spent: "$120", lastOrder: "1 month ago", status: "Inactive" },
    { id: 4, name: "Priya Singh", email: "priya@design.com", location: "Delhi, India", orders: 24, spent: "$3,400", lastOrder: "Yesterday", status: "VIP" },
    { id: 5, name: "John Doe", email: "john@doe.com", location: "London, UK", orders: 1, spent: "$50", lastOrder: "3 months ago", status: "Blocked" },
  ];

  return (
    <div className="p-6">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
           <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Total Customers</h3>
           <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">2,543</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
           <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Active Members</h3>
           <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">1,850</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
           <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">VIP Customers</h3>
           <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">120</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Customer Database</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">Export CSV</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                        <img className="w-9 h-9 rounded-full mr-3" src={`https://ui-avatars.com/api/?name=${c.name}&background=random`} alt="" />
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{c.name}</p>
                            <p className="text-xs text-gray-500">{c.email}</p>
                        </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{c.location}</td>
                  <td className="px-6 py-4 font-bold">{c.orders}</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">{c.spent}</td>
                  <td className="px-6 py-4 text-xs">{c.lastOrder}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold
                        ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 
                          c.status === 'VIP' ? 'bg-purple-100 text-purple-700' : 
                          'bg-red-100 text-red-700'}`}>
                        {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-blue-600 mr-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;