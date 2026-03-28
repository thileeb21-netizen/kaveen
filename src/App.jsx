import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import CenteredLayout from './components/layout/CenteredLayout';
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GuestDashboardPage from './pages/GuestDashboardPage';
import StaffDashboardPage from './pages/StaffDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Dashboard Components
import RoomBooking from './components/dashboard/RoomBooking';
import BuffetBooking from './components/dashboard/BuffetBooking';
import HallBooking from './components/dashboard/HallBooking';
import BookingHistory from './components/dashboard/BookingHistory';
import UserProfile from './components/dashboard/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<CenteredLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Guest Dashboard Routes */}
        <Route path="/guest-dashboard" element={<DashboardLayout />}>
          <Route element={<GuestDashboardPage />}>
            <Route index element={<RoomBooking />} />
            <Route path="dining" element={<BuffetBooking />} />
            <Route path="events" element={<HallBooking />} />
            <Route path="history" element={<BookingHistory />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Route>

        {/* Staff & Admin Dashboard Routes */}
        <Route path="/staff-dashboard" element={<DashboardLayout />}>
            <Route index element={<StaffDashboardPage />} />
        </Route>
        <Route path="/admin-dashboard" element={<DashboardLayout />}>
            <Route index element={<AdminDashboardPage />} />
        </Route>

        {/* Redirect base path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
