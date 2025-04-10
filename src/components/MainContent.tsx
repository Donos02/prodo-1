"use client"

import React from 'react'

interface MainContentProps {
  children: React.ReactNode;
  sidebarToggled: boolean;
}

const MainContent = ({ children, sidebarToggled }: MainContentProps) => {
  return (
    <main className={`main-wrapper bg-transparent ${sidebarToggled ? 'ml-[70px]' : 'ml-[260px]'} mt-[70px] min-h-screen p-6 transition-all duration-300 ease-in-out`}>
      <div className="main-content bg-transparent">
        {/* Page breadcrumb */}
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl font-semibold text-white breadcrumb-title">Dashboard</h1>
          <nav className="page-breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li className="breadcrumb-item">
                <a href="#" className="text-blue-400">Option1</a>
              </li>
              <li className="breadcrumb-item">
                <span className="text-gray-200">Option2</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main content wrapper */}
        <div className="p-0 bg-transparent">
          {children}
        </div>
      </div>
    </main>
  )
}

export default MainContent 