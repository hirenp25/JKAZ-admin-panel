import React, { useState } from 'react';

const Forms = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Form Elements</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. GENERAL INPUTS */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-6 border-b pb-2 border-gray-100 dark:border-gray-700">General Inputs</h3>
           
           <div className="space-y-5">
              {/* Default Input */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default Input</label>
                 <input type="text" placeholder="John Doe" className="w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:text-white transition-all" />
              </div>

              {/* Helper Text */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">With Helper Text</label>
                 <input type="email" placeholder="john@example.com" className="w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">We'll never share your email with anyone else.</p>
              </div>

              {/* Disabled */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled Input</label>
                 <input type="text" disabled value="System Generated ID" className="w-full p-2.5 bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg text-gray-500 cursor-not-allowed" />
              </div>

              {/* Select Option */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Option</label>
                 <select className="w-full p-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:text-white">
                    <option>Choose a country</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>Germany</option>
                 </select>
              </div>
           </div>
        </div>

        {/* 2. CHECKS, RADIOS & TOGGLES */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-6 border-b pb-2 border-gray-100 dark:border-gray-700">Checks & Radios</h3>
           
           <div className="space-y-6">
              
              {/* Checkboxes */}
              <div>
                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Checkbox Variants</p>
                 <div className="flex gap-6">
                    <div className="flex items-center">
                       <input id="chk1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                       <label htmlFor="chk1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default</label>
                    </div>
                    <div className="flex items-center">
                       <input id="chk2" type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                       <label htmlFor="chk2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked</label>
                    </div>
                 </div>
              </div>

              {/* Radios */}
              <div>
                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Radio Variants</p>
                 <div className="flex gap-6">
                    <div className="flex items-center">
                       <input id="rad1" type="radio" name="radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                       <label htmlFor="rad1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                    </div>
                    <div className="flex items-center">
                       <input id="rad2" type="radio" name="radio-group" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                       <label htmlFor="rad2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 2</label>
                    </div>
                 </div>
              </div>

              {/* Toggles (Custom Switch) */}
              <div>
                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Toggle Switch</p>
                 <button 
                  onClick={() => setToggle(!toggle)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${toggle ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
                 >
                   <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggle ? 'translate-x-6' : 'translate-x-1'}`} />
                 </button>
                 <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">{toggle ? 'Enabled' : 'Disabled'}</span>
              </div>

           </div>
        </div>

        {/* 3. FILE UPLOAD & TEXT AREA */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-6 border-b pb-2 border-gray-100 dark:border-gray-700">Advanced Inputs</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Text Area */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message / Bio</label>
                 <textarea rows="5" className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" placeholder="Write something here..."></textarea>
              </div>

              {/* File Dropzone */}
              <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload File</label>
                 <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input type="file" className="hidden" />
                    </label>
                </div> 
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Forms;