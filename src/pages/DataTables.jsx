import React, { useState, useEffect } from 'react';

// Fake Data Generator (50 Rows)
const generateData = () => {
  const data = [];
  const roles = ['Admin', 'Editor', 'Viewer', 'Maintainer'];
  const locations = ['New York', 'London', 'Tokyo', 'Mumbai', 'Berlin'];
  
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@nexus.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      age: Math.floor(Math.random() * 40) + 20,
      status: Math.random() > 0.5 ? 'Active' : 'Inactive',
      joined: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
    });
  }
  return data;
};

const DataTables = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setData(generateData());
  }, []);

  // Filter Logic
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Advanced Data Tables</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Controls Header */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
           
           {/* Show Rows Dropdown */}
           <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <span>Show</span>
              <select 
                value={itemsPerPage} 
                onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="mx-2 p-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 focus:outline-none"
              >
                 <option value="5">5</option>
                 <option value="10">10</option>
                 <option value="20">20</option>
                 <option value="50">50</option>
              </select>
              <span>entries</span>
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
           <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase font-medium">
                 <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Location</th>
                    <th className="px-6 py-3">Age</th>
                    <th className="px-6 py-3">Joined Date</th>
                    <th className="px-6 py-3">Status</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                 {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                       <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">#{item.id}</td>
                          <td className="px-6 py-4">
                             <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-xs">
                                   {item.name.charAt(0)}
                                </div>
                                <div>
                                   <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
                                   <p className="text-xs text-gray-500">{item.email}</p>
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-4">{item.role}</td>
                          <td className="px-6 py-4">{item.location}</td>
                          <td className="px-6 py-4">{item.age}</td>
                          <td className="px-6 py-4">{item.joined}</td>
                          <td className="px-6 py-4">
                             <span className={`px-2 py-1 rounded-full text-xs font-semibold
                                ${item.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                                {item.status}
                             </span>
                          </td>
                       </tr>
                    ))
                 ) : (
                    <tr>
                       <td colSpan="7" className="px-6 py-4 text-center text-gray-500">No matching records found</td>
                    </tr>
                 )}
              </tbody>
           </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-bold">{indexOfFirstItem + 1}</span> to <span className="font-bold">{Math.min(indexOfLastItem, filteredData.length)}</span> of <span className="font-bold">{filteredData.length}</span> entries
           </div>

           <div className="flex gap-1">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                 Prev
              </button>
              
              {/* Simple Page Numbers */}
              {[...Array(totalPages)].map((_, i) => {
                 // Logic to show limited page numbers can be added here
                 if (i + 1 === 1 || i + 1 === totalPages || (i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1)) {
                    return (
                        <button 
                           key={i} 
                           onClick={() => paginate(i + 1)}
                           className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                           {i + 1}
                        </button>
                    )
                 } else if (i + 1 === currentPage - 2 || i + 1 === currentPage + 2) {
                     return <span key={i} className="px-2">...</span>
                 }
                 return null;
              })}

              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                 Next
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DataTables;