import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

// A layout for centered pages
const CenteredLayout = ({ children }) => {
  return (
    <div className="page-centered">
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<CenteredLayout><LoginPage /></CenteredLayout>} />
        {/* Other routes will be added as pages are created */}

        {/* Redirect base path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
