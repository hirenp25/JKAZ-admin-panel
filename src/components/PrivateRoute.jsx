import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Local storage se check karein ki user logged in hai
  const auth = localStorage.getItem('user'); 
  
  // Agar auth hai to content dikhao (Outlet), nahi to Login pe bhejo
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;