import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex">
      <Sidebar onToggle={setIsSidebarCollapsed} />
      <div className="flex-1 flex flex-col ml-64">
        <TopNavbar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
