import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
            <header className="main-header">
                <NavLink to="/guest-dashboard" className="logo-text">Elite Hotel</NavLink>
                <nav className="main-nav">
                    <ul>
                        {/* Note: These NavLinks will require sub-routes to be configured in App.jsx */}
                        <li><NavLink to="/guest-dashboard" end>Room Booking</NavLink></li>
                        <li><NavLink to="/guest-dashboard/dining">Buffet & Dining</NavLink></li>
                        <li><NavLink to="/guest-dashboard/events">Event Planning</NavLink></li>
                        <li><NavLink to="/guest-dashboard/history">My Bookings</NavLink></li>
                        <li><NavLink to="/guest-dashboard/profile">Profile</NavLink></li>
                        <li><NavLink to="/login">Logout</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Outlet /> {/* Child routes will render here */}
            </main>
        </>
    );
};

export default DashboardLayout;
