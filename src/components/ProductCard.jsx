import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {/* Badge (Stock Status) */}
        <div className="absolute top-2 right-2">
          {product.stock > 0 ? (
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded dark:bg-green-900 dark:text-green-200">
              In Stock
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded dark:bg-red-900 dark:text-red-200">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${product.price}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{product.stock} units left</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded text-sm font-medium transition-colors">
                Edit
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition-colors">
                View
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;