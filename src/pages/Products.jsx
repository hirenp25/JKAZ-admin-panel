import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

// Dummy Data
const initialProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 120, stock: 45, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Smart Watch Series 7", category: "Electronics", price: 250, stock: 0, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Running Shoes", category: "Fashion", price: 85, stock: 20, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Leather Bag", category: "Fashion", price: 150, stock: 12, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Office Chair", category: "Furniture", price: 300, stock: 5, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Mechanical Keyboard", category: "Electronics", price: 100, stock: 30, image: "https://images.unsplash.com/photo-1587829741301-dc798b91a05e?auto=format&fit=crop&w=400&q=80" },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering Logic
  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setProducts(initialProducts);
    } else {
      setProducts(initialProducts.filter((p) => p.category === category));
    }
  };

  return (
    <div className="p-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Products Inventory</h2>
        <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center shadow-md transition-all">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Add New Product
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
        {["All", "Electronics", "Fashion", "Furniture"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
              ${activeCategory === category 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-700"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Products;