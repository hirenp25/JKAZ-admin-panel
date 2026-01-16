import React from 'react';

const orders = [
  { id: '#ORD-001', customer: 'Amit Sharma', product: 'MacBook Pro M1', amount: '$1200', status: 'Completed', img: 'https://ui-avatars.com/api/?name=Amit+Sharma' },
  { id: '#ORD-002', customer: 'Priya Singh', product: 'iPhone 14', amount: '$800', status: 'Pending', img: 'https://ui-avatars.com/api/?name=Priya+Singh' },
  { id: '#ORD-003', customer: 'Rahul Verma', product: 'Sony WH-1000XM5', amount: '$350', status: 'Cancelled', img: 'https://ui-avatars.com/api/?name=Rahul+Verma' },
  { id: '#ORD-004', customer: 'Sneha Gupta', product: 'Samsung S23', amount: '$950', status: 'Completed', img: 'https://ui-avatars.com/api/?name=Sneha+Gupta' },
  { id: '#ORD-005', customer: 'Vikram M', product: 'iPad Air', amount: '$600', status: 'Pending', img: 'https://ui-avatars.com/api/?name=Vikram+M' },
];

const RecentOrders = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Recent Orders</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={order.img} alt="" className="w-8 h-8 rounded-full" />
                  {order.customer}
                </td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4 font-semibold">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${order.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : 
                      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;