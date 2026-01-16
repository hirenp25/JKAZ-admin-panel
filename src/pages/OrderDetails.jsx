import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetails = () => {
  // Real app me 'id' useParams() se aayega aur API call hogi
  // const { id } = useParams();
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6 print:hidden">
        <div className="flex items-center gap-2">
            <Link to="/orders" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </Link>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Order Details</h2>
        </div>
        <div className="flex gap-3">
             <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50">
                Download PDF
             </button>
             <button onClick={handlePrint} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                Print Invoice
             </button>
        </div>
      </div>

      {/* Invoice Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 print:shadow-none print:border-0">
        
        {/* Invoice Header */}
        <div className="p-8 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between">
           <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">INVOICE</h1>
              <p className="text-sm text-gray-500">Order #ORD-7890</p>
              <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                 Paid & Delivered
              </div>
           </div>
           <div className="text-right mt-4 md:mt-0">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">Nexus Admin</h3>
              <p className="text-sm text-gray-500">456, Tech Park, Silicon Valley</p>
              <p className="text-sm text-gray-500">California, USA</p>
              <p className="text-sm text-gray-500">support@nexus.com</p>
           </div>
        </div>

        {/* Customer & Shipping Info */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <h4 className="text-gray-500 text-xs font-bold uppercase mb-2">Bill To</h4>
              <p className="font-bold text-gray-800 dark:text-white">Rohan Sharma</p>
              <p className="text-sm text-gray-500">rohan@gmail.com</p>
              <p className="text-sm text-gray-500">+91 98765 43210</p>
           </div>
           <div>
              <h4 className="text-gray-500 text-xs font-bold uppercase mb-2">Shipped To</h4>
              <p className="font-bold text-gray-800 dark:text-white">Rohan Sharma</p>
              <p className="text-sm text-gray-500">Flat 402, Green residency</p>
              <p className="text-sm text-gray-500">Mumbai, Maharashtra, 400001</p>
              <p className="text-sm text-gray-500">Oct 24, 2023</p>
           </div>
        </div>

        {/* Order Items Table */}
        <div className="p-8">
           <div className="overflow-x-auto">
               <table className="w-full text-left mb-8">
                   <thead>
                       <tr className="border-b border-gray-200 dark:border-gray-700 text-xs uppercase text-gray-500">
                           <th className="py-2">Item</th>
                           <th className="py-2 text-center">Quantity</th>
                           <th className="py-2 text-right">Unit Price</th>
                           <th className="py-2 text-right">Total</th>
                       </tr>
                   </thead>
                   <tbody className="text-gray-700 dark:text-gray-300">
                       <tr className="border-b border-gray-100 dark:border-gray-700">
                           <td className="py-4">
                               <div className="flex items-center">
                                   <div className="w-10 h-10 bg-gray-200 rounded mr-3 bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80')"}}></div>
                                   <div>
                                       <p className="font-bold text-gray-800 dark:text-white">Wireless Headphones</p>
                                       <p className="text-xs text-gray-500">Electronics</p>
                                   </div>
                               </div>
                           </td>
                           <td className="text-center">1</td>
                           <td className="text-right">$120.00</td>
                           <td className="text-right font-bold">$120.00</td>
                       </tr>
                       <tr className="border-b border-gray-100 dark:border-gray-700">
                           <td className="py-4">
                               <div className="flex items-center">
                                   <div className="w-10 h-10 bg-gray-200 rounded mr-3 bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80')"}}></div>
                                   <div>
                                       <p className="font-bold text-gray-800 dark:text-white">Running Shoes</p>
                                       <p className="text-xs text-gray-500">Fashion</p>
                                   </div>
                               </div>
                           </td>
                           <td className="text-center">2</td>
                           <td className="text-right">$85.00</td>
                           <td className="text-right font-bold">$170.00</td>
                       </tr>
                   </tbody>
               </table>
           </div>

           {/* Total Calculation */}
           <div className="flex justify-end">
               <div className="w-64 space-y-2">
                   <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                       <span>Subtotal</span>
                       <span>$290.00</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                       <span>Tax (10%)</span>
                       <span>$29.00</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                       <span>Shipping</span>
                       <span>Free</span>
                   </div>
                   <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white pt-2">
                       <span>Total</span>
                       <span>$319.00</span>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;