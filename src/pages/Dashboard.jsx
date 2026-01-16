import React from 'react';
import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';
import UserChart from '../components/UserChart';
import RecentOrders from '../components/RecentOrders';
import ActivityTimeline from '../components/ActivityTimeline';
import TopProducts from '../components/TopProducts';
// New Widgets
import SupportTickets from '../components/SupportTickets';
import SystemHealth from '../components/SystemHealth';

const Dashboard = () => {
  
  const stats = [
    { title: "Total Users", value: "1,250", color: "#3B82F6", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> },
    { title: "Total Revenue", value: "$45,200", color: "#10B981", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
    { title: "New Orders", value: "54", color: "#F59E0B", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> },
    { title: "Pending Queries", value: "12", color: "#EF4444", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> }
  ];

  return (
    <div className="space-y-8">
      
      {/* 1. Header & Stats */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
          <button className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition">
            Last 30 Days
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* 2. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RevenueChart />
        <UserChart />
      </div>

      {/* 3. Middle Section: System Health + Support Tickets + Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* System Health (Col 1) */}
         <SystemHealth />
         
         {/* Support Tickets (Col 2) */}
         <SupportTickets />
         
         {/* Top Products (Col 3) */}
         <TopProducts />
      </div>

      {/* 4. Bottom Section: Recent Orders & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div>
          <ActivityTimeline />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;