import React from 'react';

const Profile = () => {
  return (
    <div>
      {/* Cover Image */}
      <div className="h-64 w-full bg-gradient-to-r from-blue-500 to-purple-600 relative">
         <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        
        {/* Profile Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
           <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 mb-4">
              <img className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff&size=200" alt="Profile" />
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-1">
                 <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin User</h1>
                 <p className="text-gray-500 dark:text-gray-300">Full Stack Developer • Mumbai, India</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                 <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600">Message</button>
                 <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">Follow</button>
              </div>
           </div>

           {/* Profile Tabs */}
           <div className="flex border-b border-gray-200 dark:border-gray-700 mt-6">
              <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">Overview</button>
              <button className="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700">Projects</button>
              <button className="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700">Connections</button>
              <button className="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700">Activity</button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
           {/* Left Sidebar: About */}
           <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                 <h3 className="font-bold text-gray-800 dark:text-white mb-4">About</h3>
                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Experienced developer with a focus on building scalable web applications. Loves React, Tailwind, and Node.js.
                 </p>
                 <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                       <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                       admin@nexus.com
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                       <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                       www.nexus-admin.com
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Content: Feed/Projects */}
           <div className="lg:col-span-2 space-y-6">
              {/* Post Input */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex gap-4">
                 <img className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="" />
                 <input type="text" placeholder="What's on your mind?" className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 text-sm focus:outline-none dark:text-white" />
              </div>

              {/* Sample Post */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                 <div className="flex items-center mb-4">
                    <img className="w-10 h-10 rounded-full mr-3" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="" />
                    <div>
                       <h4 className="font-bold text-gray-800 dark:text-white text-sm">Admin User</h4>
                       <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                 </div>
                 <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    Just deployed the new version of the dashboard. Performance has improved by 40%! 🚀
                 </p>
                 <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                    [Image Placeholder]
                 </div>
                 <div className="flex gap-4 text-sm text-gray-500">
                    <button className="flex items-center hover:text-blue-600"><span className="mr-1">❤️</span> Like</button>
                    <button className="flex items-center hover:text-blue-600"><span className="mr-1">💬</span> Comment</button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;