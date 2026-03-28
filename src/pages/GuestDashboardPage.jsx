import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestDashboardPage = () => {
  // This component serves as the entry point and layout for the guest dashboard.
  // It renders the nested routes, allowing for different views like
  // room booking, dining, etc., within the main dashboard structure.
  return (
    <Outlet />
  );
};

export default GuestDashboardPage;
