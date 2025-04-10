"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarToggled(prev => !prev);
  };

  return (
    <div className="app" data-bs-theme="blue-theme">
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Sidebar toggled={sidebarToggled} />
      <MainContent sidebarToggled={sidebarToggled}>
        {children}
      </MainContent>
    </div>
  )
}

export default Layout 