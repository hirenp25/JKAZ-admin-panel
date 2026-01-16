import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import DashboardHome from './pages/Dashboard';
import Users from './pages/Users';
import NotFound from './pages/NotFound'; // <--- Import this
import PrivateRoute from './components/PrivateRoute';
import Settings from './pages/Settings';
import Products from './pages/Products';
import Analytics from './pages/Analytics';
import Orders from './pages/Orders';
import Kanban from './pages/Kanban';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';
import OrderDetails from './pages/OrderDetails';
import Customers from './pages/Customers';
import FileManager from './pages/FileManager';

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          {/* Pehle jo placeholder tha use hata dein */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products" element={<Products />} />
          <Route path="orders/details" element={<OrderDetails />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="chat" element={<Chat />} />
          <Route path="files" element={<FileManager />} />
        </Route>
      </Route>

      {/* Catch All - 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;