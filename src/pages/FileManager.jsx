import React from 'react';

const FileManager = () => {
  const folders = [
    { name: "Marketing Assets", size: "2.4 GB", files: 120 },
    { name: "Project Documents", size: "1.2 GB", files: 85 },
    { name: "Design Mockups", size: "850 MB", files: 45 },
    { name: "Invoices 2024", size: "400 MB", files: 200 },
  ];

  const recentFiles = [
    { name: "homepage-banner.jpg", type: "Image", size: "2.4 MB", date: "Just now" },
    { name: "project-proposal.pdf", type: "PDF", size: "1.2 MB", date: "2 hrs ago" },
    { name: "client-meeting.mp4", type: "Video", size: "450 MB", date: "Yesterday" },
    { name: "styles.css", type: "Code", size: "15 KB", date: "2 days ago" },
    { name: "logo-transparent.png", type: "Image", size: "1.5 MB", date: "3 days ago" },
    { name: "financial-report.xlsx", type: "Sheet", size: "45 KB", date: "1 week ago" },
  ];

  const getFileIcon = (type) => {
    switch(type) {
        case 'Image': return <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
        case 'PDF': return <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
        case 'Video': return <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
        default: return <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    }
  };

  return (
    <div className="p-6 h-full flex flex-col md:flex-row gap-6">
      
      {/* Left Sidebar (Storage Info) */}
      <div className="w-full md:w-1/4 space-y-6">
        {/* Upload Button */}
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-medium flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Upload New File
        </button>

        {/* Storage Widget */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white mb-2">Storage Usage</h3>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>45.5 GB Used</span>
                <span>100 GB Total</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
            </div>
            <p className="text-xs text-gray-400">Your storage is 45% full.</p>
        </div>

        {/* Categories List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
             <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-bold text-gray-800 dark:text-white">Categories</div>
             <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                 {['Documents', 'Images', 'Videos', 'Audio', 'Others'].map(cat => (
                     <li key={cat} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 cursor-pointer flex justify-between">
                         <span>{cat}</span>
                         <span className="text-gray-400 text-xs">24 files</span>
                     </li>
                 ))}
             </ul>
        </div>
      </div>

      {/* Main Content (Files Grid) */}
      <div className="flex-1">
          
          {/* Folders Row */}
          <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {folders.map((folder, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                      <svg className="w-10 h-10 text-yellow-400 mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm truncate">{folder.name}</h4>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{folder.files} files</span>
                          <span>{folder.size}</span>
                      </div>
                  </div>
              ))}
          </div>

          {/* Recent Files Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-bold text-gray-800 dark:text-white">Recent Files</h3>
                  <button className="text-blue-600 text-sm hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                      <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase">
                          <tr>
                              <th className="px-6 py-3">File Name</th>
                              <th className="px-6 py-3">Size</th>
                              <th className="px-6 py-3">Last Modified</th>
                              <th className="px-6 py-3 text-right">Action</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                          {recentFiles.map((file, i) => (
                              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                                  <td className="px-6 py-4 flex items-center">
                                      <div className="mr-3">{getFileIcon(file.type)}</div>
                                      <span className="font-medium text-gray-800 dark:text-white">{file.name}</span>
                                  </td>
                                  <td className="px-6 py-4">{file.size}</td>
                                  <td className="px-6 py-4 text-gray-500">{file.date}</td>
                                  <td className="px-6 py-4 text-right">
                                      <button className="text-gray-400 hover:text-blue-600">
                                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>

      </div>
    </div>
  );
};

export default FileManager;