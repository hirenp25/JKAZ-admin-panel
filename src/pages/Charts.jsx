import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const Charts = () => {
  
  // 1. Data for Line & Area Charts
  const salesData = [
    { name: 'Jan', sales: 4000, profit: 2400 },
    { name: 'Feb', sales: 3000, profit: 1398 },
    { name: 'Mar', sales: 2000, profit: 9800 },
    { name: 'Apr', sales: 2780, profit: 3908 },
    { name: 'May', sales: 1890, profit: 4800 },
    { name: 'Jun', sales: 2390, profit: 3800 },
    { name: 'Jul', sales: 3490, profit: 4300 },
  ];

  // 2. Data for Bar Chart
  const revenueData = [
    { name: '2019', online: 4000, offline: 2400 },
    { name: '2020', online: 3000, offline: 1398 },
    { name: '2021', online: 2000, offline: 9800 },
    { name: '2022', online: 2780, offline: 3908 },
    { name: '2023', online: 1890, offline: 4800 },
  ];

  // 3. Data for Pie Chart
  const deviceData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 300 },
    { name: 'Other', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Charts Showcase</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. AREA CHART (Gradient) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Sales Trend (Area)</h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="name" stroke="#888888" />
                 <YAxis stroke="#888888" />
                 <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                 />
                 <Area type="monotone" dataKey="sales" stroke="#3B82F6" fillOpacity={1} fill="url(#colorSales)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* 2. BAR CHART (Grouped) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Revenue Sources (Bar)</h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                 <XAxis dataKey="name" stroke="#888888" />
                 <YAxis stroke="#888888" />
                 <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                 />
                 <Legend />
                 <Bar dataKey="online" fill="#8884d8" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="offline" fill="#82ca9d" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* 3. LINE CHART (Double Lines) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Profit vs Sales (Line)</h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                 <XAxis dataKey="name" stroke="#888888" />
                 <YAxis stroke="#888888" />
                 <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }} />
                 <Legend />
                 <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
                 <Line type="monotone" dataKey="sales" stroke="#82ca9d" strokeWidth={3} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* 4. PIE CHART (Donut) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Device Usage (Donut)</h3>
           <div className="h-72 flex justify-center items-center">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={deviceData}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   fill="#8884d8"
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {deviceData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }} />
                 <Legend verticalAlign="bottom" height={36}/>
               </PieChart>
             </ResponsiveContainer>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Charts;