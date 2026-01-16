import React from 'react';

const products = [
  { name: "Wireless Headphones", sales: "1,200", progress: 85, color: "bg-blue-600" },
  { name: "Smart Watch Series 7", sales: "800", progress: 65, color: "bg-green-500" },
  { name: "Ergonomic Chair", sales: "450", progress: 45, color: "bg-orange-500" },
  { name: "Gaming Mouse", sales: "320", progress: 30, color: "bg-purple-500" },
];

const TopProducts = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Top Products</h3>
      
      <div className="space-y-5">
        {products.map((product, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{product.sales} sold</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${product.color}`} 
                style={{ width: `${product.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;