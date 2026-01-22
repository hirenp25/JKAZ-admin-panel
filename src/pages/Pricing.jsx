import React from 'react';

const Pricing = () => {
  return (
    <div className="p-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Choose your plan</h2>
         <p className="text-gray-500 dark:text-gray-400 mt-2">Simple pricing. No hidden fees. Cancel anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
         
         {/* Basic Plan */}
         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Starter</h3>
            <div className="mt-4 flex items-baseline">
               <span className="text-4xl font-extrabold text-gray-800 dark:text-white">$19</span>
               <span className="ml-1 text-xl text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-4">
               {['5 Projects', 'Up to 10 Users', 'Basic Analytics', 'Email Support'].map(feat => (
                  <li key={feat} className="flex items-center text-gray-600 dark:text-gray-300">
                     <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {feat}
                  </li>
               ))}
            </ul>
            <button className="mt-8 w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">Get Started</button>
         </div>

         {/* Pro Plan (Highlighted) */}
         <div className="bg-blue-600 rounded-2xl shadow-xl p-8 border-2 border-blue-500 transform scale-105 relative">
            <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</span>
            <h3 className="text-lg font-bold text-blue-100 uppercase tracking-wide">Business</h3>
            <div className="mt-4 flex items-baseline text-white">
               <span className="text-4xl font-extrabold">$49</span>
               <span className="ml-1 text-xl text-blue-200">/mo</span>
            </div>
            <ul className="mt-6 space-y-4">
               {['Unlimited Projects', 'Up to 50 Users', 'Advanced Analytics', 'Priority Support', 'Custom Reports'].map(feat => (
                  <li key={feat} className="flex items-center text-white">
                     <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {feat}
                  </li>
               ))}
            </ul>
            <button className="mt-8 w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition">Get Started</button>
         </div>

         {/* Enterprise Plan */}
         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Enterprise</h3>
            <div className="mt-4 flex items-baseline">
               <span className="text-4xl font-extrabold text-gray-800 dark:text-white">$99</span>
               <span className="ml-1 text-xl text-gray-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-4">
               {['Unlimited Everything', 'Unlimited Users', 'Dedicated Account Manager', '24/7 Phone Support', 'SSO Authentication'].map(feat => (
                  <li key={feat} className="flex items-center text-gray-600 dark:text-gray-300">
                     <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {feat}
                  </li>
               ))}
            </ul>
            <button className="mt-8 w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">Contact Sales</button>
         </div>

      </div>
    </div>
  );
};

export default Pricing;