import React from 'react';

const Crypto = () => {
  const coins = [
    { name: "Bitcoin", symbol: "BTC", price: "$42,500.00", change: "+2.4%", color: "text-green-500", bg: "bg-orange-100 text-orange-600" },
    { name: "Ethereum", symbol: "ETH", price: "$3,200.00", change: "-1.2%", color: "text-red-500", bg: "bg-purple-100 text-purple-600" },
    { name: "Solana", symbol: "SOL", price: "$102.00", change: "+5.7%", color: "text-green-500", bg: "bg-blue-100 text-blue-600" },
    { name: "Cardano", symbol: "ADA", price: "$1.20", change: "+0.5%", color: "text-green-500", bg: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Crypto Dashboard</h2>
         <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Connect Wallet</button>
      </div>

      {/* 1. Ticker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coins.map((coin, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
             <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${coin.bg} font-bold`}>{coin.symbol}</div>
                <span className={`text-sm font-bold ${coin.color}`}>{coin.change}</span>
             </div>
             <h3 className="text-gray-500 dark:text-gray-400 text-sm">{coin.name}</h3>
             <p className="text-2xl font-bold text-gray-800 dark:text-white">{coin.price}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* 2. Portfolio Balance (Big Card) */}
         <div className="lg:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
               <p className="text-gray-400 mb-1">Total Balance</p>
               <h1 className="text-5xl font-bold mb-6">$84,300.50</h1>
               
               <div className="flex gap-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition">Deposit</button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition">Withdraw</button>
               </div>
            </div>
         </div>

         {/* 3. Recent Transactions */}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
               {[1,2,3,4].map((item) => (
                  <div key={item} className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                     <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                        </div>
                        <div>
                           <p className="text-sm font-bold text-gray-800 dark:text-white">Received BTC</p>
                           <p className="text-xs text-gray-500">Today, 10:20 AM</p>
                        </div>
                     </div>
                     <span className="text-green-500 font-bold text-sm">+0.45 BTC</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Crypto;