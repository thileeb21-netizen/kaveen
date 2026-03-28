import React from 'react';
import { Outlet } from 'react-router-dom';

const CenteredLayout = () => {
  return (
    <div className="page-centered">
      <Outlet />
    </div>
  );
};

export default CenteredLayout;
