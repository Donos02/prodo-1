"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-[#0f1535]/70 backdrop-blur-md h-[70px] flex items-center px-6 shadow-md border-b border-[rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Logo and Toggle button */}
        <div className="flex items-center gap-4">
          <button 
            className="text-white hover:bg-[#181f4a] p-2 rounded-lg transition-colors" 
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <span className="material-icons-outlined" >menu</span>
          </button>

          <div className="text-white font-bold text-xl">DONOZ</div>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <div className="relative w-full">
            <input 
              className="form-control rounded-full px-5 py-2 w-full bg-[#070c29]/40 text-white placeholder-gray-400 border border-[rgba(255,255,255,0.15)] focus:outline-none focus:border-blue-500 backdrop-blur-sm" 
              type="text" 
              placeholder="Search..."
            />
            {/* <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-icons-outlined">search</span>
            </span> */}
          </div>
        </div>

        {/* Right side - User menu and actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="text-white hover:bg-[#181f4a] p-2 rounded-full relative">
            <span className="material-icons-outlined">notifications</span>
            <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </button>

          {/* Language */}
          <button className="text-white hover:bg-[#181f4a] p-2 rounded-full">
            <span className="material-icons-outlined">language</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 text-white cursor-pointer p-1 rounded-full hover:bg-[#181f4a]">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <Image 
                src="/avatar-placeholder.png" 
                alt="User" 
                width={32} 
                height={32}
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iZ3JheSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTggMTB2OGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnYtOE02IDJoOGEyIDIgMCAwIDEgMiAydjYgTTEwIDJhMyAzIDAgMSAwIDAgNiAzIDMgMCAwIDAgMC02eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar