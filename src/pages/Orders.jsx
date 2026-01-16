import React, { useState } from 'react';

const Orders = () => {
  const [filter, setFilter] = useState("All");

  const orders = [
    { id: "#ORD-7890", customer: "Rohan Sharma", date: "Oct 24, 2023", amount: "$120.00", status: "Delivered", payment: "Credit Card" },
    { id: "#ORD-7891", customer: "Anjali Gupta", date: "Oct 24, 2023", amount: "$85.50", status: "Pending", payment: "PayPal" },
    { id: "#ORD-7892", customer: "Mike Tyson", date: "Oct 23, 2023", amount: "$350.00", status: "Cancelled", payment: "Visa" },
    { id: "#ORD-7893", customer: "Sneha Reddy", date: "Oct 22, 2023", amount: "$60.00", status: "Delivered", payment: "UPI" },
    { id: "#ORD-7894", customer: "Vikram Singh", date: "Oct 21, 2023", amount: "$1200.00", status: "Shipped", payment: "Credit Card" },
  ];

  // Status Badge Logic
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Shipped': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredOrders = filter === "All" ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Order History</h2>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
          {['All', 'Delivered', 'Pending', 'Cancelled'].map((status) => (
             <button 
               key={status}
               onClick={() => setFilter(status)}
               className={`px-4 py-2 text-sm font-medium rounded-md transition-all 
               ${filter === status ? 'bg-blue-600 text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
             >
               {status}
             </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase font-medium border-b border-gray-100 dark:border-gray-600">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400 cursor-pointer">{order.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.customer}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.payment}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-800 dark:text-white">{order.amount}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" title="Download Invoice">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
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

export default Orders;